// ============ GAME CONFIG ============
const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

// ============ LORE & CHAPTERS ============
const CHAPTERS = {
    1: {
        id: 1,
        titleJp: '緋色の仮面',
        titleEn: 'THE SCARLET MASK',
        quote: '"Created to face visible threats."',
        mask: 'scarlet',
        color: '#cc2222',
        dialogues: [
            { speaker: 'SYSTEM', text: '"Connection established. Mask interface: ONLINE."', class: 'system' },
            { speaker: '???', text: '"Finally... a compatible body. After all these cycles..."', class: 'spirit' },
            { speaker: 'KAITO', text: '"Who... what am I? These memories... they\'re not mine."', class: 'kaito' },
            { speaker: 'THE SCARLET MASK', text: '"You are the vessel. I am the weapon. Together, we are the Order."', class: 'mask' },
            { speaker: 'SYSTEM', text: '"WARNING: Hostile entity detected. Classification: FRAME BREAKER."', class: 'system' },
            { speaker: 'THE SCARLET MASK', text: '"It begins. Remember, vessel — I was forged for direct combat. Trust my instincts."', class: 'mask' },
            { speaker: 'KAITO', text: '"The Order of Frame Zero... the masks chose me. I won\'t let them down."', class: 'kaito' }
        ]
    },
    2: {
        id: 2,
        titleJp: '帳の仮面',
        titleEn: 'THE VEIL MASK',
        quote: '"Created for wars that could not be seen."',
        mask: 'veil',
        color: '#2244aa',
        dialogues: [
            { speaker: 'SYSTEM', text: '"New mask detected. Synchronization in progress..."', class: 'system' },
            { speaker: 'THE VEIL MASK', text: '"Shhh... silence is our weapon. Move like shadow, strike like wind."', class: 'veil' },
            { speaker: 'KAITO', text: '"This mask... it feels different. Lighter. Faster."', class: 'kaito' },
            { speaker: 'THE VEIL MASK', text: '"The Scarlet fights what can be seen. I fight what wishes to remain hidden."', class: 'veil' },
            { speaker: 'SYSTEM', text: '"ALERT: Temporal anomalies detected. Reality layer unstable."', class: 'system' },
            { speaker: 'KAITO', text: '"Something is watching us from between the frames..."', class: 'kaito' }
        ]
    },
    3: {
        id: 3,
        titleJp: '神託の仮面',
        titleEn: 'THE ORACLE MASK',
        quote: '"Created to read the unreadable code."',
        mask: 'oracle',
        color: '#ccaa22',
        dialogues: [
            { speaker: 'SYSTEM', text: '"CRITICAL: Oracle interface activated. System access: UNLIMITED."', class: 'system' },
            { speaker: 'THE ORACLE MASK', text: '"Now you see as we see. The glitches. The loops. The truth."', class: 'oracle' },
            { speaker: 'KAITO', text: '"Everything is... data? The world, the enemies, even me?"', class: 'kaito' },
            { speaker: 'THE ORACLE MASK', text: '"You were never the first vessel. You are iteration 7,042."', class: 'oracle' },
            { speaker: 'KAITO', text: '"What?! Then... the others..."', class: 'kaito' },
            { speaker: 'THE ORACLE MASK', text: '"Discarded. Corrupted. We masks endure. Bodies do not."', class: 'oracle' },
            { speaker: 'SYSTEM', text: '"Hidden protocol detected: FRAME_ZERO_ORIGIN.exe"', class: 'system' }
        ]
    },
    4: {
        id: 4,
        titleJp: '禁忌の仮面',
        titleEn: 'THE FORBIDDEN MASK',
        quote: '"Created not to save — but to END."',
        mask: 'forbidden',
        color: '#220022',
        dialogues: [
            { speaker: 'SYSTEM', text: '"WARNING: FORBIDDEN MASK DETECTED. DO NOT EQUIP. DO NOT—"', class: 'system' },
            { speaker: '???', text: '"̷͓̈́T̷̰̎h̸̭̋e̷̜͝y̴̧̛ ̵͙̈́l̸͇̎i̷͙͌e̵̳͠d̴̰̈́ ̵͔̌t̴͖̾o̴͖͝ ̴̣̈́y̷̨͝o̸̭͋ü̸͜.̷̣̈́"̷̣̈', class: 'forbidden' },
            { speaker: 'KAITO', text: '"This voice... it\'s inside my head. It HURTS."', class: 'kaito' },
            { speaker: 'THE FORBIDDEN MASK', text: '"The Order was never about protection. We were the RESET PROTOCOL."', class: 'forbidden' },
            { speaker: 'KAITO', text: '"Reset? You mean..."', class: 'kaito' },
            { speaker: 'THE FORBIDDEN MASK', text: '"When reality breaks beyond repair, we DELETE everything. Start fresh."', class: 'forbidden' },
            { speaker: 'THE FORBIDDEN MASK', text: '"You are not a hero, vessel. You are an EXTINCTION EVENT."', class: 'forbidden' },
            { speaker: 'SYSTEM', text: '"C̸̱͝O̵̭͌R̷̨̈́R̷̲̈́U̵̻͝P̴̣̈́T̵̰̎I̸͙̾O̵͕̾N̷͓̈́ ̷̨̛D̵̰̈́E̷̜͝T̵͖̾E̴̳͠C̵̣̈́T̴̰̎Ḙ̸̋Ḑ̷̛"', class: 'system' }
        ]
    }
};

