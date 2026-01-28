// ============ SISTEMA DE PROGRESSÃO ============
import gameState from '../managers/GameState.js';
import uiManager from '../managers/UIManager.js';
import eventBus, { EVENTS } from '../managers/EventBus.js';
import { getChapter } from '../data/chapters.js';

class ProgressionSystem {
    constructor() {
        this.saveKey = 'mistermask_save';
    }

    init() {
        this.load();
    }

    completeChapter(chapterId) {
        const chapter = getChapter(chapterId);
        if (!chapter) return;
        
        const unlocks = chapter.unlocks;
        
        // Desbloquear lore
        if (unlocks.lore) {
            unlocks.lore.forEach(loreId => this.unlockLore(loreId));
        }
        
        // Desbloquear máscaras
        if (unlocks.masks) {
            unlocks.masks.forEach(maskId => this.unlockMask(maskId));
        }
        
        // Desbloquear próximo capítulo
        const nextChapter = chapterId + 1;
        if (getChapter(nextChapter)) {
            this.unlockChapter(nextChapter);
        }
        
        eventBus.emit(EVENTS.CHAPTER_COMPLETE, { chapter: chapterId });
        
        this.save();
    }

    unlockMask(maskId) {
        if (gameState.unlockMask(maskId)) {
            const maskNames = {
                scarlet: 'ESCARLATE',
                veil: 'VÉU',
                oracle: 'ORÁCULO',
                forbidden: 'PROIBIDA'
            };
            
            uiManager.showNotification(`🎭 MÁSCARA ${maskNames[maskId] || maskId.toUpperCase()} DESBLOQUEADA`);
            eventBus.emit(EVENTS.MASK_UNLOCK, { mask: maskId });
            
            console.log(`🎭 Nova Máscara Desbloqueada: ${maskNames[maskId]}`);
            return true;
        }
        return false;
    }

    unlockLore(loreId) {
        if (gameState.unlockLore(loreId)) {
            uiManager.showNotification(`📜 NOVA ENTRADA NO CÓDEX`);
            eventBus.emit(EVENTS.LORE_UNLOCK, { lore: loreId });
            
            console.log(`📜 Nova Entrada no Códex: ${loreId}`);
            return true;
        }
        return false;
    }

    unlockChapter(chapterId) {
        if (gameState.unlockChapter(chapterId)) {
            uiManager.showNotification(`📖 CAPÍTULO ${chapterId} DESBLOQUEADO`);
            return true;
        }
        return false;
    }

    save() {
        try {
            const data = gameState.toJSON();
            localStorage.setItem(this.saveKey, JSON.stringify(data));
            console.log('💾 Jogo salvo');
            eventBus.emit(EVENTS.SAVE);
            return true;
        } catch (e) {
            console.error('Erro ao salvar:', e);
            return false;
        }
    }

    load() {
        try {
            const data = localStorage.getItem(this.saveKey);
            if (data) {
                gameState.fromJSON(JSON.parse(data));
                console.log('📂 Jogo carregado');
                eventBus.emit(EVENTS.LOAD);
                return true;
            }
        } catch (e) {
            console.error('Erro ao carregar:', e);
        }
        return false;
    }

    deleteSave() {
        localStorage.removeItem(this.saveKey);
        gameState.reset();
        console.log('🗑️ Save deletado');
    }

    hasSave() {
        return localStorage.getItem(this.saveKey) !== null;
    }
}

export const progressionSystem = new ProgressionSystem();
export default progressionSystem;
