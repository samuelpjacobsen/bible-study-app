export const bibleBooks = [
  {
    id: 'genesis',
    title: 'Gênesis',
    category: 'Pentateuco',
    description: 'O livro dos começos, que narra a criação do mundo, a queda do homem e o início da história do povo de Deus.',
    keyVerses: ['Gênesis 1:1', 'Gênesis 3:15', 'Gênesis 12:1-3'],
    content: `Gênesis é o primeiro livro da Bíblia e narra os primórdios da humanidade, desde a criação do mundo até a história dos patriarcas: Abraão, Isaque e Jacó. O livro está dividido em duas partes principais: a história primitiva (capítulos 1-11) e a história patriarcal (capítulos 12-50).

Na primeira parte, encontramos a narrativa da criação, a queda do homem, o dilúvio e a torre de Babel. A segunda parte foca nas histórias de Abraão e sua família, incluindo o estabelecimento da aliança de Deus com Abraão e seus descendentes. O livro termina com José no Egito e a família de Jacó se estabelecendo lá.

Gênesis lança as bases para o resto da Bíblia, estabelecendo temas como criação, queda, redenção e aliança que são desenvolvidos ao longo de toda a Escritura.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo1', 'https://www.youtube.com/watch?v=exemplo2']
  },
  {
    id: 'exodus',
    title: 'Êxodo',
    category: 'Pentateuco',
    description: 'Narra a libertação do povo de Israel da escravidão no Egito e o estabelecimento da aliança no Monte Sinai.',
    keyVerses: ['Êxodo 3:14', 'Êxodo 20:1-17'],
    content: `Êxodo, o segundo livro da Bíblia, narra a história da libertação dos israelitas da escravidão no Egito sob a liderança de Moisés. O livro começa com o nascimento de Moisés e sua chamada por Deus através da sarça ardente.

A primeira parte do livro (capítulos 1-18) descreve as dez pragas enviadas contra o Egito, a instituição da Páscoa, a travessia do Mar Vermelho e o início da jornada pelo deserto. A segunda parte (capítulos 19-40) foca na revelação de Deus no Monte Sinai, onde Ele estabelece sua aliança com Israel, dá os Dez Mandamentos e instruções detalhadas para a construção do Tabernáculo.

Êxodo é fundamental para entender a identidade de Israel como nação escolhida por Deus e estabelece os fundamentos do relacionamento entre Deus e seu povo através da aliança.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo3', 'https://www.youtube.com/watch?v=exemplo4']
  },
  {
    id: 'psalms',
    title: 'Salmos',
    category: 'Poéticos',
    description: 'Uma coleção de 150 poemas e cânticos que expressam diversas emoções e aspectos da fé e adoração.',
    keyVerses: ['Salmos 23:1', 'Salmos 119:105'],
    content: `Salmos é uma coleção de 150 poemas líricos e orações, tradicionalmente atribuídos em grande parte ao rei Davi. Este livro serve como o hinário e livro de orações de Israel, expressando uma ampla gama de emoções humanas e experiências espirituais.

Os Salmos abrangem diversos temas, incluindo louvor, lamento, gratidão, confissão, sabedoria e confiança em Deus. Eles são divididos em cinco livros (1-41, 42-72, 73-89, 90-106, 107-150), possivelmente refletindo os cinco livros do Pentateuco.

Ao longo da história, os Salmos têm servido como um guia para a adoração e devoção pessoal, oferecendo palavras para expressar alegria, tristeza, arrependimento e esperança. Eles revelam tanto a humanidade dos autores quanto a grandeza e fidelidade de Deus.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo5', 'https://www.youtube.com/watch?v=exemplo6']
  },
  {
    id: 'john',
    title: 'João',
    category: 'Evangelhos',
    description: 'Um dos quatro evangelhos, escrito com o propósito declarado de que os leitores creiam que Jesus é o Cristo, o Filho de Deus.',
    keyVerses: ['João 3:16', 'João 14:6', 'João 20:30-31'],
    content: `O Evangelho de João, escrito pelo "discípulo a quem Jesus amava", apresenta um retrato único de Jesus Cristo. Diferente dos evangelhos sinóticos (Mateus, Marcos e Lucas), João estrutura sua narrativa em torno de sete sinais (milagres) e sete declarações "Eu Sou" de Jesus.

João começa com um prólogo teológico profundo que identifica Jesus como o Verbo (Logos) eterno que "se fez carne e habitou entre nós". Ao longo do evangelho, João enfatiza a divindade de Jesus e seu relacionamento íntimo com o Pai. O propósito do evangelho é claramente declarado em João 20:31: "Estes, porém, foram registrados para que vocês creiam que Jesus é o Cristo, o Filho de Deus e, crendo, tenham vida em seu nome."

O Evangelho de João contém muitos discursos extensos de Jesus que não são encontrados nos outros evangelhos, incluindo o discurso sobre o pão da vida (capítulo 6), o bom pastor (capítulo 10), e o discurso de despedida (capítulos 14-17).`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo7', 'https://www.youtube.com/watch?v=exemplo8']
  }
];

export const getBookById = (id) => {
  return bibleBooks.find(book => book.id === id);
};

export const getAllBooks = () => {
  return bibleBooks;
};
