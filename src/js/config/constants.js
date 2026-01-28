// ============ CONFIGURAÇÕES DO JOGO ============
export const GAME_WIDTH = 1280;
export const GAME_HEIGHT = 720;

export const PLAYER_SPEED = 5;
export const JUMP_DURATION = 500;
export const ATTACK_DURATION = 200;
export const ATTACK_RANGE = 100;
export const ATTACK_DAMAGE = 10;

export const HENSHIN_DURATION = 2500;
export const CHAPTER_SPLASH_DURATION = 4500;
export const DIALOGUE_DELAY = 1000;

export const SCREENS = {
    SPLASH: 'splash',
    MENU: 'menu',
    OPTIONS: 'options',
    CODEX: 'codex',
    CHAPTER: 'chapter',
    GAME: 'game'
};

export const MASKS = {
    SCARLET: 'scarlet',
    VEIL: 'veil',
    ORACLE: 'oracle',
    FORBIDDEN: 'forbidden'
};

export const MASK_INFO = {
    scarlet: { 
        name: 'A MÁSCARA ESCARLATE', 
        color: '#cc2222',
        colorMain: '#cc3333',
        colorSecondary: '#881111'
    },
    veil: { 
        name: 'A MÁSCARA DO VÉU', 
        color: '#2244aa',
        colorMain: '#3355aa',
        colorSecondary: '#113366'
    },
    oracle: { 
        name: 'A MÁSCARA DO ORÁCULO', 
        color: '#ccaa22',
        colorMain: '#ddaa22',
        colorSecondary: '#996600'
    },
    forbidden: { 
        name: 'A MÁSCARA PROIBIDA', 
        color: '#660066',
        colorMain: '#440044',
        colorSecondary: '#110011'
    }
};

export const KEYS = {
    UP: ['w', 'arrowup'],
    DOWN: ['s', 'arrowdown'],
    LEFT: ['a', 'arrowleft'],
    RIGHT: ['d', 'arrowright'],
    JUMP: ['w', 'arrowup'],
    ATTACK: [' '],
    HENSHIN: ['h', 'q'],
    CONFIRM: ['enter'],
    CANCEL: ['escape'],
    MASK_1: ['1'],
    MASK_2: ['2'],
    MASK_3: ['3'],
    MASK_4: ['4']
};
