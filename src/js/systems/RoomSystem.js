// ============ SISTEMA DE SALAS (METROIDVANIA) ============
import gameState from '../managers/GameState.js';
import screenManager from '../managers/ScreenManager.js';
import uiManager from '../managers/UIManager.js';
import eventBus from '../managers/EventBus.js';
import scenarioSystem from './ScenarioSystem.js';
import { GAME_WIDTH, GAME_HEIGHT } from '../config/constants.js';

// Mapa do mundo - cada sala conecta com outras
export const WORLD_MAP = {
    // CAPÍTULO 1 - Templo
    'temple_entrance': {
        id: 'temple_entrance',
        name: 'Entrada do Templo',
        chapter: 1,
        scenario: 'temple_bridge', // Usa cenário temple
        exits: {
            right: 'temple_bridge'
        },
        enemies: [],
        items: []
    },
    'temple_bridge': {
        id: 'temple_bridge',
        name: 'Ponte do Templo',
        chapter: 1,
        scenario: 'temple_bridge',
        exits: {
            left: 'temple_entrance',
            right: 'temple_inner'
        },
        enemies: ['frame_breaker'],
        items: [],
        boss: true
    },
    'temple_inner': {
        id: 'temple_inner',
        name: 'Interior do Templo',
        chapter: 1,
        scenario: 'temple_bridge',
        exits: {
            left: 'temple_bridge',
            down: 'archives_entrance'
        },
        enemies: [],
        items: ['lore_frameZero']
    },

    // CAPÍTULO 2 - Arquivos
    'archives_entrance': {
        id: 'archives_entrance',
        name: 'Entrada dos Arquivos',
        chapter: 2,
        scenario: 'shadow_archives',
        exits: {
            up: 'temple_inner',
            right: 'archives_hall'
        },
        enemies: ['shadow_sentinel'],
        items: []
    },
    'archives_hall': {
        id: 'archives_hall',
        name: 'Corredor dos Arquivos',
        chapter: 2,
        scenario: 'shadow_archives',
        exits: {
            left: 'archives_entrance',
            right: 'archives_depths',
            down: 'archives_secret'
        },
        enemies: ['shadow_sentinel', 'shadow_sentinel'],
        items: []
    },
    'archives_secret': {
        id: 'archives_secret',
        name: 'Câmara Secreta',
        chapter: 2,
        scenario: 'shadow_archives',
        exits: {
            up: 'archives_hall'
        },
        enemies: [],
        items: ['mask_veil'],
        secret: true
    },
    'archives_depths': {
        id: 'archives_depths',
        name: 'Profundezas dos Arquivos',
        chapter: 2,
        scenario: 'shadow_archives',
        exits: {
            left: 'archives_hall',
            down: 'core_entrance'
        },
        enemies: ['archive_guardian'],
        items: ['lore_vessel'],
        boss: true
    },

    // CAPÍTULO 3 - Núcleo
    'core_entrance': {
        id: 'core_entrance',
        name: 'Portal do Núcleo',
        chapter: 3,
        scenario: 'core_system',
        exits: {
            up: 'archives_depths',
            right: 'core_mainframe'
        },
        enemies: ['data_virus'],
        items: []
    },
    'core_mainframe': {
        id: 'core_mainframe',
        name: 'Mainframe Central',
        chapter: 3,
        scenario: 'core_system',
        exits: {
            left: 'core_entrance',
            right: 'core_heart'
        },
        enemies: ['data_virus', 'corrupted_code'],
        items: ['mask_oracle']
    },
    'core_heart': {
        id: 'core_heart',
        name: 'Coração do Sistema',
        chapter: 3,
        scenario: 'core_system',
        exits: {
            left: 'core_mainframe',
            down: 'frame_zero_gate'
        },
        enemies: ['system_guardian'],
        items: ['lore_truth'],
        boss: true
    },

    // CAPÍTULO 4 - Frame Zero
    'frame_zero_gate': {
        id: 'frame_zero_gate',
        name: 'Portão do Frame Zero',
        chapter: 4,
        scenario: 'frame_zero',
        exits: {
            up: 'core_heart',
            right: 'frame_zero_origin'
        },
        enemies: ['reality_fragment'],
        items: []
    },
    'frame_zero_origin': {
        id: 'frame_zero_origin',
        name: 'Ponto de Origem',
        chapter: 4,
        scenario: 'frame_zero',
        exits: {
            left: 'frame_zero_gate'
        },
        enemies: [],
        items: ['mask_forbidden'],
        boss: true,
        finalBoss: true
    }
};

class RoomSystem {
    constructor() {
        this.currentRoom = null;
        this.visitedRooms = new Set();
        this.transitionLocked = false;
    }

    init() {
        // Começar na entrada do templo
        this.loadRoom('temple_entrance');
    }