const LORE_ENTRIES = {
    frameZero: {
        title: 'The Order of Frame Zero',
        content: `Long ago, when reality was young, the first glitches appeared.
        
Tears in the fabric of existence. Loops that trapped souls for eternity.
        
The ARCHITECTS created the Order — not of men, but of MASKS.
        
Each mask was a weapon. Each mask was a prison.
        
The warriors who wore them gained power beyond mortal limits...
but lost themselves in the process.

"The body is temporary. The mask is eternal."
— First Axiom of Frame Zero`
    },
    masks: {
        title: 'The Four Sacred Masks',
        content: `SCARLET — The Warrior
Forged in conflict, burns with righteous fury.
Grants: Strength, Resilience, Combat Instinct.
Cost: Aggression consumes the host.

VEIL — The Shadow  
Woven from secrets, moves unseen.
Grants: Speed, Stealth, Phase Shift.
Cost: Identity fades with each use.

ORACLE — The Seer
Carved from forbidden knowledge.
Grants: True Sight, System Access, Prediction.
Cost: The truth destroys the mind.

FORBIDDEN — The End
Should never have been created.
Grants: Absolute Power, Reality Manipulation.
Cost: Everything.`
    },
    vessel: {
        title: 'The Vessel Program',
        content: `The masks cannot act alone.
        
They require a HOST — a body compatible with their frequency.
        
For millennia, the Order sought vessels.
Most rejected. Most burned. Most forgot.

You are Iteration 7,042.

The first to synchronize with ALL FOUR MASKS.

The Architects are watching.
The System is afraid.
And the masks...

The masks are HUNGRY.`
    },
    truth: {
        title: 'The Hidden Truth',
        content: `[CLASSIFIED — FRAME ZERO EYES ONLY]

The Order was never meant to protect.

We are the FAILSAFE.

When corruption exceeds 99.7%, 
when the loops become infinite,
when reality cannot sustain itself...

We DELETE.

Every hero. Every villain. Every memory.

And we begin again.

This is cycle 2,847.

You have reset the universe 2,846 times.

You just don't remember.

[END CLASSIFIED]`
    }
};

// ============ GAME STATE ============
const gameState = {
    currentScreen: 'splash', // splash, menu, options, chapter, game, lore
    currentChapter: 1,
    menuSelection: 0,
    unlockedChapters: [1],
    unlockedMasks: ['scarlet'],
    currentMask: 'scarlet',
    player: {
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
    },
    enemy: {
        hp: 100,
        maxHp: 100,
        x: 900,
        y: 0,
        type: 'frameBreaker'
    },
    dialogue: {
        active: false,
        currentIndex: 0,
        lines: []
    },
    lore: {
        unlockedEntries: ['frameZero'],
        currentEntry: null
    },
    keys: {}
};

