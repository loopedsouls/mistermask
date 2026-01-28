// ============ CENÁRIOS DO JOGO ============
export const SCENARIOS = {
    // PRÓLOGO
    void: {
        id: 'void',
        name: 'O Vazio',
        nameJp: '虚無',
        description: 'Um espaço entre realidades, onde dados corrompidos flutuam como estrelas mortas.',
        background: 'void',
        music: 'ambient_void',
        colors: {
            sky: '#000000',
            ground: '#0a0a0a',
            accent: '#1a1a2e'
        },
        elements: ['floating_data', 'glitch_particles', 'distant_frames']
    },

    // CAPÍTULO 1
    temple_bridge: {
        id: 'temple_bridge',
        name: 'Ponte do Templo Ancestral',
        nameJp: '古寺の橋',
        description: 'Uma ponte de pedra suspensa sobre o abismo, guardada por estátuas Oni milenares.',
        background: 'temple',
        music: 'tension_rising',
        colors: {
            sky: '#1a0a2e',
            ground: '#2d1b4e',
            accent: '#cc2222'
        },
        elements: ['oni_statues', 'stone_bridge', 'purple_sky', 'distant_temple']
    },

    // CAPÍTULO 2
    shadow_archives: {
        id: 'shadow_archives',
        name: 'Arquivos das Sombras',
        nameJp: '影の記録庫',
        description: 'Corredores infinitos de memórias seladas, onde o passado se esconde da luz.',
        background: 'archives',
        music: 'stealth_ambience',
        colors: {
            sky: '#0a1628',
            ground: '#1a2a4a',
            accent: '#2244aa'
        },
        elements: ['floating_scrolls', 'shadow_pillars', 'memory_orbs', 'hidden_passages']
    },

    // CAPÍTULO 3
    core_system: {
        id: 'core_system',
        name: 'Núcleo do Sistema',
        nameJp: 'システムの核',
        description: 'O coração digital da realidade, onde código e existência se fundem.',
        background: 'digital',
        music: 'digital_revelation',
        colors: {
            sky: '#1a1a0a',
            ground: '#2a2a1a',
            accent: '#ccaa22'
        },
        elements: ['data_streams', 'holographic_displays', 'iteration_counter', 'system_alerts']
    },

    // CAPÍTULO 4
    frame_zero: {
        id: 'frame_zero',
        name: 'Frame Zero',
        nameJp: 'フレームゼロ',
        description: 'O ponto de origem. Onde tudo começou. Onde tudo pode terminar.',
        background: 'origin',
        music: 'final_confrontation',
        colors: {
            sky: '#0a000a',
            ground: '#1a001a',
            accent: '#660066'
        },
        elements: ['all_masks_floating', 'reality_cracks', 'the_architects', 'reset_button']
    },

    // EPÍLOGO
    new_dawn: {
        id: 'new_dawn',
        name: 'Novo Amanhecer',
        nameJp: '新しい夜明け',
        description: 'O mundo após a escolha. Diferente, mas ainda existindo.',
        background: 'dawn',
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
