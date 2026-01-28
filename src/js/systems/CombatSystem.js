// ============ SISTEMA DE COMBATE ============
import { ATTACK_RANGE, ATTACK_DAMAGE, ATTACK_DURATION, JUMP_DURATION, PLAYER_SPEED, GAME_WIDTH } from '../config/constants.js';
import gameState from '../managers/GameState.js';
import uiManager from '../managers/UIManager.js';
import eventBus, { EVENTS } from '../managers/EventBus.js';

class CombatSystem {
    constructor() {
        this.enabled = false;
    }

    init() {
        this.enabled = true;
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
        this.updateEnemy();
    }

    updateMovement() {
        const player = gameState.player;
        
        if (gameState.isKeyPressed('a') || gameState.isKeyPressed('arrowleft')) {
            player.x = Math.max(50, player.x - PLAYER_SPEED);
            player.facingRight = false;
        }
        
        if (gameState.isKeyPressed('d') || gameState.isKeyPressed('arrowright')) {
            player.x = Math.min(GAME_WIDTH - 100, player.x + PLAYER_SPEED);
            player.facingRight = true;
        }
        
        uiManager.updatePlayerPosition();
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
        
        gameState.player.isJumping = true;
        uiManager.setPlayerJumping(true);
        
        setTimeout(() => {
            gameState.player.isJumping = false;
            uiManager.setPlayerJumping(false);
        }, JUMP_DURATION);
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
