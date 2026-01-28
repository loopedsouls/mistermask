// ============ CENÁRIOS DO JOGO ============
// Cada sala tem seu próprio cenário único

export const SCENARIOS = {
    // ═══════════════════════════════════════════════════
    // PRÓLOGO
    // ═══════════════════════════════════════════════════
    void: {
        id: 'void',
        name: 'O Vazio',
        nameJp: '虚無',
        description: 'Um espaço entre realidades, onde dados corrompidos flutuam como estrelas mortas.',
        music: 'ambient_void',
        colors: {
            sky: '#000000',
            ground: '#0a0a0a',
            accent: '#00ffff'
        },
        elements: ['floating_data', 'glitch_particles', 'distant_frames']
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 1 - TEMPLO ANCESTRAL
    // ═══════════════════════════════════════════════════
    temple_entrance: {
        id: 'temple_entrance',
        name: 'Portão do Templo',
        nameJp: '寺院の門',
        description: 'O portão de entrada do templo ancestral, marcado por símbolos esquecidos.',
        music: 'temple_ambient',
        colors: {
            sky: '#0a0520',
            ground: '#1a0a30',
            accent: '#cc2222'
        },
        elements: ['temple_gate', 'stone_lanterns', 'ancient_symbols', 'mist_low']
    },

    temple_bridge: {
        id: 'temple_bridge',
        name: 'Ponte do Templo',
        nameJp: '古寺の橋',
        description: 'Uma ponte de pedra suspensa sobre o abismo, guardada por estátuas Oni.',
        music: 'tension_rising',
        colors: {
            sky: '#1a0a2e',
            ground: '#2d1b4e',
            accent: '#cc2222'
        },
        elements: ['oni_statues', 'stone_bridge', 'purple_sky', 'distant_temple']
    },

    temple_inner: {
        id: 'temple_inner',
        name: 'Santuário Interior',
        nameJp: '内なる聖域',
        description: 'O coração do templo, onde a primeira máscara aguardava.',
        music: 'sacred_space',
        colors: {
            sky: '#150828',
            ground: '#251040',
            accent: '#ff4444'
        },
        elements: ['altar_scarlet', 'incense_smoke', 'ritual_candles', 'mask_pedestal']
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 2 - ARQUIVOS DAS SOMBRAS
    // ═══════════════════════════════════════════════════
    archives_entrance: {
        id: 'archives_entrance',
        name: 'Entrada dos Arquivos',
        nameJp: '記録庫の入口',
        description: 'A porta para os corredores de memórias esquecidas.',
        music: 'archives_intro',
        colors: {
            sky: '#050a15',
            ground: '#0a1525',
            accent: '#2244aa'
        },
        elements: ['archive_door', 'dust_particles', 'faded_inscriptions', 'dim_torches']
    },

    archives_hall: {
        id: 'archives_hall',
        name: 'Corredor Principal',
        nameJp: '主廊下',
        description: 'Estantes infinitas de pergaminhos contendo segredos proibidos.',
        music: 'stealth_ambience',
        colors: {
            sky: '#0a1628',
            ground: '#1a2a4a',
            accent: '#2244aa'
        },
        elements: ['floating_scrolls', 'shadow_pillars', 'memory_orbs', 'book_shelves']
    },

    archives_secret: {
        id: 'archives_secret',
        name: 'Câmara Oculta',
        nameJp: '隠された部屋',
        description: 'Uma sala que não deveria existir, onde a Máscara do Véu descansa.',
        music: 'secret_discovery',
        colors: {
            sky: '#08101a',
            ground: '#102030',
            accent: '#4488ff'
        },
        elements: ['hidden_altar', 'veil_mask_glow', 'shadow_tendrils', 'sealed_door']
    },

    archives_depths: {
        id: 'archives_depths',
        name: 'Profundezas Proibidas',
        nameJp: '禁じられた深淵',
        description: 'O nível mais profundo dos arquivos, guardado pelo Sentinela.',
        music: 'boss_tension',
        colors: {
            sky: '#040810',
            ground: '#081018',
            accent: '#1133aa'
        },
        elements: ['depth_pillars', 'ancient_seals', 'guardian_presence', 'forbidden_texts']
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 3 - NÚCLEO DO SISTEMA
    // ═══════════════════════════════════════════════════
    core_entrance: {
        id: 'core_entrance',
        name: 'Portal Digital',
        nameJp: 'デジタルポータル',
        description: 'A fronteira entre o mundo físico e o digital.',
        music: 'digital_transition',
        colors: {
            sky: '#0a0a05',
            ground: '#151508',
            accent: '#aaaa22'
        },
        elements: ['portal_frame', 'data_particles', 'transition_grid', 'system_boot']
    },

    core_mainframe: {
        id: 'core_mainframe',
        name: 'Mainframe Central',
        nameJp: 'メインフレーム',
        description: 'O processador central onde todas as iterações são registradas.',
        music: 'digital_revelation',
        colors: {
            sky: '#1a1a0a',
            ground: '#2a2a1a',
            accent: '#ccaa22'
        },
        elements: ['data_streams', 'holographic_displays', 'iteration_counter', 'system_alerts']
    },

    core_heart: {
        id: 'core_heart',
        name: 'Coração do Sistema',
        nameJp: 'システムの心臓',
        description: 'O núcleo pulsante que mantém a realidade funcionando.',
        music: 'core_pulse',
        colors: {
            sky: '#1a1508',
            ground: '#2a2510',
            accent: '#ffcc00'
        },
        elements: ['core_sphere', 'energy_conduits', 'oracle_mask_glow', 'truth_terminal']
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 4 - FRAME ZERO
    // ═══════════════════════════════════════════════════
    frame_zero_gate: {
        id: 'frame_zero_gate',
        name: 'Portão da Origem',
        nameJp: '起源の門',
        description: 'O limiar do ponto onde tudo começou.',
        music: 'approaching_truth',
        colors: {
            sky: '#0a0008',
            ground: '#150010',
            accent: '#880088'
        },
        elements: ['origin_gate', 'reality_wisps', 'architect_whispers', 'void_edge']
    },

    frame_zero: {
        id: 'frame_zero',
        name: 'Frame Zero',
        nameJp: 'フレームゼロ',
        description: 'O ponto de origem. Onde tudo começou. Onde tudo pode terminar.',
        music: 'final_confrontation',
        colors: {
            sky: '#0a000a',
            ground: '#1a001a',
            accent: '#aa00aa'
        },
        elements: ['all_masks_floating', 'reality_cracks', 'the_architects', 'reset_button']
    },

    // ═══════════════════════════════════════════════════
    // EPÍLOGO
    // ═══════════════════════════════════════════════════
    new_dawn: {
        id: 'new_dawn',
        name: 'Novo Amanhecer',
        nameJp: '新しい夜明け',
        description: 'O mundo após a escolha. Diferente, mas ainda existindo.',
        music: 'hope_theme',
        colors: {
            sky: '#ff7744',
            ground: '#ffaa66',
            accent: '#ffffff'
        },
        elements: ['sunrise', 'broken_masks', 'peaceful_world']
    }
};

export function getScenario(id) {
    return SCENARIOS[id] || null;
}