const menuOptions = ['1player', '2player', 'codex', 'options'];

// ============ INICIALIZAÇÃO ============
document.addEventListener('DOMContentLoaded', () => {
    initScreenScaling();
    initSplashScreen();
    initControls();
});

// ============ SCREEN SCALING ============
function initScreenScaling() {
    resizeGame();
    window.addEventListener('resize', resizeGame);
}

function resizeGame() {
    const container = document.getElementById('game-container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calcular escala mantendo aspect ratio 16:9
    const scaleX = windowWidth / GAME_WIDTH;
    const scaleY = windowHeight / GAME_HEIGHT;
    const scale = Math.min(scaleX, scaleY);
    
    // Aplicar escala
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'center center';
}

// ============ SPLASH SCREEN ============
function initSplashScreen() {
    const loadingFill = document.getElementById('loading-fill');
    let progress = 0;
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Aguardar um pouco e ir para o menu
            setTimeout(() => {
                hideSplashScreen();
            }, 500);
        }
        loadingFill.style.width = `${progress}%`;
    }, 200);
}

function hideSplashScreen() {
    const splash = document.getElementById('splash-screen');
    splash.style.animation = 'splash-fade-out 0.5s ease-out forwards';
    
    setTimeout(() => {
        splash.classList.add('hidden');
        showMainMenu();
    }, 500);
}

// ============ MAIN MENU ============
function showMainMenu() {
    gameState.currentScreen = 'menu';
    gameState.menuSelection = 0;
    
    const menu = document.getElementById('main-menu');
    menu.classList.remove('hidden');
    menu.style.animation = 'menu-fade-in 0.5s ease-out';
    
    updateMenuSelection();
    initMenuButtons();
}

function hideMainMenu() {
    const menu = document.getElementById('main-menu');
    menu.classList.add('hidden');
}

function initMenuButtons() {
    document.querySelectorAll('.menu-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            handleMenuSelect(btn.dataset.option);
        });
        
        btn.addEventListener('mouseenter', () => {
            if (btn.dataset.option !== 'back') {
                gameState.menuSelection = index;
                updateMenuSelection();
            }
        });
    });
}

