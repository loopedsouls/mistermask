// ============ MISTER MASK - GAME MAIN ============
// Arquivo principal que orquestra todos os sistemas

import { SCREENS, MASKS } from './config/constants.js';

// Managers
import gameState from './managers/GameState.js';
import screenManager from './managers/ScreenManager.js';
import inputManager from './managers/InputManager.js';
import dialogueManager from './managers/DialogueManager.js';
import uiManager from './managers/UIManager.js';
import eventBus, { EVENTS } from './managers/EventBus.js';

// Systems
import henshinSystem from './systems/HenshinSystem.js';
import progressionSystem from './systems/ProgressionSystem.js';
import combatSystem from './systems/CombatSystem.js';
import narrativeSystem from './systems/NarrativeSystem.js';
import scenarioSystem from './systems/ScenarioSystem.js';
import { roomSystem } from './systems/RoomSystem.js';

// UI Controllers
import menuController from './ui/MenuController.js';
import chapterController from './ui/ChapterController.js';

// Data
import { LORE_ENTRIES } from './data/lore.js';
import { STORY } from './data/story.js';

class Game {
    constructor() {
        this.isRunning = false;
        this.animationId = null;
    }

    async init() {
        console.log('🎭 Mister Mask - Inicializando...');
        
        // Inicializar managers
        screenManager.init();
        inputManager.init();
        dialogueManager.init();
        uiManager.init();
        
        // Inicializar sistemas
        henshinSystem.init();
        progressionSystem.init();
        combatSystem.init();
        narrativeSystem.init();
        scenarioSystem.init();
        roomSystem.init();
        
        // Inicializar controllers
        menuController.init((players) => this.startGame(players));
        chapterController.init((chapterId) => this.onChapterComplete(chapterId));
        
        // Configurar eventos de input
        this.setupInputHandlers();
        
        // Configurar eventos do eventBus
        eventBus.on('pause-toggle', () => this.togglePause());
        
        // Injetar animações CSS
        this.injectAnimations();
        
        // Iniciar splash screen
        this.startSplash();
        
        console.log('🎭 Mister Mask - Jogo Carregado!');
        console.log('©2026 LoopedSouls Todos os Direitos Reservados');
        this.printControls();
    }

