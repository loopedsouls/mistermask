// ============ SISTEMA DE COMBATE ============
import { ATTACK_RANGE, ATTACK_DAMAGE, ATTACK_DURATION, JUMP_DURATION, PLAYER_SPEED, GAME_WIDTH, GAME_HEIGHT } from '../config/constants.js';
import gameState from '../managers/GameState.js';
import uiManager from '../managers/UIManager.js';
import eventBus, { EVENTS } from '../managers/EventBus.js';
import { roomSystem } from './RoomSystem.js';

class CombatSystem {
    constructor() {
        this.enabled = false;
        this.gravity = 0.8;
        this.jumpForce = -15;
        this.groundY = 450; // Posição Y do chão
    }

    init() {
        this.enabled = true;
        // Inicializar posição Y do jogador
        gameState.player.y = this.groundY;
        gameState.player.velocityY = 0;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    // Movimento
    update() {
        if (!this.enabled) return;
        if (gameState.isDialogueActive()) return;
        
        this.updateMovement();
        this.updatePhysics();
        this.updateEnemy();
        
        // Verificar transição de sala
        roomSystem.checkTransition(gameState.player.x, gameState.player.y);
    }

    updateMovement() {
        const player = gameState.player;
        
        // Movimento horizontal - permitir ir até a borda para transições
        if (gameState.isKeyPressed('arrowleft')) {
            player.x = Math.max(0, player.x - PLAYER_SPEED);
            player.facingRight = false;
        }
        
        if (gameState.isKeyPressed('arrowright')) {
            player.x = Math.min(GAME_WIDTH - 50, player.x + PLAYER_SPEED);
            player.facingRight = true;
        }
        
        uiManager.updatePlayerPosition();
    }

    updatePhysics() {
        const player = gameState.player;
        
        // Aplicar gravidade
        if (player.y < this.groundY) {
            player.velocityY = (player.velocityY || 0) + this.gravity;
            player.y += player.velocityY;
            
            // Colidir com o chão
            if (player.y >= this.groundY) {
                player.y = this.groundY;
                player.velocityY = 0;
                player.isJumping = false;
                uiManager.setPlayerJumping(false);
            }
        }
        
        uiManager.updatePlayerPositionY?.();
    }

    updateEnemy() {
        const enemy = uiManager.elements.enemy;
        if (!enemy) return;
        
        const time = Date.now() / 1000;
        const floatY = Math.sin(time * 2) * 5;
        enemy.style.transform = `translateY(${floatY}px)`;
    }

    // Ações
    jump() {
        if (!this.enabled) return;
        if (gameState.player.isJumping) return;
        if (gameState.player.y < this.groundY) return; // Já no ar
        
        gameState.player.isJumping = true;
        gameState.player.velocityY = this.jumpForce;
        uiManager.setPlayerJumping(true);
    }

    attack() {
        if (!this.enabled) return;
        if (gameState.player.isAttacking) return;
        
        gameState.player.isAttacking = true;
        uiManager.setPlayerAttacking(true);
        
        eventBus.emit(EVENTS.PLAYER_ATTACK);
        
        this.checkHit();
        
        setTimeout(() => {
            gameState.player.isAttacking = false;
            uiManager.setPlayerAttacking(false);
        }, ATTACK_DURATION);
    }

    checkHit() {
        const playerX = gameState.player.x;
        const enemyX = gameState.enemy.x;
        
        if (Math.abs(playerX - enemyX) < ATTACK_RANGE) {
            this.damageEnemy(ATTACK_DAMAGE);
        }
    }

    damageEnemy(amount) {
        const isDead = gameState.damageEnemy(amount);
        
        uiManager.flashElement(uiManager.elements.enemy);
        uiManager.showDamageNumber(gameState.enemy.x, 300, amount);
        
        eventBus.emit(EVENTS.ENEMY_DAMAGE, { damage: amount, remaining: gameState.enemy.hp });
        
        if (isDead) {
            eventBus.emit(EVENTS.ENEMY_DEATH);
        }
    }

    damagePlayer(amount) {
        const isDead = gameState.damagePlayer(amount);
        
        uiManager.flashElement(uiManager.elements.player);
        uiManager.updateBars();
        
        eventBus.emit(EVENTS.PLAYER_DAMAGE, { damage: amount, remaining: gameState.player.hp });
        
        if (isDead) {
            eventBus.emit(EVENTS.PLAYER_DEATH);
        }
    }

    healPlayer(amount) {
        gameState.healPlayer(amount);
        uiManager.updateBars();
    }
}

export const combatSystem = new CombatSystem();
export default combatSystem;
