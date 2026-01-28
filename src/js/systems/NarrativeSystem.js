// ============ SISTEMA DE NARRATIVA ============
import { STORY, getStoryChapter, getPrologue, getEnding } from '../data/story.js';
import { getScenario } from '../data/scenarios.js';
import gameState from '../managers/GameState.js';
import dialogueManager from '../managers/DialogueManager.js';
import eventBus, { EVENTS } from '../managers/EventBus.js';

class NarrativeSystem {
    constructor() {
        this.currentPhase = 'intro'; // intro, preBattle, battle, postBattle, revelation
        this.currentChapter = null;
        this.currentScenario = null;
        this.choiceMade = null;
    }

    init() {
        // Listener para quando diálogo termina
        eventBus.on(EVENTS.DIALOGUE_END, () => this.onDialogueEnd());
    }

    // ═══════════════════════════════════════
    // PRÓLOGO
    // ═══════════════════════════════════════
    startPrologue(onComplete) {
        const prologue = getPrologue();
        this.currentScenario = getScenario(prologue.scenario);
        
        console.log('📖 Iniciando Prólogo: O Despertar');
        
        dialogueManager.start(prologue.dialogues, () => {
            onComplete?.(prologue.nextChapter);
        });
    }

    // ═══════════════════════════════════════
    // CAPÍTULOS
    // ═══════════════════════════════════════
    startChapter(chapterId) {
        const chapter = getStoryChapter(chapterId);
        if (!chapter) {
            console.error(`Capítulo ${chapterId} não encontrado`);
            return;
        }

        this.currentChapter = chapter;
        this.currentScenario = getScenario(chapter.scenario);
        this.currentPhase = 'intro';

        console.log(`📖 Iniciando Capítulo ${chapterId}: ${chapter.title}`);
        
        eventBus.emit(EVENTS.CHAPTER_START, { 
            chapter: chapterId, 
            scenario: this.currentScenario 
        });

        // Iniciar introdução
        this.playIntro();
    }

    playIntro() {
        if (!this.currentChapter?.intro) return;
        
        this.currentPhase = 'intro';
        dialogueManager.start(this.currentChapter.intro, () => {
            this.playPreBattle();
        });
    }

    playPreBattle() {
        if (!this.currentChapter?.preBattle) {
            this.startBattle();
            return;
        }

        this.currentPhase = 'preBattle';
        dialogueManager.start(this.currentChapter.preBattle, () => {
            this.startBattle();
        });
    }

    startBattle() {
        this.currentPhase = 'battle';
        console.log('⚔️ Batalha iniciada!');
        
        eventBus.emit('battle:start', { 
            chapter: this.currentChapter.id,
            boss: this.currentChapter?.boss 
        });
    }

    onBattleComplete() {
        console.log('✅ Batalha vencida!');
        this.playPostBattle();
    }

    playPostBattle() {
        if (!this.currentChapter?.postBattle) {
            this.playRevelation();
            return;
        }

        this.currentPhase = 'postBattle';
        dialogueManager.start(this.currentChapter.postBattle, () => {
            this.playRevelation();
        });
    }

    playRevelation() {
        if (!this.currentChapter?.revelation) {
            this.completeChapter();
            return;
        }

        this.currentPhase = 'revelation';
        dialogueManager.start(this.currentChapter.revelation, () => {
            this.completeChapter();
        });
    }

    completeChapter() {
        const chapterId = this.currentChapter.id;
        console.log(`🏆 Capítulo ${chapterId} completo!`);
        
        // Aplicar desbloqueios
        const unlocks = this.currentChapter.unlocks;
        if (unlocks) {
            unlocks.lore?.forEach(id => gameState.unlockLore(id));
            unlocks.masks?.forEach(id => gameState.unlockMask(id));
            unlocks.chapters?.forEach(id => {
                if (typeof id === 'number') gameState.unlockChapter(id);
            });
        }

        eventBus.emit(EVENTS.CHAPTER_COMPLETE, { 
            chapter: chapterId,
            unlocks 
        });
    }

    // ═══════════════════════════════════════
    // FINAIS
    // ═══════════════════════════════════════
    presentChoice() {
        console.log('🔮 Apresentando escolha final...');
        
        return {
            options: [
                { id: 'reset', label: 'DELETAR', description: 'Resetar a realidade' },
                { id: 'transcend', label: 'TRANSCENDER', description: 'Libertar o mundo' },
                { id: 'seal', label: 'SELAR', description: 'Tornar-se o Guardião' }
            ]
        };
    }

    makeChoice(choiceId) {
        this.choiceMade = choiceId;
        const ending = getEnding(choiceId);
        
        if (!ending) {
            console.error(`Final ${choiceId} não encontrado`);
            return;
        }

        console.log(`🎭 Final escolhido: ${ending.title}`);
        
        dialogueManager.start(ending.dialogues, () => {
            this.onGameComplete(ending);
        });
    }

    onGameComplete(ending) {
        console.log('🎬 FIM DO JOGO');
        console.log(`Final: ${ending.title} (${ending.type})`);
        
        eventBus.emit('game:complete', { 
            ending: ending.id,
            type: ending.type 
        });
    }

    // ═══════════════════════════════════════
    // UTILITÁRIOS
    // ═══════════════════════════════════════
    onDialogueEnd() {
        // Pode ser usado para lógica adicional entre diálogos
    }

    getCurrentPhase() {
        return this.currentPhase;
    }

    getCurrentScenario() {
        return this.currentScenario;
    }

    getProgress() {
        const totalChapters = 4;
        const completed = gameState.unlockedChapters.length - 1;
        return {
            completed,
            total: totalChapters,
            percentage: Math.round((completed / totalChapters) * 100)
        };
    }
}

export const narrativeSystem = new NarrativeSystem();
export default narrativeSystem;
