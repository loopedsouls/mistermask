// ============ GAME STATE ============
const gameState = {
    player: {
        health: 410,
        maxHealth: 500,
        mana: 360,
        maxMana: 450,
        level: 50,
        gold: 1600,
        x: 400,
        y: 300
    },
    chicks: [],
    keys: {}
};

// ============ INICIALIZAÇÃO ============
document.addEventListener('DOMContentLoaded', () => {
    initChicks();
    initControls();
    updateUI();
    startGameLoop();
});

// ============ CRIAR PINTINHOS ============
function initChicks() {
    const container = document.getElementById('chicks-container');
    const chickPositions = [
        { x: 80, y: 440 },
        { x: 150, y: 460 },
        { x: 220, y: 450 },
        { x: 280, y: 470 },
        { x: 350, y: 455 },
        { x: 450, y: 465 },
        { x: 520, y: 450 },
        { x: 580, y: 470 },
        { x: 640, y: 455 },
        { x: 700, y: 445 },
        { x: 180, y: 480 },
        { x: 400, y: 485 },
        { x: 600, y: 480 }
    ];

    chickPositions.forEach((pos, index) => {
        const chick = createChick(pos.x, pos.y, index);
        container.appendChild(chick);
        gameState.chicks.push({
            element: chick,
            x: pos.x,
            y: pos.y,
            direction: Math.random() > 0.5 ? 1 : -1,
            speed: 0.3 + Math.random() * 0.3
        });
    });
}

function createChick(x, y, index) {
    const chick = document.createElement('div');
    chick.className = 'chick';
    chick.style.left = `${x}px`;
    chick.style.bottom = `${600 - y}px`;
    chick.style.animationDelay = `${index * 0.1}s`;

    chick.innerHTML = `
        <div class="chick-body">
            <div class="chick-eye left"></div>
            <div class="chick-eye right"></div>
            <div class="chick-beak"></div>
            <div class="chick-wing left"></div>
            <div class="chick-wing right"></div>
        </div>
    `;

    return chick;
}

// ============ CONTROLES ============
function initControls() {
    document.addEventListener('keydown', (e) => {
        gameState.keys[e.key] = true;
        handleInput(e.key);
    });

    document.addEventListener('keyup', (e) => {
        gameState.keys[e.key] = false;
    });

    // Clique nos slots
    document.querySelectorAll('.slot').forEach(slot => {
        slot.addEventListener('click', () => {
            const slotNum = slot.dataset.slot;
            useItem(slotNum);
        });
    });
}

function handleInput(key) {
    const player = document.getElementById('player');
    const speed = 15;

    switch(key) {
        case 'ArrowLeft':
        case 'a':
            gameState.player.x = Math.max(50, gameState.player.x - speed);
            player.style.transform = `translateX(-50%) scaleX(-1)`;
            break;
        case 'ArrowRight':
        case 'd':
            gameState.player.x = Math.min(750, gameState.player.x + speed);
            player.style.transform = `translateX(-50%) scaleX(1)`;
            break;
        case ' ':
            attack();
            break;
    }

    player.style.left = `${gameState.player.x}px`;
}

function useItem(slotNum) {
    console.log(`Usando item do slot ${slotNum}`);
    
    switch(slotNum) {
        case '2': // Poção
            if (gameState.player.health < gameState.player.maxHealth) {
                gameState.player.health = Math.min(
                    gameState.player.maxHealth,
                    gameState.player.health + 50
                );
                updateUI();
                showFloatingText('+50 HP', '#ff6b6b');
            }
            break;
        case '3': // Magia
            if (gameState.player.mana >= 30) {
                gameState.player.mana -= 30;
                updateUI();
                castMagic();
            }
            break;
    }
}

function attack() {
    const player = document.getElementById('player');
    player.classList.add('attacking');
    setTimeout(() => player.classList.remove('attacking'), 200);
}

function castMagic() {
    const magic = document.createElement('div');
    magic.style.cssText = `
        position: absolute;
        left: ${gameState.player.x}px;
        bottom: 200px;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, #9b59b6, transparent);
        border-radius: 50%;
        animation: magic-pulse 0.5s ease-out forwards;
        z-index: 60;
    `;
    document.getElementById('game-container').appendChild(magic);
    setTimeout(() => magic.remove(), 500);
}

// ============ UI ============
function updateUI() {
    document.getElementById('health-value').textContent = gameState.player.health;
    document.getElementById('level').textContent = gameState.player.level;
    document.getElementById('gold').textContent = gameState.player.gold;
    
    const manaPercent = (gameState.player.mana / gameState.player.maxMana) * 100;
    document.getElementById('mana-bar').style.width = `${manaPercent}%`;
    document.querySelector('.mana-text').textContent = gameState.player.mana;
}

function showFloatingText(text, color) {
    const floatText = document.createElement('div');
    floatText.textContent = text;
    floatText.style.cssText = `
        position: absolute;
        left: ${gameState.player.x}px;
        bottom: 350px;
        color: ${color};
        font-size: 18px;
        font-weight: bold;
        text-shadow: 2px 2px 0 #000;
        animation: float-up 1s ease-out forwards;
        z-index: 100;
    `;
    document.getElementById('game-container').appendChild(floatText);
    setTimeout(() => floatText.remove(), 1000);
}

// ============ GAME LOOP ============
function startGameLoop() {
    function loop() {
        updateChicks();
        requestAnimationFrame(loop);
    }
    loop();
}

function updateChicks() {
    gameState.chicks.forEach(chick => {
        // Movimento aleatório
        if (Math.random() < 0.01) {
            chick.direction *= -1;
        }

        chick.x += chick.direction * chick.speed;
        
        // Limites
        if (chick.x < 50) {
            chick.x = 50;
            chick.direction = 1;
        }
        if (chick.x > 750) {
            chick.x = 750;
            chick.direction = -1;
        }

        chick.element.style.left = `${chick.x}px`;
        chick.element.style.transform = chick.direction < 0 ? 'scaleX(-1)' : 'scaleX(1)';
    });
}

// ============ CSS ANIMATIONS (injetado via JS) ============
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-50px); opacity: 0; }
    }
    
    @keyframes magic-pulse {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
    
    #player.attacking .player-sword {
        transform: rotate(-30deg);
        transition: transform 0.1s;
    }
`;
document.head.appendChild(style);

console.log('🎮 Mister Mask - Game Loaded!');
console.log('Controls: Arrow Keys or WASD to move, Space to attack');
console.log('Click inventory slots to use items');