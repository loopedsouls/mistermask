// ============ GAME CONFIG ============
const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

// ============ GAME STATE ============
const gameState = {
    currentScreen: 'splash', // splash, menu, options, game
    menuSelection: 0,
    player: {
        hp: 85,
        maxHp: 100,
        mp: 70,
        maxMp: 100,
        x: 500,
        y: 0,
        isJumping: false,
        isAttacking: false,
        facingRight: true
    },
    enemy: {
        hp: 100,
        maxHp: 100,
        x: 900,
        y: 0
    },
    dialogue: {
        active: false,
        currentIndex: 0,
        lines: [
            { speaker: 'KAITO', text: '"The ancient Guardian has awakened. The balance of masks is broken!"', class: 'kaito' },
            { speaker: 'SHADOW SPIRIT', text: '"Yes, little wolf. The prophecy is unfolding."', class: 'spirit' },
            { speaker: 'KAITO', text: '"I will restore balance... no matter the cost."', class: 'kaito' }
        ]
    },
    keys: {}
};

const menuOptions = ['1player', '2player', 'options'];

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
        case 'options':
            showOptions();
            break;
        case 'back':
            hideOptions();
            break;
    }
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
    gameState.currentScreen = 'game';
    
    hideMainMenu();
    document.getElementById('game-screen').classList.remove('hidden');
    
    updateUI();
    startGameLoop();
    
    // Mostrar diálogo inicial após 1 segundo
    setTimeout(() => {
        showDialogue();
    }, 1000);
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
        return;
    }
    
    updateDialogueText();
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