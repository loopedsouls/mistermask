// ============ GERENCIADOR DE UI ============
import gameState from './GameState.js';
import screenManager from './ScreenManager.js';

class UIManager {
    constructor() {
        this.elements = {};
    }

    init() {
        this.cacheElements();
    }

    cacheElements() {
        this.elements = {
            hpBar: document.getElementById('hp-bar'),
            mpBar: document.getElementById('mp-bar'),
            playerMask: document.querySelector('.player-mask-face'),
            player: document.getElementById('player'),
            enemy: document.getElementById('enemy')
        };
    }

    updateBars() {
        const { hp, maxHp, mp, maxMp } = gameState.player;
        
        if (this.elements.hpBar) {
            const hpPercent = (hp / maxHp) * 100;
            this.elements.hpBar.style.width = `${hpPercent}%`;
        }
        
        if (this.elements.mpBar) {
            const mpPercent = (mp / maxMp) * 100;
            this.elements.mpBar.style.width = `${mpPercent}%`;
        }
    }

    showNotification(text, duration = 3000) {
        const notification = document.createElement('div');
        notification.className = 'unlock-notification';
        notification.textContent = text;
        
        document.getElementById('game-container')?.appendChild(notification);
        
        setTimeout(() => notification.remove(), duration);
    }

    showDamageNumber(x, y, damage) {
        const dmgEl = document.createElement('div');
        dmgEl.className = 'damage-number';
        dmgEl.textContent = `-${damage}`;
        dmgEl.style.left = `${x}px`;
        dmgEl.style.top = `${y}px`;
        
        document.getElementById('game-screen')?.appendChild(dmgEl);
        
        setTimeout(() => dmgEl.remove(), 1000);
    }

    flashElement(element, color = 'white', duration = 100) {
        if (!element) return;
        
        const originalFilter = element.style.filter;
        element.style.filter = `brightness(2) ${color !== 'white' ? `sepia(1) hue-rotate(${color})` : ''}`;
        
        setTimeout(() => {
            element.style.filter = originalFilter;
        }, duration);
    }

    updatePlayerPosition() {
        const { x, facingRight } = gameState.player;
        const player = this.elements.player;
        
        if (player) {
            player.style.left = `${x}px`;
            player.style.transform = facingRight ? 'scaleX(1)' : 'scaleX(-1)';
        }
    }

    updatePlayerMask(maskType, colors) {
        if (this.elements.playerMask && colors) {
            this.elements.playerMask.style.background = 
                `linear-gradient(180deg, ${colors.colorMain} 0%, ${colors.colorSecondary} 100%)`;
        }
    }

    setPlayerJumping(jumping) {
        this.elements.player?.classList.toggle('jumping', jumping);
    }

    setPlayerAttacking(attacking) {
        this.elements.player?.classList.toggle('attacking', attacking);
    }

    showPauseMenu() {
        let pauseMenu = document.getElementById('pause-menu');
        if (!pauseMenu) {
            pauseMenu = document.createElement('div');
            pauseMenu.id = 'pause-menu';
            pauseMenu.className = 'pause-menu';
            pauseMenu.innerHTML = `
                <div class="pause-overlay"></div>
                <div class="pause-content">
                    <h2>PAUSADO</h2>
                    <p>Pressione ESC para continuar</p>
                    <div class="pause-options">
                        <button class="pause-btn" id="resume-btn">Continuar (ESC)</button>
                        <button class="pause-btn" id="menu-btn">Voltar ao Menu</button>
                    </div>
                </div>
            `;
            document.getElementById('game-container')?.appendChild(pauseMenu);
            
            // Eventos
            document.getElementById('resume-btn')?.addEventListener('click', () => {
                eventBus.emit('pause-toggle');
            });
            document.getElementById('menu-btn')?.addEventListener('click', () => {
                // Voltar ao menu
                window.location.reload(); // Simples reload por enquanto
            });
        }
        pauseMenu.classList.remove('hidden');
    }

    hidePauseMenu() {
        const pauseMenu = document.getElementById('pause-menu');
        if (pauseMenu) {
            pauseMenu.classList.add('hidden');
        }
    }
}

export const uiManager = new UIManager();
export default uiManager;
