// ============ GERENCIADOR DE EVENTOS ============

class EventBus {
    constructor() {
        this.events = new Map();
    }

    on(event, callback, context = null) {
        if (!this.events.has(event)) {
            this.events.set(event, []);
        }
        
        const listener = { callback, context };
        this.events.get(event).push(listener);
        
        // Retorna função para remover
        return () => this.off(event, callback);
    }

    once(event, callback, context = null) {
        const wrapper = (data) => {
            this.off(event, wrapper);
            callback.call(context, data);
        };
        return this.on(event, wrapper, context);
    }

    off(event, callback) {
        const listeners = this.events.get(event);
        if (!listeners) return;
        
        const index = listeners.findIndex(l => l.callback === callback);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    }

    emit(event, data = null) {
        const listeners = this.events.get(event);
        if (!listeners) return;
        
        listeners.forEach(({ callback, context }) => {
            callback.call(context, data);
        });
    }

    clear(event = null) {
        if (event) {
            this.events.delete(event);
        } else {
            this.events.clear();
        }
    }
}

// Eventos do jogo
export const EVENTS = {
    // Telas
    SCREEN_CHANGE: 'screen:change',
    
    // Capítulos
    CHAPTER_START: 'chapter:start',
    CHAPTER_COMPLETE: 'chapter:complete',
    
    // Diálogos
    DIALOGUE_START: 'dialogue:start',
    DIALOGUE_NEXT: 'dialogue:next',
    DIALOGUE_END: 'dialogue:end',
    
    // Máscaras
    MASK_CHANGE: 'mask:change',
    MASK_UNLOCK: 'mask:unlock',
    HENSHIN_START: 'henshin:start',
    HENSHIN_END: 'henshin:end',
    
    // Lore
    LORE_UNLOCK: 'lore:unlock',
    
    // Combate
    PLAYER_ATTACK: 'player:attack',
    PLAYER_DAMAGE: 'player:damage',
    PLAYER_DEATH: 'player:death',
    ENEMY_DAMAGE: 'enemy:damage',
    ENEMY_DEATH: 'enemy:death',
    
    // Progressão
    UNLOCK: 'unlock',
    SAVE: 'save',
    LOAD: 'load'
};

export const eventBus = new EventBus();
export default eventBus;
