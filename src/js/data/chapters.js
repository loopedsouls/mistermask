// ============ DADOS DOS CAPÍTULOS (SIMPLIFICADO) ============
// Para narrativa completa, ver story.js

export const CHAPTERS = {
    0: {
        id: 0,
        type: 'prologue',
        titleJp: '目覚め',
        titleEn: 'O DESPERTAR',
        quote: '"No vazio, uma voz ecoa..."',
        scenario: 'void',
        mask: null,
        color: '#1a1a2e'
    },
    1: {
        id: 1,
        titleJp: '緋色の仮面',
        titleEn: 'A MÁSCARA ESCARLATE',
        subtitle: 'O Batismo de Sangue',
        quote: '"Criada para enfrentar ameaças visíveis."',
        scenario: 'temple_bridge',
        mask: 'scarlet',
        color: '#cc2222',
        boss: 'frame_breaker',
        unlocks: {
            lore: ['frameZero', 'masks'],
            masks: [],
            chapters: [2]
        }
    },
    2: {
        id: 2,
        titleJp: '帳の仮面',
        titleEn: 'A MÁSCARA DO VÉU',
        subtitle: 'Segredos na Escuridão',
        quote: '"Criada para guerras que não podiam ser vistas."',
        scenario: 'shadow_archives',
        mask: 'veil',
        color: '#2244aa',
        boss: 'archive_sentinel',
        unlocks: {
            lore: ['vessel'],
            masks: ['veil'],
            chapters: [3]
        }
    },
    3: {
        id: 3,
        titleJp: '神託の仮面',
        titleEn: 'A MÁSCARA DO ORÁCULO',
        subtitle: 'Visão Além do Véu',
        quote: '"Criada para ler o código ilegível."',
        scenario: 'core_system',
        mask: 'oracle',
        color: '#ccaa22',
        boss: 'system_virus',
        unlocks: {
            lore: ['truth'],
            masks: ['oracle'],
            chapters: [4]
        }
    },
    4: {
        id: 4,
        titleJp: '禁忌の仮面',
        titleEn: 'A MÁSCARA PROIBIDA',
        subtitle: 'Frame Zero',
        quote: '"Criada não para salvar — mas para FINALIZAR."',
        scenario: 'frame_zero',
        mask: 'forbidden',
        color: '#660066',
        boss: 'the_architects',
        unlocks: {
            lore: [],
            masks: ['forbidden'],
            chapters: ['ending']
        }
    }
};

export function getChapter(id) {
    return CHAPTERS[id] || null;
}

export function getTotalChapters() {
    return Object.keys(CHAPTERS).filter(k => k !== '0').length;
}

export function getChapterByScenario(scenarioId) {
    return Object.values(CHAPTERS).find(ch => ch.scenario === scenarioId);
}
