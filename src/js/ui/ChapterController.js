// ============ CONTROLADOR DE CAPÍTULOS ============
import { CHAPTER_SPLASH_DURATION, DIALOGUE_DELAY, SCREENS } from '../config/constants.js';
import gameState from '../managers/GameState.js';
import screenManager from '../managers/ScreenManager.js';
import dialogueManager from '../managers/DialogueManager.js';
import { getChapter } from '../data/chapters.js';

class ChapterController {
    constructor() {
        this.onChapterComplete = null;
    }

    init(onChapterComplete) {
        this.onChapterComplete = onChapterComplete;
    }

    showSplash(chapterId, onComplete) {
        const chapter = getChapter(chapterId);
        if (!chapter) return;
        
        gameState.setScreen(SCREENS.CHAPTER);
        gameState.setChapter(chapterId);
        
        this.updateSplashContent(chapter);
        screenManager.show('chapter');
        
        setTimeout(() => {
            this.hideSplash(onComplete);
        }, CHAPTER_SPLASH_DURATION);
    }

    updateSplashContent(chapter) {
        const elements = {
            num: document.querySelector('.chapter-num'),
            titleJp: document.querySelector('.title-jp'),
            titleEn: document.querySelector('.title-en'),
            quote: document.querySelector('.chapter-quote p:first-child'),
            mask: document.querySelector('.chapter-mask-icon > div')
        };
        
        if (elements.num) {
            elements.num.textContent = chapter.id;
            elements.num.style.color = chapter.color;
            elements.num.style.textShadow = `0 0 30px ${chapter.color}, 0 0 60px ${chapter.color}80`;
        }
        
        if (elements.titleJp) elements.titleJp.textContent = chapter.titleJp;
        if (elements.titleEn) elements.titleEn.textContent = chapter.titleEn;
        if (elements.quote) elements.quote.textContent = chapter.quote;
        if (elements.mask) elements.mask.className = `${chapter.mask}-mask`;
    }

    hideSplash(onComplete) {
        screenManager.hide('chapter', 'chapter-fade-out 1s ease-out forwards');
        
        setTimeout(() => {
            onComplete?.();
        }, 1000);
    }

    startChapter(chapterId) {
        const chapter = getChapter(chapterId);
        if (!chapter) return;
        
        gameState.setScreen(SCREENS.GAME);
        screenManager.show('game');
        
        // Iniciar diálogos após delay
        setTimeout(() => {
            dialogueManager.start(chapter.dialogues, () => {
                this.onChapterComplete?.(chapterId);
            });
        }, DIALOGUE_DELAY);
    }

    getCurrentChapter() {
        return getChapter(gameState.currentChapter);
    }
}

export const chapterController = new ChapterController();
export default chapterController;
