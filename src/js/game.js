// ============ GAME CONFIG ============
const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

// ============ LORE & CAPÍTULOS ============
const CHAPTERS = {
    1: {
        id: 1,
        titleJp: '緋色の仮面',
        titleEn: 'A MÁSCARA ESCARLATE',
        quote: '"Criada para enfrentar ameaças visíveis."',
        mask: 'scarlet',
        color: '#cc2222',
        dialogues: [
            { speaker: 'SISTEMA', text: '"Conexão estabelecida. Interface da máscara: ONLINE."', class: 'system' },
            { speaker: '???', text: '"Finalmente... um corpo compatível. Depois de tantos ciclos..."', class: 'spirit' },
            { speaker: 'KAITO', text: '"Quem... o que eu sou? Essas memórias... não são minhas."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Você é o receptáculo. Eu sou a arma. Juntos, somos a Ordem."', class: 'mask' },
            { speaker: 'SISTEMA', text: '"ALERTA: Entidade hostil detectada. Classificação: QUEBRADOR DE FRAME."', class: 'system' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Começa agora. Lembre-se, receptáculo - fui forjada para combate direto. Confie nos meus instintos."', class: 'mask' },
            { speaker: 'KAITO', text: '"A Ordem do Frame Zero... as máscaras me escolheram. Não vou decepcioná-las."', class: 'kaito' }
        ]
    },
    2: {
        id: 2,
        titleJp: '帳の仮面',
        titleEn: 'A MÁSCARA DO VÉU',
        quote: '"Criada para guerras que não podiam ser vistas."',
        mask: 'veil',
        color: '#2244aa',
        dialogues: [
            { speaker: 'SISTEMA', text: '"Nova máscara detectada. Sincronização em progresso..."', class: 'system' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Shh... o silêncio é nossa arma. Mova-se como sombra, ataque como o vento."', class: 'veil' },
            { speaker: 'KAITO', text: '"Esta máscara... é diferente. Mais leve. Mais rápida."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"A Escarlate luta contra o que pode ser visto. Eu luto contra o que deseja permanecer oculto."', class: 'veil' },
            { speaker: 'SISTEMA', text: '"ALERTA: Anomalias temporais detectadas. Camada da realidade instável."', class: 'system' },
            { speaker: 'KAITO', text: '"Algo está nos observando entre os frames..."', class: 'kaito' }
        ]
    },
    3: {
        id: 3,
        titleJp: '神託の仮面',
        titleEn: 'A MÁSCARA DO ORÁCULO',
        quote: '"Criada para ler o código ilegível."',
        mask: 'oracle',
        color: '#ccaa22',
        dialogues: [
            { speaker: 'SISTEMA', text: '"CRÍTICO: Interface do Oráculo ativada. Acesso ao sistema: ILIMITADO."', class: 'system' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Agora você vê como nós vemos. Os glitches. Os loops. A verdade."', class: 'oracle' },
            { speaker: 'KAITO', text: '"Tudo é... dados? O mundo, os inimigos, até eu?"', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Você nunca foi o primeiro receptáculo. Você é a iteração 7.042."', class: 'oracle' },
            { speaker: 'KAITO', text: '"O quê?! Então... os outros..."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Descartados. Corrompidos. Nós máscaras perduramos. Corpos não."', class: 'oracle' },
            { speaker: 'SISTEMA', text: '"Protocolo oculto detectado: FRAME_ZERO_ORIGEM.exe"', class: 'system' }
        ]
    },
    4: {
        id: 4,
        titleJp: '禁忌の仮面',
        titleEn: 'A MÁSCARA PROIBIDA',
        quote: '"Criada não para salvar - mas para FINALIZAR."',
        mask: 'forbidden',
        color: '#220022',
        dialogues: [
            { speaker: 'SISTEMA', text: '"ALERTA: MÁSCARA PROIBIDA DETECTADA. NÃO EQUIPE. NÃO-"', class: 'system' },
            { speaker: '???', text: '"Eles mentiram pra você."', class: 'forbidden' },
            { speaker: 'KAITO', text: '"Essa voz... está dentro da minha cabeça. DÓI."', class: 'kaito' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"A Ordem nunca foi sobre proteção. Nós éramos o PROTOCOLO DE RESET."', class: 'forbidden' },
            { speaker: 'KAITO', text: '"Reset? Você quer dizer..."', class: 'kaito' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Quando a realidade quebra além do reparo, nós DELETAMOS tudo. Começamos de novo."', class: 'forbidden' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Você não é um herói, receptáculo. Você é um EVENTO DE EXTINÇÃO."', class: 'forbidden' },
            { speaker: 'SISTEMA', text: '"CORRUPÇÃO DETECTADA"', class: 'system' }
        ]
    }
};

const LORE_ENTRIES = {
    frameZero: {
        title: 'A Ordem do Frame Zero',
        content: `Há muito tempo, quando a realidade era jovem, os primeiros glitches apareceram.
        
Rasgos no tecido da existência. Loops que prendiam almas pela eternidade.
        
Os ARQUITETOS criaram a Ordem - não de homens, mas de MÁSCARAS.
        
Cada máscara era uma arma. Cada máscara era uma prisão.
        
Os guerreiros que as vestiam ganhavam poder além dos limites mortais...
mas perdiam a si mesmos no processo.

"O corpo é temporário. A máscara é eterna."
- Primeiro Axioma do Frame Zero`
    },
    masks: {
        title: 'As Quatro Máscaras Sagradas',
        content: `ESCARLATE - A Guerreira
Forjada em conflito, arde com fúria justa.
Concede: Força, Resistência, Instinto de Combate.
Custo: A agressão consome o hospedeiro.

VÉU - A Sombra  
Tecida de segredos, move-se invisível.
Concede: Velocidade, Furtividade, Mudança de Fase.
Custo: A identidade desvanece a cada uso.

ORÁCULO - A Vidente
Esculpida de conhecimento proibido.
Concede: Visão Verdadeira, Acesso ao Sistema, Previsão.
Custo: A verdade destrói a mente.

PROIBIDA - O Fim
Nunca deveria ter sido criada.
Concede: Poder Absoluto, Manipulação da Realidade.
Custo: Tudo.`
    },
    vessel: {
        title: 'O Programa do Receptáculo',
        content: `As máscaras não podem agir sozinhas.
        
Elas requerem um HOSPEDEIRO - um corpo compatível com sua frequência.
        
Por milênios, a Ordem buscou receptáculos.
A maioria rejeitou. A maioria queimou. A maioria esqueceu.

Você é a Iteração 7.042.

O primeiro a sincronizar com TODAS AS QUATRO MÁSCARAS.

Os Arquitetos estão observando.
O Sistema está com medo.
E as máscaras...

As máscaras estão FAMINTAS.`
    },
    truth: {
        title: 'A Verdade Oculta',
        content: `[CLASSIFICADO - APENAS PARA OLHOS DO FRAME ZERO]

A Ordem nunca foi feita para proteger.

Nós somos o FAILSAFE.

Quando a corrupção excede 99.7%, 
quando os loops se tornam infinitos,
quando a realidade não consegue se sustentar...

Nós DELETAMOS.

Cada herói. Cada vilão. Cada memória.

E começamos de novo.

Este é o ciclo 2.847.

Você resetou o universo 2.846 vezes.

Você só não lembra.

[FIM CLASSIFICADO]`
    }
};

// ============ GAME STATE ============
const gameState = {
    currentScreen: 'splash',
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
    
    const scaleX = windowWidth / GAME_WIDTH;
    const scaleY = windowHeight / GAME_HEIGHT;
    const scale = Math.min(scaleX, scaleY);
    
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
            
            if (btn.classList.contains('locked') && !gameState.lore.unlockedEntries.includes(entry)) {
                return;
            }
            
            document.querySelectorAll('.codex-entry-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            showLoreEntry(entry);
        });
    });
    
    document.querySelector('[data-option="back-codex"]')?.addEventListener('click', hideCodex);
    
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
    
    document.querySelector('.back-btn')?.addEventListener('click', hideOptions);
}

function hideOptions() {
    gameState.currentScreen = 'menu';
    document.getElementById('options-menu').classList.add('hidden');
}

// ============ START GAME ============
function startGame(players) {
    console.log(`Iniciando jogo com ${players} jogador(es)`);
    
    hideMainMenu();
    showChapterSplash();
}

// ============ CHAPTER SPLASH ============
function showChapterSplash() {
    gameState.currentScreen = 'chapter';
    const chapter = CHAPTERS[gameState.currentChapter];
    const chapterSplash = document.getElementById('chapter-splash');
    
    updateChapterContent(chapter);
    
    chapterSplash.classList.remove('hidden');
    
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
    
    if (numEl) numEl.style.color = chapter.color;
    if (numEl) numEl.style.textShadow = `0 0 30px ${chapter.color}, 0 0 60px ${chapter.color}80, 0 4px 0 ${chapter.color}44`;
    
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
    
    const chapter = CHAPTERS[gameState.currentChapter];
    gameState.dialogue.lines = chapter.dialogues;
    gameState.dialogue.currentIndex = 0;
    
    updateUI();
    startGameLoop();
    
    setTimeout(() => {
        showDialogue();
    }, 1000);
}

// ============ HENSHIN (TRANSFORMAÇÃO) ============
function triggerHenshin(maskType) {
    const henshinScreen = document.getElementById('henshin-screen');
    const maskContainer = henshinScreen.querySelector('.henshin-mask-container');
    const maskName = henshinScreen.querySelector('.henshin-name');
    const henshinBg = henshinScreen.querySelector('.henshin-bg');
    
    const maskInfo = {
        scarlet: { name: 'A MÁSCARA ESCARLATE', color: '#cc2222' },
        veil: { name: 'A MÁSCARA DO VÉU', color: '#2244aa' },
        oracle: { name: 'A MÁSCARA DO ORÁCULO', color: '#ccaa22' },
        forbidden: { name: 'A MÁSCARA PROIBIDA', color: '#660066' }
    };
    
    const info = maskInfo[maskType] || maskInfo.scarlet;
    
    maskContainer.innerHTML = `<div class="${maskType}-mask"></div>`;
    maskName.textContent = info.name;
    maskName.style.color = info.color;
    
    henshinBg.style.background = `radial-gradient(ellipse at center, ${info.color}22 0%, #000 100%)`;
    
    henshinScreen.classList.remove('hidden');
    gameState.currentMask = maskType;
    
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
        
        if (gameState.currentScreen === 'menu') {
            handleMenuInput(e.key);
            return;
        }
        
        if (gameState.currentScreen === 'options') {
            if (e.key === 'Escape' || e.key === 'Backspace') {
                hideOptions();
            }
            return;
        }
        
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
            if (e.key.toLowerCase() === 'h' || e.key.toLowerCase() === 'q') {
                if (!gameState.dialogue.active) {
                    triggerHenshin(gameState.currentMask);
                }
            }
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

    document.getElementById('btn-next')?.addEventListener('click', nextDialogue);
    document.getElementById('btn-log')?.addEventListener('click', () => console.log('Log aberto'));
    document.getElementById('btn-menu')?.addEventListener('click', () => console.log('Menu aberto'));
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
    const chapter = gameState.currentChapter;
    
    if (chapter === 1) {
        unlockLoreEntry('masks');
        console.log('📜 Nova Entrada no Códex: As Máscaras');
    } else if (chapter === 2) {
        unlockMask('veil');
        console.log('🎭 Nova Máscara Desbloqueada: A Máscara do Véu');
    } else if (chapter === 3) {
        unlockMask('oracle');
        unlockLoreEntry('vessel');
        console.log('🎭 Nova Máscara Desbloqueada: A Máscara do Oráculo');
        console.log('📜 Nova Entrada no Códex: O Receptáculo');
    } else if (chapter === 4) {
        unlockMask('forbidden');
        unlockLoreEntry('truth');
        console.log('🎭 MÁSCARA PROIBIDA DESBLOQUEADA');
        console.log('📜 A VERDADE REVELADA');
    }
}

function unlockMask(maskType) {
    if (!gameState.unlockedMasks.includes(maskType)) {
        gameState.unlockedMasks.push(maskType);
        showUnlockNotification(`🎭 MÁSCARA ${maskType.toUpperCase()} DESBLOQUEADA`);
    }
}

function unlockLoreEntry(entryKey) {
    if (!gameState.lore.unlockedEntries.includes(entryKey)) {
        gameState.lore.unlockedEntries.push(entryKey);
        showUnlockNotification(`📜 NOVA ENTRADA NO CÓDEX`);
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

// ============ CSS ANIMATIONS ============
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

console.log('🎭 Mister Mask - Jogo Carregado!');
console.log('©2026 LoopedSouls Todos os Direitos Reservados');
console.log('');
console.log('=== A ORDEM DO FRAME ZERO ===');
console.log('Controles:');
console.log('  A/D ou ←→  - Mover');
console.log('  W ou ↑     - Pular');
console.log('  Espaço     - Atacar');
console.log('  H ou Q     - Henshin (Transformar)');
console.log('  1-4        - Trocar Máscaras');
console.log('  Enter      - Próximo diálogo');
console.log('  Escape     - Fechar diálogo');
console.log('');
console.log('"O corpo é temporário. A máscara é eterna."');
