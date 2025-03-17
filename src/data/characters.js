export const bibleCharacters = [
  {
    id: 'abraham',
    title: 'Abraão',
    description: 'O pai da fé, chamado por Deus para deixar sua terra e iniciar uma nova nação.',
    keyVerses: ['Gênesis 12:1-3', 'Gênesis 15:6', 'Hebreus 11:8-10'],
    content: `Abraão, originalmente chamado Abrão, é um dos personagens mais importantes da Bíblia. Sua história começa em Gênesis 12, quando Deus o chama para deixar sua terra natal, Ur dos Caldeus, e ir para uma terra que Ele lhe mostraria. Deus faz um pacto com Abraão, prometendo fazer dele uma grande nação, abençoá-lo e, através dele, abençoar todas as famílias da terra.

A jornada de fé de Abraão é marcada por testes e desafios. Apesar de sua idade avançada e da esterilidade de sua esposa Sara, Deus promete a eles um filho. Depois de anos de espera, nasce Isaque, o filho da promessa. O teste mais difícil de Abraão vem quando Deus pede que ele sacrifique Isaque, uma ordem que Abraão se prepara para obedecer, demonstrando sua completa confiança em Deus. No último momento, Deus providencia um substituto, confirmando sua promessa a Abraão.

No Novo Testamento, Abraão é frequentemente citado como exemplo de fé (Romanos 4, Gálatas 3, Hebreus 11). Sua disposição de crer nas promessas de Deus, mesmo quando pareciam impossíveis, estabeleceu um padrão de fé para todas as gerações futuras.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo9', 'https://www.youtube.com/watch?v=exemplo10']
  },
  {
    id: 'moses',
    title: 'Moisés',
    description: 'O grande líder e legislador que conduziu Israel para fora do Egito e recebeu a Lei no Monte Sinai.',
    keyVerses: ['Êxodo 3:10-14', 'Êxodo 20:1-17', 'Deuteronômio 34:10-12'],
    content: `Moisés é uma das figuras mais significativas do Antigo Testamento. Nascido em um tempo em que os israelitas eram escravos no Egito e os bebês hebreus eram mortos por ordem do Faraó, Moisés foi colocado em um cesto no rio Nilo, onde foi encontrado e adotado pela filha do Faraó.

Depois de crescer no palácio egípcio, Moisés foge para Midiã após matar um egípcio que estava maltratando um hebreu. No deserto, Deus aparece a ele na sarça ardente e o chama para liderar os israelitas para fora da escravidão no Egito. Moisés retorna ao Egito e, após as dez pragas, leva o povo através do Mar Vermelho em direção à Terra Prometida.

No Monte Sinai, Moisés recebe os Dez Mandamentos e outras leis divinas. Ele lidera Israel por 40 anos no deserto, enfrentando rebeliões e desafios, mas sempre em comunicação direta com Deus. Apesar de não entrar na Terra Prometida devido a um ato de desobediência, Moisés é lembrado como um homem de fé extraordinária, um profeta sem igual e o mediador da aliança entre Deus e Israel.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo11', 'https://www.youtube.com/watch?v=exemplo12']
  },
  {
    id: 'david',
    title: 'Davi',
    description: 'O rei segundo o coração de Deus, guerreiro, poeta e antepassado de Jesus Cristo.',
    keyVerses: ['1 Samuel 16:7', 'Salmos 23', '2 Samuel 7:12-16'],
    content: `Davi começa sua jornada como um jovem pastor em Belém, o menor dos filhos de Jessé. Escolhido e ungido por Samuel para ser o futuro rei de Israel, Davi ganha notoriedade ao derrotar o gigante filisteu Golias. Sua habilidade como músico o leva à corte do rei Saul, mas logo a inveja de Saul transforma Davi em um fugitivo.

Após a morte de Saul, Davi é coroado rei, primeiro sobre Judá e depois sobre todo Israel. Sob sua liderança, Israel se torna uma potência regional. Davi estabelece Jerusalém como capital e traz a Arca da Aliança para a cidade. Deus faz um pacto com Davi, prometendo que sua dinastia duraria para sempre – uma promessa que encontra seu cumprimento último em Jesus Cristo.

Apesar de ser descrito como "um homem segundo o coração de Deus", Davi comete pecados graves, incluindo adultério com Bate-Seba e o assassinato indireto de seu marido, Urias. Seu arrependimento sincero, registrado no Salmo 51, demonstra sua humildade diante de Deus.

Davi é responsável por muitos dos Salmos e é lembrado não apenas como um grande rei, mas como um homem que buscava a Deus com paixão e honestidade.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo13', 'https://www.youtube.com/watch?v=exemplo14']
  },
  {
    id: 'paul',
    title: 'Paulo',
    description: 'Apóstolo de Jesus Cristo, teólogo e missionário que escreveu grande parte do Novo Testamento.',
    keyVerses: ['Atos 9:1-19', 'Filipenses 3:7-14', '2 Timóteo 4:7-8'],
    content: `Paulo, originalmente chamado Saulo de Tarso, começa sua história no Novo Testamento como um perseguidor zeloso da igreja primitiva. Educado aos pés de Gamaliel, um respeitado mestre da lei judaica, Paulo era um fariseu dedicado que via os seguidores de Jesus como uma ameaça perigosa à fé judaica.

Sua vida mudou dramaticamente durante uma viagem a Damasco, quando Jesus ressuscitado apareceu a ele em uma luz brilhante. Essa experiência transformou Paulo de perseguidor em pregador apaixonado do evangelho. Depois de um período de preparação, ele embarcou em várias viagens missionárias, estabelecendo igrejas em toda a Ásia Menor e na Europa.

Paulo escreveu pelo menos 13 das 27 cartas do Novo Testamento, abordando questões teológicas, práticas e pastorais. Suas epístolas formam uma parte significativa da base teológica do cristianismo. Conceitos como justificação pela fé, graça, reconciliação e a natureza da igreja são profundamente desenvolvidos em seus escritos.

Apesar de enfrentar perseguição, prisão, naufrágio e muitas outras dificuldades, Paulo permaneceu inabalável em sua missão de compartilhar o evangelho. Segundo a tradição, ele foi martirizado em Roma durante o reinado de Nero. Seu legado como apóstolo, teólogo e missionário continua a influenciar a fé cristã até hoje.`,
    videoLinks: ['https://www.youtube.com/watch?v=exemplo15', 'https://www.youtube.com/watch?v=exemplo16']
  }
];

export const getCharacterById = (id) => {
  return bibleCharacters.find(character => character.id === id);
};

export const getAllCharacters = () => {
  return bibleCharacters;
};
