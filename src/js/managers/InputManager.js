// ============ GERENCIADOR DE INPUT ============
import { KEYS } from '../config/constants.js';
import gameState from './GameState.js';

class InputManager {
    constructor() {
        this.listeners = new Map();
        this.enabled = true;
    }

    init() {
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
        document.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    handleKeyDown(e) {
        if (!this.enabled) return;
        
        const key = e.key.toLowerCase();
        gameState.setKey(key, true);
        
        this.emit('keydown', { key, event: e });
        this.emit(`key:${key}`, { event: e });
        
        // Emitir eventos para ações mapeadas
        for (const [action, keys] of Object.entries(KEYS)) {
            if (keys.includes(key)) {
                this.emit(`action:${action.toLowerCase()}`, { key, event: e });
            }
        }
    }

    handleKeyUp(e) {
        const key = e.key.toLowerCase();
        gameState.setKey(key, false);
        
        this.emit('keyup', { key, event: e });
    }

    // Sistema de eventos
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
        
        // Retorna função para remover listener
        return () => this.off(event, callback);
    }

    off(event, callback) {
        const listeners = this.listeners.get(event);
        if (listeners) {
            const index = listeners.indexOf(callback);
            if (index > -1) listeners.splice(index, 1);
        }
    }

    emit(event, data) {
        const listeners = this.listeners.get(event);
        if (listeners) {
            listeners.forEach(callback => callback(data));
        }
    }

    // Verificações de teclas
    isPressed(key) {
        return gameState.isKeyPressed(key);
    }

    isActionPressed(action) {
        const keys = KEYS[action.toUpperCase()];
        if (!keys) return false;
        return keys.some(key => this.isPressed(key));
    }

    // Habilitar/desabilitar input
    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }

    // Limpar todos os listeners
    clear() {
        this.listeners.clear();
    }
}

export const inputManager = new InputManager();
export default inputManager;
