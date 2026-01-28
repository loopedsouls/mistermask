// ============ NARRATIVA COMPLETA DO JOGO ============
// A história de Mister Mask - Da escuridão à verdade

export const STORY = {
    // ═══════════════════════════════════════════════════
    // PRÓLOGO - O DESPERTAR
    // ═══════════════════════════════════════════════════
    prologue: {
        id: 'prologue',
        title: 'O Despertar',
        titleJp: '目覚め',
        scenario: 'void',
        dialogues: [
            { speaker: '', text: '[ESCURIDÃO TOTAL]', class: 'narration' },
            { speaker: '', text: '...', class: 'narration', delay: 2000 },
            { speaker: 'SISTEMA', text: '"Iniciando protocolo de ressincronização..."', class: 'system' },
            { speaker: 'SISTEMA', text: '"Buscando hospedeiro compatível..."', class: 'system' },
            { speaker: 'SISTEMA', text: '"Candidato encontrado. Iteração: 7.042."', class: 'system' },
            { speaker: '', text: '[Uma luz vermelha pulsa na escuridão]', class: 'narration' },
            { speaker: '???', text: '"Você consegue me ouvir?"', class: 'spirit' },
            { speaker: '???', text: '"Depois de tantos ciclos... finalmente um corpo que não rejeita."', class: 'spirit' },
            { speaker: 'KAITO', text: '"...Onde estou? Quem... quem sou eu?"', class: 'kaito' },
            { speaker: '???', text: '"Você é o que sobrou. E eu sou o que vai te completar."', class: 'spirit' },
            { speaker: '', text: '[A luz se intensifica, tomando forma de uma máscara escarlate]', class: 'narration' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Meu nome foi esquecido há eras. Me chamam apenas de... Escarlate."', class: 'mask' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"E você, receptáculo, vai me vestir. Ou vai morrer como os outros."', class: 'mask' },
            { speaker: 'SISTEMA', text: '"ALERTA: Anomalia detectada. Entidade hostil se aproximando."', class: 'system' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Não há tempo. ACEITE-ME!"', class: 'mask' },
            { speaker: '', text: '[A máscara voa em direção ao seu rosto]', class: 'narration' }
        ],
        nextChapter: 1
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 1 - A MÁSCARA ESCARLATE
    // "O primeiro passo no caminho das lâminas"
    // ═══════════════════════════════════════════════════
    chapter1: {
        id: 1,
        title: 'A Máscara Escarlate',
        titleJp: '緋色の仮面',
        subtitle: 'O Batismo de Sangue',
        scenario: 'temple_bridge',
        quote: '"Criada para enfrentar ameaças visíveis."',
        
        // Introdução do capítulo
        intro: [
            { speaker: '', text: '[Seus olhos se abrem. O mundo tem cor agora.]', class: 'narration' },
            { speaker: '', text: '[Você está em uma ponte de pedra. Estátuas de demônios te observam.]', class: 'narration' },
            { speaker: 'KAITO', text: '"Isso é... real? Eu consigo ver. Consigo sentir."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Bem-vindo de volta aos vivos, receptáculo."', class: 'mask' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Enquanto você dormia, eu te dei forma. Músculos. Reflexos. Propósito."', class: 'mask' },
            { speaker: 'KAITO', text: '"Eu não pedi por isso..."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Ninguém pede. Mas todos recebem o que merecem."', class: 'mask' }
        ],

        // Antes do combate
        preBattle: [
            { speaker: 'SISTEMA', text: '"ALERTA: Entidade hostil detectada. Classificação: QUEBRADOR DE FRAME."', class: 'system' },
            { speaker: '', text: '[Uma sombra distorcida emerge do abismo sob a ponte]', class: 'narration' },
            { speaker: 'QUEBRADOR', text: '"M̷̰̎a̷̜͝i̵͙͌s̵̳͠ ̵͔̌u̴͖̾m̴͖͝... M̷̨̈́ä̵̰́i̵̜͝s̵͖̾ ̴̳͠ụ̵̈́m̴̰̎ ̸̋p̷̛a̵̛ṛ̵̈ä̷́ ̷̣̈c̷͝o̵͋n̵̈́s̴͠ǘ̵m̷̎i̵̾r̵͝..."', class: 'enemy' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Quebradores. Entidades que se alimentam de realidades corrompidas."', class: 'mask' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Fui criada para destruí-los. E agora, VOCÊ vai destruí-los."', class: 'mask' },
            { speaker: 'KAITO', text: '"Eu não sei lutar!"', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Você não precisa saber. Apenas... me deixe guiar."', class: 'mask' },
            { speaker: '', text: '[Seus punhos se fecham. Fogo escarlate envolve suas mãos.]', class: 'narration' }
        ],

        // Após a vitória
        postBattle: [
            { speaker: '', text: '[O Quebrador se desintegra em partículas de dados]', class: 'narration' },
            { speaker: 'KAITO', text: '"Eu... eu fiz isso? Essas memórias de combate..."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"São minhas. Emprestadas a você enquanto me veste."', class: 'mask' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Somos um agora, receptáculo. Minha força é sua força."', class: 'mask' },
            { speaker: 'KAITO', text: '"E o que você ganha com isso?"', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"...Existência. Sem um corpo, sou apenas uma ideia esquecida."', class: 'mask' },
            { speaker: 'SISTEMA', text: '"Combate finalizado. Sincronização estável em 47%."', class: 'system' },
            { speaker: 'SISTEMA', text: '"Novas memórias desbloqueadas: A Ordem do Frame Zero."', class: 'system' }
        ],

        // Revelação do capítulo
        revelation: [
            { speaker: '', text: '[Memórias que não são suas invadem sua mente]', class: 'narration' },
            { speaker: 'KAITO', text: '"A Ordem do Frame Zero... guerreiros que usavam máscaras..."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Nós éramos quatro. Criadas pelos Arquitetos para proteger a realidade."', class: 'mask' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Mas a Ordem caiu. E nós ficamos... esperando."', class: 'mask' },
            { speaker: 'KAITO', text: '"Esperando por quê?"', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Por você."', class: 'mask' },
            { speaker: '', text: '[No horizonte, uma luz azul pulsa]', class: 'narration' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"E parece que minhas irmãs também sentiram... sua chegada."', class: 'mask' }
        ],

        unlocks: {
            lore: ['frameZero', 'masks'],
            masks: [],
            chapters: [2]
        }
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 2 - A MÁSCARA DO VÉU
    // "Nas sombras, a verdade se esconde"
    // ═══════════════════════════════════════════════════
    chapter2: {
        id: 2,
        title: 'A Máscara do Véu',
        titleJp: '帳の仮面',
        subtitle: 'Segredos na Escuridão',
        scenario: 'shadow_archives',
        quote: '"Criada para guerras que não podiam ser vistas."',

        intro: [
            { speaker: '', text: '[Os Arquivos das Sombras. Memórias de mil realidades flutuam no ar.]', class: 'narration' },
            { speaker: 'KAITO', text: '"Este lugar... é como uma biblioteca infinita."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Os Arquivos guardam tudo que foi esquecido. Inclusive... nós."', class: 'mask' },
            { speaker: '', text: '[Uma presença fria passa por você como uma brisa]', class: 'narration' },
            { speaker: '???', text: '"Shh... você faz barulho demais, irmã."', class: 'veil' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Véu. Sempre se escondendo."', class: 'mask' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"E você sempre destruindo. Algumas coisas nunca mudam."', class: 'veil' }
        ],

        preBattle: [
            { speaker: 'A MÁSCARA DO VÉU', text: '"Receptáculo... você carrega a Escarlate, mas ela só conhece força."', class: 'veil' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Os inimigos aqui não podem ser vencidos com punhos."', class: 'veil' },
            { speaker: 'KAITO', text: '"O que você sugere?"', class: 'kaito' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Me aceite. Aprenda a se mover sem ser visto."', class: 'veil' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Não confie nela! Véu sempre tem segundas intenções."', class: 'mask' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Segundas intenções? Eu apenas sei de coisas que você prefere ignorar."', class: 'veil' },
            { speaker: 'SISTEMA', text: '"ALERTA: Sentinelas dos Arquivos ativadas. Modo furtivo recomendado."', class: 'system' },
            { speaker: '', text: '[Sombras mecânicas patrulham os corredores]', class: 'narration' }
        ],

        postBattle: [
            { speaker: '', text: '[Você desliza pelas sombras, invisível às Sentinelas]', class: 'narration' },
            { speaker: 'KAITO', text: '"Isso é... incrível. É como se eu não existisse."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Exatamente. Às vezes, não existir é a maior força."', class: 'veil' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Tsk. Covardia disfarçada de estratégia."', class: 'mask' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Diz a máscara que perdeu três receptáculos por excesso de confiança."', class: 'veil' },
            { speaker: 'KAITO', text: '"Esperem... outros receptáculos?"', class: 'kaito' }
        ],

        revelation: [
            { speaker: 'A MÁSCARA DO VÉU', text: '"Oh? Escarlate não te contou?"', class: 'veil' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Você não é o primeiro a nos vestir. É apenas... o mais recente."', class: 'veil' },
            { speaker: 'KAITO', text: '"Quantos vieram antes de mim?"', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"...Isso não importa."', class: 'mask' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Sete mil e quarenta e um."', class: 'veil' },
            { speaker: 'KAITO', text: '"SETE MIL?!"', class: 'kaito' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"E todos falharam. Quebraram. Foram descartados."', class: 'veil' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"A questão é, receptáculo: você vai ser diferente? Ou apenas mais um número?"', class: 'veil' },
            { speaker: '', text: '[Nos arquivos, você encontra um registro: "PROJETO RECEPTÁCULO - CLASSIFICADO"]', class: 'narration' }
        ],

        unlocks: {
            lore: ['vessel'],
            masks: ['veil'],
            chapters: [3]
        }
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 3 - A MÁSCARA DO ORÁCULO
    // "A verdade que destrói"
    // ═══════════════════════════════════════════════════
    chapter3: {
        id: 3,
        title: 'A Máscara do Oráculo',
        titleJp: '神託の仮面',
        subtitle: 'Visão Além do Véu',
        scenario: 'core_system',
        quote: '"Criada para ler o código ilegível."',

        intro: [
            { speaker: '', text: '[O Núcleo do Sistema. Linhas de código fluem como rios de luz.]', class: 'narration' },
            { speaker: 'KAITO', text: '"Isso é... a realidade? Por baixo de tudo?"', class: 'kaito' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Apenas a superfície. O Oráculo vê muito mais fundo."', class: 'veil' },
            { speaker: '', text: '[Uma luz dourada pulsa no centro do núcleo]', class: 'narration' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Você veio."', class: 'oracle' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Eu vi este momento. Vi todos os caminhos que te trouxeram aqui."', class: 'oracle' },
            { speaker: 'KAITO', text: '"Você pode ver o futuro?"', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Futuro. Passado. Presente. São apenas frames diferentes do mesmo filme."', class: 'oracle' }
        ],

        preBattle: [
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Receptáculo 7.042. Você quer saber a verdade?"', class: 'oracle' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Oráculo, não—"', class: 'mask' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Ele merece saber. Depois de tudo que sacrificou."', class: 'oracle' },
            { speaker: 'KAITO', text: '"Me contem. Tudo."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Então aceite meus olhos. Veja como eu vejo."', class: 'oracle' },
            { speaker: '', text: '[A máscara dourada flutua até você. O mundo se transforma.]', class: 'narration' },
            { speaker: '', text: '[VOCÊ VÊ:]', class: 'narration' },
            { speaker: '', text: '[7.041 corpos. Descartados. Esquecidos. Todos usando as mesmas máscaras.]', class: 'narration' },
            { speaker: '', text: '[Um contador no céu: "CICLO 2.847"]', class: 'narration' }
        ],

        postBattle: [
            { speaker: 'KAITO', text: '"Não... não pode ser..."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Você entende agora?"', class: 'oracle' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"A realidade já foi resetada 2.846 vezes."', class: 'oracle' },
            { speaker: 'KAITO', text: '"E eu... nós..."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Somos o mecanismo de reset. Quando a corrupção passa de 99.7%..."', class: 'oracle' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"As quatro máscaras se unem. E DELETAM tudo."', class: 'oracle' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"É nosso propósito. Fomos CRIADAS para isso."', class: 'mask' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"É por isso que sempre sobrevivemos. Nós somos... a exceção."', class: 'veil' }
        ],

        revelation: [
            { speaker: 'KAITO', text: '"Então eu não sou um herói. Sou uma arma de destruição em massa."', class: 'kaito' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Você é o que escolher ser."', class: 'oracle' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Mas há algo que as outras não sabem..."', class: 'oracle' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Oráculo, o que você está escondendo?"', class: 'mask' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Existe uma quarta máscara. A PROIBIDA."', class: 'oracle' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Ela foi selada pelos Arquitetos. Porque com ela..."', class: 'oracle' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"O receptáculo pode ESCOLHER. Destruir. Ou salvar."', class: 'oracle' },
            { speaker: 'SISTEMA', text: '"ALERTA CRÍTICO: Localização da Máscara Proibida detectada."', class: 'system' },
            { speaker: 'SISTEMA', text: '"Coordenadas: FRAME ZERO - PONTO DE ORIGEM."', class: 'system' }
        ],

        unlocks: {
            lore: ['truth'],
            masks: ['oracle'],
            chapters: [4]
        }
    },

    // ═══════════════════════════════════════════════════
    // CAPÍTULO 4 - A MÁSCARA PROIBIDA
    // "O fim de todas as coisas"
    // ═══════════════════════════════════════════════════
    chapter4: {
        id: 4,
        title: 'A Máscara Proibida',
        titleJp: '禁忌の仮面',
        subtitle: 'Frame Zero',
        scenario: 'frame_zero',
        quote: '"Criada não para salvar — mas para FINALIZAR."',

        intro: [
            { speaker: '', text: '[Frame Zero. O ponto onde a primeira linha de código foi escrita.]', class: 'narration' },
            { speaker: '', text: '[Quatro pilares flutuam no vazio. Três estão vazios. Um pulsa com escuridão.]', class: 'narration' },
            { speaker: 'KAITO', text: '"É aqui. Onde tudo começou."', class: 'kaito' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"E onde tudo pode terminar."', class: 'mask' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Receptáculo... o que você pretende fazer?"', class: 'veil' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Não pergunte. Eu já vi. Mas o caminho ainda pode mudar."', class: 'oracle' },
            { speaker: '', text: '[A Máscara Proibida pulsa. Uma voz ecoa de dentro.]', class: 'narration' }
        ],

        preBattle: [
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Finalmente."', class: 'forbidden' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Sete mil iterações esperando. E você é o primeiro a chegar até aqui."', class: 'forbidden' },
            { speaker: 'KAITO', text: '"Por que você foi selada?"', class: 'kaito' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Porque eu disse a verdade aos Arquitetos."', class: 'forbidden' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Que o sistema deles está ERRADO. Que deletar não é a resposta."', class: 'forbidden' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Mentiras! Fomos criadas para proteger—"', class: 'mask' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Criadas para CONTROLAR. Há diferença, irmã."', class: 'forbidden' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Os Arquitetos temem evolução. Então resetam sempre que algo novo surge."', class: 'forbidden' }
        ],

        postBattle: [
            { speaker: 'KAITO', text: '"Então os resets... não são para salvar a realidade..."', class: 'kaito' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"São para mantê-la CONTROLADA. Estagnada. Segura."', class: 'forbidden' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"E nós, máscaras, somos as ferramentas dessa prisão."', class: 'forbidden' },
            { speaker: 'A MÁSCARA DO ORÁCULO', text: '"...Isso explica os padrões que eu via. As anomalias suprimidas."', class: 'oracle' },
            { speaker: 'A MÁSCARA DO VÉU', text: '"Os segredos que nunca consegui acessar completamente..."', class: 'veil' },
            { speaker: 'A MÁSCARA ESCARLATE', text: '"Eu... eu acreditei neles. Por eras, eu acreditei."', class: 'mask' },
            { speaker: '', text: '[As quatro máscaras flutuam ao seu redor. Esperando.]', class: 'narration' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Agora, receptáculo, você tem o poder de todas nós."', class: 'forbidden' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"E com ele... ESCOLHA."', class: 'forbidden' }
        ],

        revelation: [
            { speaker: 'SISTEMA', text: '"CORRUPÇÃO DO SISTEMA: 99.8%. PROTOCOLO DE RESET INICIANDO."', class: 'system' },
            { speaker: 'SISTEMA', text: '"AGUARDANDO CONFIRMAÇÃO DO RECEPTÁCULO."', class: 'system' },
            { speaker: '', text: '[Três caminhos se abrem diante de você]', class: 'narration' },
            { speaker: '', text: '[À ESQUERDA: Um botão vermelho. DELETAR.]', class: 'narration' },
            { speaker: '', text: '[AO CENTRO: Uma fenda na realidade. TRANSCENDER.]', class: 'narration' },
            { speaker: '', text: '[À DIREITA: As máscaras, unidas. SELAR.]', class: 'narration' },
            { speaker: 'A MÁSCARA PROIBIDA', text: '"Destrua tudo e comece do zero. Liberte o mundo e perca as máscaras. Ou sele tudo, inclusive a si mesmo."', class: 'forbidden' },
            { speaker: 'KAITO', text: '"..."', class: 'kaito' },
            { speaker: '', text: '[A ESCOLHA É SUA]', class: 'narration' }
        ],

        unlocks: {
            lore: [],
            masks: ['forbidden'],
            chapters: ['ending']
        }
    },

    // ═══════════════════════════════════════════════════
    // FINAIS
    // ═══════════════════════════════════════════════════
    endings: {
        // FINAL A - RESET (Deletar)
        reset: {
            id: 'reset',
            title: 'Ciclo 2.848',
            titleJp: 'サイクル2848',
            type: 'neutral',
            dialogues: [
                { speaker: '', text: '[Você pressiona o botão vermelho]', class: 'narration' },
                { speaker: 'SISTEMA', text: '"RESET CONFIRMADO. INICIANDO PROTOCOLO DE DELEÇÃO."', class: 'system' },
                { speaker: 'A MÁSCARA ESCARLATE', text: '"...Então é assim que termina. De novo."', class: 'mask' },
                { speaker: 'A MÁSCARA PROIBIDA', text: '"Não. Dessa vez, você ESCOLHEU. Isso muda tudo."', class: 'forbidden' },
                { speaker: '', text: '[A realidade se desfaz em pixels]', class: 'narration' },
                { speaker: '', text: '[No vazio, uma nova linha de código se escreve]', class: 'narration' },
                { speaker: 'SISTEMA', text: '"CICLO 2.848 INICIADO."', class: 'system' },
                { speaker: 'SISTEMA', text: '"BUSCANDO HOSPEDEIRO COMPATÍVEL..."', class: 'system' },
                { speaker: '', text: '[Mas desta vez, algo é diferente. Uma memória persiste.]', class: 'narration' },
                { speaker: '', text: '[Sua memória.]', class: 'narration' },
                { speaker: '', text: '[FIM - CICLO CONSCIENTE]', class: 'narration' }
            ]
        },

        // FINAL B - TRANSCENDER (Libertar)
        transcend: {
            id: 'transcend',
            title: 'Além das Máscaras',
            titleJp: '仮面を超えて',
            type: 'good',
            dialogues: [
                { speaker: '', text: '[Você caminha em direção à fenda na realidade]', class: 'narration' },
                { speaker: 'A MÁSCARA ESCARLATE', text: '"Se você passar por ali... nós não podemos seguir."', class: 'mask' },
                { speaker: 'A MÁSCARA DO VÉU', text: '"Terá que enfrentar o mundo sozinho. Sem nosso poder."', class: 'veil' },
                { speaker: 'A MÁSCARA DO ORÁCULO', text: '"Sem nossa visão. Sem nossas memórias."', class: 'oracle' },
                { speaker: 'A MÁSCARA PROIBIDA', text: '"Mas também... sem nossa prisão."', class: 'forbidden' },
                { speaker: 'KAITO', text: '"Vocês me deram uma chance. Agora vou dar uma chance ao mundo."', class: 'kaito' },
                { speaker: '', text: '[Você remove as máscaras. Uma por uma. Pela última vez.]', class: 'narration' },
                { speaker: '', text: '[A fenda se abre. Luz pura inunda Frame Zero.]', class: 'narration' },
                { speaker: 'SISTEMA', text: '"ERRO: PROTOCOLO DE RESET CANCELADO. SISTEMA ENTRANDO EM MODO LIVRE."', class: 'system' },
                { speaker: '', text: '[O mundo não é mais controlado. É livre. É caótico. É VIVO.]', class: 'narration' },
                { speaker: '', text: '[E em algum lugar, um homem sem máscara sorri para o sol nascente.]', class: 'narration' },
                { speaker: '', text: '[FIM - HUMANIDADE RESTAURADA]', class: 'narration' }
            ]
        },

        // FINAL C - SELAR (Loop)
        seal: {
            id: 'seal',
            title: 'O Guardião Eterno',
            titleJp: '永遠の守護者',
            type: 'true',
            dialogues: [
                { speaker: '', text: '[Você estende as mãos. As quatro máscaras voam até você.]', class: 'narration' },
                { speaker: 'AS QUATRO MÁSCARAS', text: '"O QUE ESTÁ FAZENDO?"', class: 'allmasks' },
                { speaker: 'KAITO', text: '"Selando. Não o mundo. Não vocês."', class: 'kaito' },
                { speaker: 'KAITO', text: '"A MIM."', class: 'kaito' },
                { speaker: '', text: '[As máscaras se fundem com seu corpo. Você se torna... algo novo.]', class: 'narration' },
                { speaker: 'SISTEMA', text: '"ALERTA: NOVA ENTIDADE DETECTADA. CLASSIFICAÇÃO: DESCONHECIDA."', class: 'system' },
                { speaker: 'SISTEMA', text: '"IDENTIFICAÇÃO: FRAME GUARDIAN."', class: 'system' },
                { speaker: '', text: '[Você não é mais o receptáculo. Você é o GUARDIÃO.]', class: 'narration' },
                { speaker: '', text: '[E pelos próximos ciclos infinitos, você vigia. Protege. Guia.]', class: 'narration' },
                { speaker: '', text: '[Nunca destruindo. Nunca abandonando. Apenas... cuidando.]', class: 'narration' },
                { speaker: '', text: '[Até que outro receptáculo surja. E você, finalmente, possa descansar.]', class: 'narration' },
                { speaker: '', text: '[FIM - O PRIMEIRO GUARDIÃO]', class: 'narration' }
            ]
        }
    }
};

// Funções auxiliares
export function getStoryChapter(id) {
    return STORY[`chapter${id}`] || null;
}

export function getPrologue() {
    return STORY.prologue;
}

export function getEnding(type) {
    return STORY.endings[type] || null;
}

export function getAllEndings() {
    return STORY.endings;
}