    startSplash() {
        const loadingFill = document.getElementById('loading-fill');
        let progress = 0;
        
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                
                setTimeout(() => {
                    screenManager.hide('splash', 'splash-fade-out 0.5s ease-out forwards');
                    setTimeout(() => menuController.show(), 500);
                }, 500);
            }
            if (loadingFill) loadingFill.style.width = `${progress}%`;
        }, 200);
    }

    setupInputHandlers() {
        inputManager.on('keydown', ({ key, event }) => {
            const screen = gameState.currentScreen;
            
            // Menu
            if (screen === SCREENS.MENU) {
                menuController.handleInput(key);
                return;
            }
            
            // Options
            if (screen === SCREENS.OPTIONS) {
                if (key === 'escape' || key === 'backspace') {
                    menuController.hideOptions();
                }
                return;
            }
            
            // Codex
            if (screen === SCREENS.CODEX) {
                if (key === 'escape' || key === 'backspace') {
                    menuController.hideCodex();
                }
                return;
            }
            
            // Game
            if (screen === SCREENS.GAME) {
                this.handleGameInput(key, event);
            }
        });
    }

    handleGameInput(key, event) {
        // Diálogo ativo - Z avança, X pula
        if (dialogueManager.isActive()) {
            if (key === 'z' || key === 'enter') {
                dialogueManager.next();
            } else if (key === 'x' || key === 'escape') {
                dialogueManager.end();
            }
            return;
        }
        
        // Pause com Escape
        if (key === 'escape') {
            this.togglePause();
            return;
        }
        
        // Se pausado, ignorar outros inputs
        if (gameState.isPaused) return;
        
        // Z = Atacar
        if (key === 'z') {
            event.preventDefault();
            combatSystem.attack();
        }
        
        // X = Pular
        if (key === 'x') {
            combatSystem.jump();
        }
        
        // C = Henshin (transformar)
        if (key === 'c') {
            henshinSystem.trigger(gameState.currentMask);
        }
        
        // Trocar máscaras com 1-4
        if (key === '1' && gameState.isMaskUnlocked(MASKS.SCARLET)) {
            henshinSystem.trigger(MASKS.SCARLET);
        }
        if (key === '2' && gameState.isMaskUnlocked(MASKS.VEIL)) {
            henshinSystem.trigger(MASKS.VEIL);
        }
        if (key === '3' && gameState.isMaskUnlocked(MASKS.ORACLE)) {
            henshinSystem.trigger(MASKS.ORACLE);
        }
        if (key === '4' && gameState.isMaskUnlocked(MASKS.FORBIDDEN)) {
            henshinSystem.trigger(MASKS.FORBIDDEN);
        }
    }

    togglePause() {
        gameState.togglePause();
        if (gameState.isPaused) {
            uiManager.showPauseMenu();
        } else {
            uiManager.hidePauseMenu();
        }
    }

    startGame(players) {
        console.log(`🎮 Iniciando jogo com ${players} jogador(es)`);
        
        // Verificar se é a primeira vez (mostrar prólogo)
        const isFirstTime = gameState.currentChapter === 1 && !progressionSystem.hasSave();
        
        if (isFirstTime) {
            // Mostrar prólogo primeiro
            this.startPrologue();
        } else {
            // Ir direto para o capítulo atual
            this.startChapter(gameState.currentChapter);
        }
    }

    startPrologue() {
        console.log('📖 Iniciando Prólogo...');
        
        // Carregar cenário do void
        scenarioSystem.loadScenario('void');
        gameState.setScreen(SCREENS.GAME);
        screenManager.show('game');
        
        narrativeSystem.startPrologue((nextChapter) => {
            // Após prólogo, iniciar capítulo 1
            this.startChapter(nextChapter);
        });
    }

    startChapter(chapterId) {
        chapterController.showSplash(chapterId, () => {
            // Carregar cenário do capítulo
            const chapter = STORY[`chapter${chapterId}`];
            if (chapter?.scenario) {
                scenarioSystem.loadScenario(chapter.scenario);
            }
            
            // Iniciar narrativa do capítulo
            narrativeSystem.startChapter(chapterId);
            
            gameState.setScreen(SCREENS.GAME);
            screenManager.show('game');
            uiManager.updateBars();
            this.startGameLoop();
        });
    }

    onChapterComplete(chapterId) {
        console.log(`✅ Capítulo ${chapterId} completo!`);
        progressionSystem.completeChapter(chapterId);
    }

    startGameLoop() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        const loop = () => {
            if (!this.isRunning) return;
            
            if (gameState.isScreen(SCREENS.GAME) && !gameState.isPaused) {
                combatSystem.update();
            }
            
            this.animationId = requestAnimationFrame(loop);
        };
        
        loop();
    }

    stopGameLoop() {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    injectAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes splash-fade-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
            
            @keyframes menu-fade-in {
                0% { opacity: 0; transform: scale(0.95); }
                100% { opacity: 1; transform: scale(1); }
            }
            
            @keyframes chapter-fade-out {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
            
            @keyframes float-up {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-50px); opacity: 0; }
            }
            
            @keyframes damage-flash {
                0%, 100% { filter: none; }
                50% { filter: brightness(3) saturate(0); }
            }
        `;
        document.head.appendChild(style);
    }

    printControls() {
        console.log('');
        console.log('=== A ORDEM DO FRAME ZERO ===');
        console.log('Controles (estilo Undertale):');
        console.log('  ←↓↑→      - Mover');
        console.log('  Z         - Atacar / Confirmar');
        console.log('  X         - Pular / Cancelar');
        console.log('  C         - Henshin (Transformar)');
        console.log('  1-4       - Trocar Máscaras');
        console.log('  ESC       - Pausar');
        console.log('');
        console.log('"O corpo é temporário. A máscara é eterna."');
    }
}

// Inicializar jogo quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.init();
    
    // Expor para debug
    window.game = game;
    window.gameState = gameState;
});

export default Game;
