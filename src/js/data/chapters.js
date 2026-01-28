// ============ DADOS DOS CAPÍTULOS ============
export const CHAPTERS = {
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
        ],
        unlocks: {
            lore: ['masks'],
            masks: []
        }
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
        ],
        unlocks: {
            lore: [],
            masks: ['veil']
        }
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
        ],
        unlocks: {
            lore: ['vessel'],
            masks: ['oracle']
        }
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
        ],
        unlocks: {
            lore: ['truth'],
            masks: ['forbidden']
        }
    }
};

export function getChapter(id) {
    return CHAPTERS[id] || null;
}

export function getTotalChapters() {
    return Object.keys(CHAPTERS).length;
}