    loadRoom(roomId) {
        const room = WORLD_MAP[roomId];
        if (!room) {
            console.error(`Sala não encontrada: ${roomId}`);
            return;
        }

        this.currentRoom = room;
        this.visitedRooms.add(roomId);

        console.log(`🚪 Entrando em: ${room.name}`);

        // Carregar cenário correspondente
        if (room.scenario) {
            scenarioSystem.loadScenario(room.scenario);
        }

        // Atualizar UI
        this.updateRoomUI(room);

        // Spawnar inimigos
        this.spawnEnemies(room);

        // Emitir evento
        eventBus.emit('room:enter', { room });

        return room;
    }

    updateRoomUI(room) {
        // Mostrar nome da sala
        uiManager.showRoomName(room.name);

        // Mostrar indicadores de saída
        this.updateExitIndicators(room.exits);
    }

    updateExitIndicators(exits) {
        // Remover indicadores antigos
        document.querySelectorAll('.exit-indicator').forEach(el => el.remove());

        const gameScreen = document.getElementById('game-screen');
        if (!gameScreen) return;

        // Criar indicadores para cada saída
        Object.entries(exits).forEach(([direction, targetRoom]) => {
            const indicator = document.createElement('div');
            indicator.className = `exit-indicator exit-${direction}`;
            indicator.innerHTML = this.getExitArrow(direction);
            indicator.title = WORLD_MAP[targetRoom]?.name || targetRoom;
            gameScreen.appendChild(indicator);
        });
    }

    getExitArrow(direction) {
        const arrows = {
            left: '◀',
            right: '▶',
            up: '▲',
            down: '▼'
        };
        return arrows[direction] || '•';
    }

    spawnEnemies(room) {
        // TODO: Implementar spawn de inimigos baseado em room.enemies
        if (room.enemies?.length > 0) {
            console.log(`👹 Inimigos: ${room.enemies.join(', ')}`);
        }
    }

    // Verificar se jogador está na borda e transicionar
    checkTransition(playerX, playerY) {
        if (this.transitionLocked) return;
        if (!this.currentRoom?.exits) return;

        const marginH = 50; // Margem horizontal
        const marginV = 100; // Margem vertical
        let targetRoom = null;
        let newPlayerX = playerX;
        let newPlayerY = playerY;

        // Saída pela direita
        if (playerX >= GAME_WIDTH - marginH && this.currentRoom.exits.right) {
            targetRoom = this.currentRoom.exits.right;
            newPlayerX = marginH + 30;
        }
        // Saída pela esquerda
        else if (playerX <= marginH && this.currentRoom.exits.left) {
            targetRoom = this.currentRoom.exits.left;
            newPlayerX = GAME_WIDTH - marginH - 80;
        }
        // Saída por cima (pulo em plataforma superior)
        else if (playerY <= marginV && this.currentRoom.exits.up) {
            targetRoom = this.currentRoom.exits.up;
            newPlayerY = GAME_HEIGHT - marginV - 50;
        }
        // Saída por baixo (queda)
        else if (playerY >= GAME_HEIGHT - marginV && this.currentRoom.exits.down) {
            targetRoom = this.currentRoom.exits.down;
            newPlayerY = marginV;
        }

        if (targetRoom) {
            this.transition(targetRoom, newPlayerX, newPlayerY);
        }
    }

    transition(targetRoomId, newX, newY) {
        this.transitionLocked = true;

        console.log(`🚶 Transição para: ${targetRoomId}`);

        // Fade out
        const gameScreen = document.getElementById('game-screen');
        gameScreen.style.transition = 'opacity 0.3s';
        gameScreen.style.opacity = '0';

        setTimeout(() => {
            // Carregar nova sala
            this.loadRoom(targetRoomId);

            // Reposicionar jogador
            gameState.player.x = newX;
            gameState.player.y = newY;
            uiManager.updatePlayerPosition();

            // Fade in
            gameScreen.style.opacity = '1';

            setTimeout(() => {
                this.transitionLocked = false;
            }, 300);
        }, 300);
    }

    getCurrentRoom() {
        return this.currentRoom;
    }

    getRoomProgress() {
        const totalRooms = Object.keys(WORLD_MAP).length;
        const visited = this.visitedRooms.size;
        return {
            visited,
            total: totalRooms,
            percentage: Math.round((visited / totalRooms) * 100)
        };
    }

    // Verificar se uma sala foi visitada
    hasVisited(roomId) {
        return this.visitedRooms.has(roomId);
    }

    // Obter salas adjacentes
    getAdjacentRooms() {
        if (!this.currentRoom?.exits) return [];
        return Object.values(this.currentRoom.exits);
    }
}

export const roomSystem = new RoomSystem();
export default roomSystem;
