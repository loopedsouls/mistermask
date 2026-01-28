// ============ ENTRADAS DE LORE ============
export const LORE_ENTRIES = {
    frameZero: {
        id: 'frameZero',
        title: 'A Ordem do Frame Zero',
        content: `Há muito tempo, quando a realidade era jovem, os primeiros glitches apareceram.
        
Rasgos no tecido da existência. Loops que prendiam almas pela eternidade.
        
Os ARQUITETOS criaram a Ordem - não de homens, mas de MÁSCARAS.
        
Cada máscara era uma arma. Cada máscara era uma prisão.
        
Os guerreiros que as vestiam ganhavam poder além dos limites mortais...
mas perdiam a si mesmos no processo.

"O corpo é temporário. A máscara é eterna."
- Primeiro Axioma do Frame Zero`,
        unlocked: true
    },
    masks: {
        id: 'masks',
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
Custo: Tudo.`,
        unlocked: false
    },
    vessel: {
        id: 'vessel',
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

As máscaras estão FAMINTAS.`,
        unlocked: false
    },
    truth: {
        id: 'truth',
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

[FIM CLASSIFICADO]`,
        unlocked: false
    }
};

export function getLoreEntry(id) {
    return LORE_ENTRIES[id] || null;
}

export function getAllLoreEntries() {
    return Object.values(LORE_ENTRIES);
}
