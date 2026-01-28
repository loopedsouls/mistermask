// ============ GERENCIADOR DE TELAS ============
import { GAME_WIDTH, GAME_HEIGHT } from '../config/constants.js';

class ScreenManager {
    constructor() {
        this.container = null;
        this.screens = {};
        this.currentScreen = null;
    }

    init() {
        this.container = document.getElementById('game-container');
        this.initScaling();
        this.cacheScreens();
    }

    initScaling() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (!this.container) return;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const scaleX = windowWidth / GAME_WIDTH;
        const scaleY = windowHeight / GAME_HEIGHT;
        const scale = Math.min(scaleX, scaleY);
        
        this.container.style.transform = `scale(${scale})`;
        this.container.style.transformOrigin = 'center center';
    }

    cacheScreens() {
        this.screens = {
            splash: document.getElementById('splash-screen'),
            menu: document.getElementById('main-menu'),
            options: document.getElementById('options-menu'),
            codex: document.getElementById('codex-menu'),
            chapter: document.getElementById('chapter-splash'),
            game: document.getElementById('game-screen'),
            henshin: document.getElementById('henshin-screen')
        };
    }

    show(screenName, animation = null) {
        const screen = this.screens[screenName];
        if (!screen) {
            console.warn(`Tela não encontrada: ${screenName}`);
            return;
        }
        
        screen.classList.remove('hidden');
        
        if (animation) {
            screen.style.animation = animation;
        }
        
        this.currentScreen = screenName;
    }

    hide(screenName, animation = null) {
        const screen = this.screens[screenName];
        if (!screen) return;
        
        if (animation) {
            screen.style.animation = animation;
            const duration = parseFloat(animation.match(/[\d.]+s/)?.[0] || '0') * 1000;
            setTimeout(() => {
                screen.classList.add('hidden');
                screen.style.animation = '';
            }, duration);
        } else {
            screen.classList.add('hidden');
        }
    }

    hideAll() {
        Object.values(this.screens).forEach(screen => {
            if (screen) screen.classList.add('hidden');
        });
    }

    transition(from, to, options = {}) {
        const { fadeOut = 'fade-out 0.5s ease-out forwards', fadeIn = 'fade-in 0.5s ease-out' } = options;
        
        this.hide(from, fadeOut);
        
        const duration = parseFloat(fadeOut.match(/[\d.]+s/)?.[0] || '0.5') * 1000;
        setTimeout(() => {
            this.show(to, fadeIn);
        }, duration);
    }

    getScreen(name) {
        return this.screens[name];
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

    getElements(selector) {
        return document.querySelectorAll(selector);
    }
}

export const screenManager = new ScreenManager();
export default screenManager;
