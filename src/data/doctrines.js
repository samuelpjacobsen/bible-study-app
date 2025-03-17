export const bibleDoctrine = [
  {
    id: 'salvation',
    title: 'Salvação',
    description: 'O plano divino para resgatar a humanidade do pecado e da morte eterna.',
    keyVerses: ['João 3:16', 'Efésios 2:8-9', 'Romanos 10:9-10'],
    content: `A doutrina da salvação (soteriologia) é central para a fé cristã. Ela aborda a questão de como os seres humanos, separados de Deus pelo pecado, podem ser reconciliados com Ele e receber a vida eterna.

A Bíblia ensina que todos pecaram e estão destituídos da glória de Deus (Romanos 3:23). O pecado traz como consequência a morte espiritual e a separação de Deus (Romanos 6:23). A salvação é a resposta divina para este problema.

No centro da doutrina da salvação está a obra de Jesus Cristo. Através de sua vida perfeita, morte sacrificial na cruz e ressurreição, Jesus pagou o preço pelos pecados da humanidade. A Bíblia descreve isso como propiciação (satisfação da justiça divina) e expiação (remoção da culpa do pecado).

A salvação é recebida pela graça de Deus através da fé em Jesus Cristo (Efésios 2:8-9). Não é algo que possa ser conquistado por obras ou méritos humanos. Quando uma pessoa coloca sua fé em Cristo, ela é justificada (declarada justa diante de Deus), regenerada (recebe nova vida espiritual), e adotada na família de Deus.

A salvação inclui não apenas o perdão dos pecados passados, mas também o processo contínuo de santificação (crescimento em semelhança a Cristo) e culmina na glorificação (a transformação final do crente na eternidade).`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo17', 'https://www.youtube.com/watch?v=exemplo18']
  },
  {
    id: 'trinity',
    title: 'Trindade',
    description: 'A doutrina que afirma que Deus é um ser em três pessoas: Pai, Filho e Espírito Santo.',
    keyVerses: ['Mateus 28:19', '2 Coríntios 13:14', 'João 14:26'],
    content: `A doutrina da Trindade é uma das mais distintivas e, ao mesmo tempo, mais desafiadoras do cristianismo. Ela afirma que existe um único Deus, que subsiste eternamente em três pessoas: Pai, Filho e Espírito Santo. Estas três pessoas são co-iguais, co-eternas e compartilham a mesma essência divina.

Embora a palavra "Trindade" não apareça na Bíblia, o conceito é deduzido de numerosas passagens bíblicas. No Antigo Testamento, há indicações da pluralidade dentro da unidade divina (como o uso do plural "façamos" em Gênesis 1:26). No Novo Testamento, vemos evidências mais claras, como no batismo de Jesus (Mateus 3:16-17), onde o Pai fala do céu, o Filho é batizado e o Espírito desce como uma pomba.

A doutrina da Trindade evita dois extremos: o politeísmo (a crença em múltiplos deuses) e o modalismo (a ideia de que Deus simplesmente se manifesta em diferentes "modos" ou papéis). Ao invés disso, afirma que o Pai, o Filho e o Espírito Santo são pessoas distintas, mas não deuses separados.

Ao longo da história da igreja, a Trindade tem sido articulada em credos como o Niceno e o Atanasiano. Embora a compreensão humana dessa realidade divina seja limitada, a doutrina da Trindade nos ajuda a entender a natureza relacional de Deus e a obra complementar das três pessoas na criação, redenção e santificação.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo19', 'https://www.youtube.com/watch?v=exemplo20']
  },
  {
    id: 'scripture',
    title: 'Escrituras',
    description: 'A doutrina sobre a natureza, autoridade e propósito da Bíblia como Palavra de Deus.',
    keyVerses: ['2 Timóteo 3:16-17', '2 Pedro 1:20-21', 'Salmos 119:105'],
    content: `A doutrina das Escrituras (ou Bibliologia) aborda a natureza, autoridade e propósito da Bíblia. A posição cristã histórica é que a Bíblia é a Palavra de Deus inspirada, composta por 66 livros do Antigo e Novo Testamentos.

A inspiração das Escrituras refere-se à crença de que Deus supervisionou os autores humanos de modo que, apesar de seus diferentes estilos e personalidades, eles escreveram exatamente o que Deus pretendia comunicar. Segundo 2 Timóteo 3:16, "toda Escritura é inspirada por Deus" (literalmente "soprada por Deus"), e 2 Pedro 1:21 afirma que "homens falaram da parte de Deus, impelidos pelo Espírito Santo".

A doutrina cristã tradicional também afirma a inerrância (ausência de erro) e a infalibilidade (impossibilidade de falhar em seu propósito) das Escrituras em seus manuscritos originais. Isso não significa que as cópias e traduções sejam perfeitas, mas que o texto original, conforme dado por Deus, é verdadeiro e confiável.

As Escrituras são vistas como tendo autoridade suprema em questões de fé e prática. Elas são suficientes para ensinar tudo o que é necessário para a salvação e a vida cristã. Como diz 2 Timóteo 3:16-17, as Escrituras são "úteis para o ensino, para a repreensão, para a correção e para a instrução na justiça, para que o homem de Deus seja perfeito e perfeitamente habilitado para toda boa obra".`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo21', 'https://www.youtube.com/watch?v=exemplo22']
  }
];

export const getDoctrineById = (id) => {
  return bibleDoctrine.find(doctrine => doctrine.id === id);
};

export const getAllDoctrines = () => {
  return bibleDoctrine;
};
