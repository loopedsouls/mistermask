// ============ GERENCIADOR DE DIÁLOGOS ============
import gameState from './GameState.js';
import screenManager from './ScreenManager.js';

class DialogueManager {
    constructor() {
        this.dialogueBox = null;
        this.speakerEl = null;
        this.textEl = null;
        this.onComplete = null;
    }

    init() {
        this.dialogueBox = document.getElementById('dialogue-box');
        this.speakerEl = document.getElementById('speaker-name');
        this.textEl = document.getElementById('dialogue-text');
        
        this.initButtons();
    }

    initButtons() {
        document.getElementById('btn-next')?.addEventListener('click', () => this.next());
        document.getElementById('btn-log')?.addEventListener('click', () => this.openLog());
        document.getElementById('btn-menu')?.addEventListener('click', () => this.openMenu());
    }

    start(dialogues, onComplete = null) {
        if (!dialogues || dialogues.length === 0) return;
        
        gameState.startDialogue(dialogues);
        this.onComplete = onComplete;
        
        this.dialogueBox?.classList.remove('hidden');
        this.updateDisplay();
    }

    next() {
        if (!gameState.isDialogueActive()) return;
        
        const hasMore = gameState.nextDialogue();
        
        if (hasMore) {
            this.updateDisplay();
        } else {
            this.end();
        }
    }

    updateDisplay() {
        const line = gameState.getCurrentDialogue();
        if (!line) return;
        
        if (this.speakerEl) {
            this.speakerEl.textContent = `${line.speaker}:`;
            this.speakerEl.className = `dialogue-name ${line.class || ''}`;
        }
        
        if (this.textEl) {
            this.textEl.textContent = line.text;
        }
    }

    end() {
        this.dialogueBox?.classList.add('hidden');
        gameState.endDialogue();
        
        if (this.onComplete) {
            this.onComplete();
            this.onComplete = null;
        }
    }

    skip() {
        this.end();
    }

    openLog() {
        console.log('📜 Log de diálogos aberto');
    }

    openMenu() {
        console.log('📋 Menu de pausa aberto');
    }

    isActive() {
        return gameState.isDialogueActive();
    }
}

export const dialogueManager = new DialogueManager();
export default dialogueManager;
