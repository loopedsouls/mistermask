// ============ GERENCIADOR DE ESTADO DO JOGO ============
import { SCREENS, MASKS } from '../config/constants.js';

class GameState {
    constructor() {
        this.reset();
    }

    reset() {
        this.currentScreen = SCREENS.SPLASH;
        this.currentChapter = 1;
        this.menuSelection = 0;
        this.unlockedChapters = [1];
        this.unlockedMasks = [MASKS.SCARLET];
        this.currentMask = MASKS.SCARLET;
        this.unlockedLore = ['frameZero'];
        
        this.player = {
            hp: 85,
            maxHp: 100,
            mp: 70,
            maxMp: 100,
            x: 500,
            y: 0,
            isJumping: false,
            isAttacking: false,
            facingRight: true,
            iteration: 7042
        };
        
        this.enemy = {
            hp: 100,
            maxHp: 100,
            x: 900,
            y: 0,
            type: 'frameBreaker'
        };
        
        this.dialogue = {
            active: false,
            currentIndex: 0,
            lines: []
        };
        
        this.keys = {};
        this.isPaused = false;
    }

    // Screen
    setScreen(screen) {
        this.currentScreen = screen;
    }

    isScreen(screen) {
        return this.currentScreen === screen;
    }

    // Chapters
    setChapter(chapter) {
        this.currentChapter = chapter;
    }

    unlockChapter(chapter) {
        if (!this.unlockedChapters.includes(chapter)) {
            this.unlockedChapters.push(chapter);
            return true;
        }
        return false;
    }

    isChapterUnlocked(chapter) {
        return this.unlockedChapters.includes(chapter);
    }

    // Masks
    setMask(mask) {
        this.currentMask = mask;
    }

    unlockMask(mask) {
        if (!this.unlockedMasks.includes(mask)) {
            this.unlockedMasks.push(mask);
            return true;
        }
        return false;
    }

    isMaskUnlocked(mask) {
        return this.unlockedMasks.includes(mask);
    }

    // Lore
    unlockLore(entryId) {
        if (!this.unlockedLore.includes(entryId)) {
            this.unlockedLore.push(entryId);
            return true;
        }
        return false;
    }

    isLoreUnlocked(entryId) {
        return this.unlockedLore.includes(entryId);
    }

    // Keys
    setKey(key, pressed) {
        this.keys[key.toLowerCase()] = pressed;
    }

    isKeyPressed(key) {
        return this.keys[key.toLowerCase()] === true;
    }

    // Menu
    setMenuSelection(index) {
        this.menuSelection = index;
    }

    // Dialogue
    startDialogue(lines) {
        this.dialogue.active = true;
        this.dialogue.lines = lines;
        this.dialogue.currentIndex = 0;
    }

    nextDialogue() {
        this.dialogue.currentIndex++;
        return this.dialogue.currentIndex < this.dialogue.lines.length;
    }

    getCurrentDialogue() {
        return this.dialogue.lines[this.dialogue.currentIndex] || null;
    }

    endDialogue() {
        this.dialogue.active = false;
        this.dialogue.lines = [];
        this.dialogue.currentIndex = 0;
    }

    isDialogueActive() {
        return this.dialogue.active;
    }

    // Player
    damagePlayer(amount) {
        this.player.hp = Math.max(0, this.player.hp - amount);
        return this.player.hp <= 0;
    }

    healPlayer(amount) {
        this.player.hp = Math.min(this.player.maxHp, this.player.hp + amount);
    }

    useMp(amount) {
        if (this.player.mp >= amount) {
            this.player.mp -= amount;
            return true;
        }
        return false;
    }

    // Enemy
    damageEnemy(amount) {
        this.enemy.hp = Math.max(0, this.enemy.hp - amount);
        return this.enemy.hp <= 0;
    }

    // Serialização (para save/load)
    toJSON() {
        return {
            currentChapter: this.currentChapter,
            unlockedChapters: this.unlockedChapters,
            unlockedMasks: this.unlockedMasks,
            currentMask: this.currentMask,
            unlockedLore: this.unlockedLore,
            player: {
                hp: this.player.hp,
                maxHp: this.player.maxHp,
                mp: this.player.mp,
                maxMp: this.player.maxMp,
                iteration: this.player.iteration
            }
        };
    }

    fromJSON(data) {
        if (data.currentChapter) this.currentChapter = data.currentChapter;
        if (data.unlockedChapters) this.unlockedChapters = data.unlockedChapters;
        if (data.unlockedMasks) this.unlockedMasks = data.unlockedMasks;
        if (data.currentMask) this.currentMask = data.currentMask;
        if (data.unlockedLore) this.unlockedLore = data.unlockedLore;
        if (data.player) {
            Object.assign(this.player, data.player);
        }
    }

    // Pause
    togglePause() {
        this.isPaused = !this.isPaused;
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }
}

// Singleton
export const gameState = new GameState();
export default gameState;
