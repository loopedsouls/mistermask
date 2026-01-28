// ============ CONTROLADOR DE MENU ============
import gameState from '../managers/GameState.js';
import screenManager from '../managers/ScreenManager.js';
import { SCREENS } from '../config/constants.js';
import { LORE_ENTRIES } from '../data/lore.js';

class MenuController {
    constructor() {
        this.menuOptions = ['1player', '2player', 'codex', 'options'];
        this.onStartGame = null;
    }

    init(onStartGame) {
        this.onStartGame = onStartGame;
        this.initButtons();
    }

    initButtons() {
        document.querySelectorAll('.menu-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.select(btn.dataset.option);
            });
            
            btn.addEventListener('mouseenter', () => {
                if (!btn.dataset.option?.startsWith('back')) {
                    gameState.setMenuSelection(index);
                    this.updateSelection();
                }
            });
        });
    }

    show() {
        gameState.setScreen(SCREENS.MENU);
        gameState.setMenuSelection(0);
        
        screenManager.show('menu', 'menu-fade-in 0.5s ease-out');
        this.updateSelection();
    }

    hide() {
        screenManager.hide('menu');
    }

    handleInput(key) {
        if (!gameState.isScreen(SCREENS.MENU)) return;
        
        switch(key.toLowerCase()) {
            case 'arrowup':
            case 'w':
                this.moveSelection(-1);
                break;
            case 'arrowdown':
            case 's':
                this.moveSelection(1);
                break;
            case 'enter':
            case ' ':
                this.confirmSelection();
                break;
        }
    }

    moveSelection(direction) {
        const current = gameState.menuSelection;
        const newIndex = Math.max(0, Math.min(this.menuOptions.length - 1, current + direction));
        gameState.setMenuSelection(newIndex);
        this.updateSelection();
    }

    confirmSelection() {
        const option = this.menuOptions[gameState.menuSelection];
        this.select(option);
    }

    updateSelection() {
        document.querySelectorAll('#main-menu .menu-btn').forEach((btn, index) => {
            btn.classList.toggle('selected', index === gameState.menuSelection);
        });
    }

    select(option) {
        switch(option) {
            case '1player':
                this.hide();
                this.onStartGame?.(1);
                break;
            case '2player':
                this.hide();
                this.onStartGame?.(2);
                break;
            case 'codex':
                this.showCodex();
                break;
            case 'options':
                this.showOptions();
                break;
            case 'back':
                this.hideOptions();
                break;
            case 'back-codex':
                this.hideCodex();
                break;
        }
    }

    // Options
    showOptions() {
        gameState.setScreen(SCREENS.OPTIONS);
        screenManager.show('options');
    }

    hideOptions() {
        screenManager.hide('options');
        gameState.setScreen(SCREENS.MENU);
    }

    // Codex
    showCodex() {
        gameState.setScreen(SCREENS.CODEX);
        screenManager.show('codex');
        this.initCodexButtons();
    }

    hideCodex() {
        screenManager.hide('codex');
        gameState.setScreen(SCREENS.MENU);
    }

    initCodexButtons() {
        document.querySelectorAll('.codex-entry-btn').forEach(btn => {
            const entry = btn.dataset.entry;
            
            // Atualizar estado locked
            if (gameState.isLoreUnlocked(entry)) {
                btn.classList.remove('locked');
            }
            
            btn.addEventListener('click', () => {
                if (!gameState.isLoreUnlocked(entry)) return;
                
                document.querySelectorAll('.codex-entry-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.showLoreEntry(entry);
            });
        });
    }

    showLoreEntry(entryKey) {
        const entry = LORE_ENTRIES[entryKey];
        if (!entry) return;
        
        const titleEl = document.getElementById('codex-entry-title');
        const contentEl = document.getElementById('codex-entry-content');
        
        if (titleEl) titleEl.textContent = entry.title;
        if (contentEl) contentEl.innerHTML = `<p>${entry.content}</p>`;
    }
}

export const menuController = new MenuController();
export default menuController;