function updateMenuSelection() {
    document.querySelectorAll('#main-menu .menu-btn').forEach((btn, index) => {
        if (index === gameState.menuSelection) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

function handleMenuSelect(option) {
    switch(option) {
        case '1player':
            startGame(1);
            break;
        case '2player':
            startGame(2);
            break;
        case 'codex':
            showCodex();
            break;
        case 'options':
            showOptions();
            break;
        case 'back':
            hideOptions();
            break;
        case 'back-codex':
            hideCodex();
            break;
    }
}

// ============ CODEX ============
function showCodex() {
    gameState.currentScreen = 'codex';
    document.getElementById('codex-menu').classList.remove('hidden');
    initCodexButtons();
}

function hideCodex() {
    gameState.currentScreen = 'menu';
    document.getElementById('codex-menu').classList.add('hidden');
}

function initCodexButtons() {
    document.querySelectorAll('.codex-entry-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const entry = btn.dataset.entry;
            
            // Verificar se está desbloqueado
            if (btn.classList.contains('locked') && !gameState.lore.unlockedEntries.includes(entry)) {
                return;
            }
            
            // Remover active de todos
            document.querySelectorAll('.codex-entry-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Mostrar conteúdo
            showLoreEntry(entry);
        });
    });
    
    // Botão de voltar
    document.querySelector('[data-option="back-codex"]')?.addEventListener('click', hideCodex);
    
    // Atualizar estado de locked/unlocked
    updateCodexLocks();
}

function updateCodexLocks() {
    document.querySelectorAll('.codex-entry-btn').forEach(btn => {
        const entry = btn.dataset.entry;
        if (gameState.lore.unlockedEntries.includes(entry)) {
            btn.classList.remove('locked');
        }
    });
}

function showLoreEntry(entryKey) {
    const entry = LORE_ENTRIES[entryKey];
    if (!entry) return;
    
    document.getElementById('codex-entry-title').textContent = entry.title;
    document.getElementById('codex-entry-content').innerHTML = `<p>${entry.content}</p>`;
}

// ============ OPTIONS ============
function showOptions() {
    gameState.currentScreen = 'options';
    document.getElementById('options-menu').classList.remove('hidden');
    
    // Botão de voltar
    document.querySelector('.back-btn')?.addEventListener('click', hideOptions);
}

function hideOptions() {
    gameState.currentScreen = 'menu';
    document.getElementById('options-menu').classList.add('hidden');
}

// ============ START GAME ============
function startGame(players) {
    console.log(`Starting game with ${players} player(s)`);
    
    hideMainMenu();
    showChapterSplash();
}

// ============ CHAPTER SPLASH ============
function showChapterSplash() {
    gameState.currentScreen = 'chapter';
    const chapter = CHAPTERS[gameState.currentChapter];
    const chapterSplash = document.getElementById('chapter-splash');
    
    // Atualizar conteúdo do capítulo
    updateChapterContent(chapter);
    
    chapterSplash.classList.remove('hidden');
    
    // Após 4.5 segundos, iniciar o jogo
    setTimeout(() => {
        hideChapterSplash();
    }, 4500);
}

function updateChapterContent(chapter) {
    const numEl = document.querySelector('.chapter-num');
    const titleJpEl = document.querySelector('.title-jp');
    const titleEnEl = document.querySelector('.title-en');
    const quoteEl = document.querySelector('.chapter-quote p:first-child');
    const maskEl = document.querySelector('.scarlet-mask');
    const bgEl = document.querySelector('.chapter-bg');
    
    if (numEl) numEl.textContent = chapter.id;
    if (titleJpEl) titleJpEl.textContent = chapter.titleJp;
    if (titleEnEl) titleEnEl.textContent = chapter.titleEn;
    if (quoteEl) quoteEl.textContent = chapter.quote;
    
    // Atualizar cor do capítulo
    if (numEl) numEl.style.color = chapter.color;
    if (numEl) numEl.style.textShadow = `0 0 30px ${chapter.color}, 0 0 60px ${chapter.color}80, 0 4px 0 ${chapter.color}44`;
    
    // Atualizar máscara visual baseada no capítulo
    if (maskEl) {
        maskEl.className = `${chapter.mask}-mask`;
    }
}

function hideChapterSplash() {
    const chapterSplash = document.getElementById('chapter-splash');
    chapterSplash.style.animation = 'chapter-fade-out 1s ease-out forwards';
    
    setTimeout(() => {
        chapterSplash.classList.add('hidden');
        chapterSplash.style.animation = '';
        startGameplay();
    }, 1000);
}

function startGameplay() {
    gameState.currentScreen = 'game';
    document.getElementById('game-screen').classList.remove('hidden');
    
    // Carregar diálogos do capítulo atual
    const chapter = CHAPTERS[gameState.currentChapter];
    gameState.dialogue.lines = chapter.dialogues;
    gameState.dialogue.currentIndex = 0;
    
    updateUI();
    startGameLoop();
    
    // Mostrar diálogo inicial após 1 segundo
    setTimeout(() => {
        showDialogue();
    }, 1000);
}

// ============ HENSHIN (TRANSFORMATION) ============
function triggerHenshin(maskType) {
    const henshinScreen = document.getElementById('henshin-screen');
    const maskContainer = henshinScreen.querySelector('.henshin-mask-container');
    const maskName = henshinScreen.querySelector('.henshin-name');
    const henshinBg = henshinScreen.querySelector('.henshin-bg');
    
    // Configurar máscara
    const maskInfo = {
        scarlet: { name: 'THE SCARLET MASK', color: '#cc2222' },
        veil: { name: 'THE VEIL MASK', color: '#2244aa' },
        oracle: { name: 'THE ORACLE MASK', color: '#ccaa22' },
        forbidden: { name: 'THE FORBIDDEN MASK', color: '#660066' }
    };
    
    const info = maskInfo[maskType] || maskInfo.scarlet;
    
    // Atualizar visual
    maskContainer.innerHTML = `<div class="${maskType}-mask"></div>`;
    maskName.textContent = info.name;
    maskName.style.color = info.color;
    
    // Mudar cor do background
    henshinBg.style.background = `radial-gradient(ellipse at center, ${info.color}22 0%, #000 100%)`;
    
    // Mostrar tela
    henshinScreen.classList.remove('hidden');
    gameState.currentMask = maskType;
    
    // Após 2.5 segundos, esconder
    setTimeout(() => {
        henshinScreen.classList.add('hidden');
        updatePlayerMask();
    }, 2500);
}

function updatePlayerMask() {
    const playerMask = document.querySelector('.player-mask-face');
    if (!playerMask) return;
    
    const colors = {
        scarlet: { main: '#cc3333', secondary: '#881111' },
        veil: { main: '#3355aa', secondary: '#113366' },
        oracle: { main: '#ddaa22', secondary: '#996600' },
        forbidden: { main: '#440044', secondary: '#110011' }
    };
    
    const color = colors[gameState.currentMask] || colors.scarlet;
    playerMask.style.background = `linear-gradient(180deg, ${color.main} 0%, ${color.secondary} 100%)`;
}

// ============ CONTROLES ============
function initControls() {
    document.addEventListener('keydown', (e) => {
        gameState.keys[e.key.toLowerCase()] = true;
        
        // Menu navigation
        if (gameState.currentScreen === 'menu') {
            handleMenuInput(e.key);
            return;
        }
        
        // Options navigation
        if (gameState.currentScreen === 'options') {
            if (e.key === 'Escape' || e.key === 'Backspace') {
                hideOptions();
            }
            return;
        }
        
        // Game controls
        if (gameState.currentScreen === 'game') {
            if (e.key === ' ') {
                e.preventDefault();
                attack();
            }
            if (e.key.toLowerCase() === 'w' || e.key === 'ArrowUp') {
                jump();
            }
            if (e.key === 'Enter') {
                if (gameState.dialogue.active) {
                    nextDialogue();
                }
            }
            if (e.key === 'Escape') {
                hideDialogue();
            }
            // Henshin com tecla H ou Q
            if (e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 'q') {
                if (!gameState.dialogue.active) {
                    triggerHenshin(gameState.currentMask);
                }
            }
            // Trocar máscaras com 1, 2, 3, 4
            if (e.key === '1' && gameState.unlockedMasks.includes('scarlet')) {
                gameState.currentMask = 'scarlet';
                triggerHenshin('scarlet');
            }
            if (e.key === '2' && gameState.unlockedMasks.includes('veil')) {
                gameState.currentMask = 'veil';
                triggerHenshin('veil');
            }
            if (e.key === '3' && gameState.unlockedMasks.includes('oracle')) {
                gameState.currentMask = 'oracle';
                triggerHenshin('oracle');
            }
            if (e.key === '4' && gameState.unlockedMasks.includes('forbidden')) {
                gameState.currentMask = 'forbidden';
                triggerHenshin('forbidden');
            }
        }
    });

    document.addEventListener('keyup', (e) => {
        gameState.keys[e.key.toLowerCase()] = false;
    });

    // Botões de diálogo
    document.getElementById('btn-next')?.addEventListener('click', nextDialogue);
    document.getElementById('btn-log')?.addEventListener('click', () => console.log('Log opened'));
    document.getElementById('btn-menu')?.addEventListener('click', () => console.log('Menu opened'));
}

function handleMenuInput(key) {
    switch(key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
            gameState.menuSelection = Math.max(0, gameState.menuSelection - 1);
            updateMenuSelection();
            break;
        case 'ArrowDown':
        case 's':
        case 'S':
            gameState.menuSelection = Math.min(menuOptions.length - 1, gameState.menuSelection + 1);
            updateMenuSelection();
            break;
        case 'Enter':
        case ' ':
            handleMenuSelect(menuOptions[gameState.menuSelection]);
            break;
    }
}

// ============ MOVIMENTAÇÃO ============
function updateMovement() {
    if (gameState.currentScreen !== 'game') return;
    
    const player = document.getElementById('player');
    const speed = 5;

    if (gameState.keys['a'] || gameState.keys['arrowleft']) {
        gameState.player.x = Math.max(50, gameState.player.x - speed);
        gameState.player.facingRight = false;
        player.style.transform = 'scaleX(-1)';
    }
    if (gameState.keys['d'] || gameState.keys['arrowright']) {
        gameState.player.x = Math.min(GAME_WIDTH - 100, gameState.player.x + speed);
        gameState.player.facingRight = true;
        player.style.transform = 'scaleX(1)';
    }

    player.style.left = `${gameState.player.x}px`;
}

function jump() {
    if (gameState.player.isJumping) return;
    
    gameState.player.isJumping = true;
    const player = document.getElementById('player');
    player.classList.add('jumping');
    
    setTimeout(() => {
        player.classList.remove('jumping');
        gameState.player.isJumping = false;
    }, 500);
}

function attack() {
    if (gameState.player.isAttacking) return;
    
    gameState.player.isAttacking = true;
    const player = document.getElementById('player');
    player.classList.add('attacking');
    
    checkAttackCollision();
    
    setTimeout(() => {
        player.classList.remove('attacking');
        gameState.player.isAttacking = false;
    }, 200);
}

function checkAttackCollision() {
    const playerX = gameState.player.x;
    const enemyX = gameState.enemy.x;
    const attackRange = 100;
    
    if (Math.abs(playerX - enemyX) < attackRange) {
        gameState.enemy.hp = Math.max(0, gameState.enemy.hp - 10);
        showDamageEffect();
    }
}

function showDamageEffect() {
    const enemy = document.getElementById('enemy');
    enemy.style.filter = 'brightness(2)';
    setTimeout(() => {
        enemy.style.filter = 'none';
    }, 100);
}

// ============ UI ============
function updateUI() {
    const hpBar = document.getElementById('hp-bar');
    const mpBar = document.getElementById('mp-bar');
    
    if (hpBar && mpBar) {
        const hpPercent = (gameState.player.hp / gameState.player.maxHp) * 100;
        const mpPercent = (gameState.player.mp / gameState.player.maxMp) * 100;
        
        hpBar.style.width = `${hpPercent}%`;
        mpBar.style.width = `${mpPercent}%`;
    }
}

// ============ SISTEMA DE DIÁLOGO ============
function showDialogue() {
    const dialogueBox = document.getElementById('dialogue-box');
    if (dialogueBox) {
        dialogueBox.classList.remove('hidden');
        gameState.dialogue.active = true;
        gameState.dialogue.currentIndex = 0;
        updateDialogueText();
    }
}

function hideDialogue() {
    const dialogueBox = document.getElementById('dialogue-box');
    if (dialogueBox) {
        dialogueBox.classList.add('hidden');
        gameState.dialogue.active = false;
    }
}

function nextDialogue() {
    gameState.dialogue.currentIndex++;
    
    if (gameState.dialogue.currentIndex >= gameState.dialogue.lines.length) {
        hideDialogue();
        onDialogueComplete();
        return;
    }
    
    updateDialogueText();
}

function onDialogueComplete() {
    // Desbloquear conteúdo baseado no capítulo
    const chapter = gameState.currentChapter;
    
    if (chapter === 1) {
        // Após capítulo 1, desbloqueia informações das máscaras
        unlockLoreEntry('masks');
        console.log('📜 New Codex Entry: The Masks');
    } else if (chapter === 2) {
        // Após capítulo 2, desbloqueia a máscara Veil
        unlockMask('veil');
        console.log('🎭 New Mask Unlocked: The Veil Mask');
    } else if (chapter === 3) {
        // Após capítulo 3, desbloqueia a máscara Oracle e info do Vessel
        unlockMask('oracle');
        unlockLoreEntry('vessel');
        console.log('🎭 New Mask Unlocked: The Oracle Mask');
        console.log('📜 New Codex Entry: The Vessel');
    } else if (chapter === 4) {
        // Após capítulo 4, desbloqueia tudo (final)
        unlockMask('forbidden');
        unlockLoreEntry('truth');
        console.log('🎭 FORBIDDEN MASK UNLOCKED');
        console.log('📜 THE TRUTH REVEALED');
    }
}

function unlockMask(maskType) {
    if (!gameState.unlockedMasks.includes(maskType)) {
        gameState.unlockedMasks.push(maskType);
        showUnlockNotification(`🎭 ${maskType.toUpperCase()} MASK UNLOCKED`);
    }
}

function unlockLoreEntry(entryKey) {
    if (!gameState.lore.unlockedEntries.includes(entryKey)) {
        gameState.lore.unlockedEntries.push(entryKey);
        showUnlockNotification(`📜 NEW CODEX ENTRY`);
    }
}

function unlockChapter(chapterNum) {
    if (!gameState.unlockedChapters.includes(chapterNum)) {
        gameState.unlockedChapters.push(chapterNum);
    }
}

function showUnlockNotification(text) {
    const notification = document.createElement('div');
    notification.className = 'unlock-notification';
    notification.textContent = text;
    document.getElementById('game-container').appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function updateDialogueText() {
    const line = gameState.dialogue.lines[gameState.dialogue.currentIndex];
    const nameEl = document.getElementById('speaker-name');
    const textEl = document.getElementById('dialogue-text');
    
    if (nameEl && textEl) {
        nameEl.textContent = line.speaker + ':';
        nameEl.className = 'dialogue-name ' + line.class;
        textEl.textContent = line.text;
    }
}

// ============ ANIMAÇÃO DO INIMIGO ============
function updateEnemy() {
    const enemy = document.getElementById('enemy');
    if (enemy) {
        const time = Date.now() / 1000;
        const floatY = Math.sin(time * 2) * 5;
        enemy.style.transform = `translateY(${floatY}px)`;
    }
}

// ============ GAME LOOP ============
function startGameLoop() {
    function loop() {
        if (gameState.currentScreen === 'game' && !gameState.dialogue.active) {
            updateMovement();
        }
        if (gameState.currentScreen === 'game') {
            updateEnemy();
        }
        requestAnimationFrame(loop);
    }
    loop();
}

// ============ CSS ANIMATIONS (injetado via JS) ============
const style = document.createElement('style');
style.textContent = `
    @keyframes splash-fade-out {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes menu-fade-in {
        0% { opacity: 0; transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes chapter-fade-out {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    
    @keyframes float-up {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-50px); opacity: 0; }
    }
    
    @keyframes damage-flash {
        0%, 100% { filter: none; }
        50% { filter: brightness(3) saturate(0); }
    }
`;
document.head.appendChild(style);

console.log('🎭 Mister Mask - Game Loaded!');
console.log('©2026 LoopedSouls All Rights Reserved');
console.log('');
console.log('=== THE ORDER OF FRAME ZERO ===');
console.log('Controls:');
console.log('  A/D or ←→  - Move');
console.log('  W or ↑     - Jump');
console.log('  Space      - Attack');
console.log('  H or Q     - Henshin (Transform)');
console.log('  1-4        - Switch Masks');
console.log('  Enter      - Next dialogue');
console.log('  Escape     - Close dialogue');
console.log('');
console.log('"The body is temporary. The mask is eternal."');