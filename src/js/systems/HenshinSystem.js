// ============ SISTEMA DE HENSHIN (TRANSFORMAÇÃO) ============
import { HENSHIN_DURATION, MASK_INFO } from '../config/constants.js';
import gameState from '../managers/GameState.js';
import screenManager from '../managers/ScreenManager.js';
import uiManager from '../managers/UIManager.js';
import eventBus, { EVENTS } from '../managers/EventBus.js';

class HenshinSystem {
    constructor() {
        this.isTransforming = false;
        this.henshinScreen = null;
    }

    init() {
        this.henshinScreen = screenManager.getScreen('henshin');
    }

    trigger(maskType) {
        if (this.isTransforming) return;
        if (!gameState.isMaskUnlocked(maskType)) return;
        
        this.isTransforming = true;
        
        const maskInfo = MASK_INFO[maskType];
        if (!maskInfo) return;
        
        // Atualizar visual da tela de henshin
        this.updateHenshinVisual(maskType, maskInfo);
        
        // Mostrar tela
        this.henshinScreen?.classList.remove('hidden');
        
        eventBus.emit(EVENTS.HENSHIN_START, { mask: maskType });
        
        // Após animação, finalizar
        setTimeout(() => {
            this.complete(maskType, maskInfo);
        }, HENSHIN_DURATION);
    }

    updateHenshinVisual(maskType, maskInfo) {
        const maskContainer = this.henshinScreen?.querySelector('.henshin-mask-container');
        const maskName = this.henshinScreen?.querySelector('.henshin-name');
        const henshinBg = this.henshinScreen?.querySelector('.henshin-bg');
        
        if (maskContainer) {
            maskContainer.innerHTML = `<div class="${maskType}-mask"></div>`;
        }
        
        if (maskName) {
            maskName.textContent = maskInfo.name;
            maskName.style.color = maskInfo.color;
        }
        
        if (henshinBg) {
            henshinBg.style.background = `radial-gradient(ellipse at center, ${maskInfo.color}22 0%, #000 100%)`;
        }
    }

    complete(maskType, maskInfo) {
        this.henshinScreen?.classList.add('hidden');
        
        gameState.setMask(maskType);
        uiManager.updatePlayerMask(maskType, maskInfo);
        
        this.isTransforming = false;
        
        eventBus.emit(EVENTS.HENSHIN_END, { mask: maskType });
        eventBus.emit(EVENTS.MASK_CHANGE, { mask: maskType });
    }

    getCurrentMask() {
        return gameState.currentMask;
    }

    getMaskInfo(maskType) {
        return MASK_INFO[maskType];
    }
}

export const henshinSystem = new HenshinSystem();
export default henshinSystem;
