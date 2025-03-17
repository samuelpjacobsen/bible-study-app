import { topics, getTopicById, getAllTopics } from './topics';
import { bibleBooks, getBookById, getAllBooks } from './books';
import { bibleCharacters, getCharacterById, getAllCharacters } from './characters';
import { bibleDoctrine, getDoctrineById, getAllDoctrines } from './doctrines';
import { bibleProphecies, getProphecyById, getAllProphecies } from './prophecies';

// Função para obter todos os estudos de um tópico específico
export const getStudiesByTopicId = (topicId) => {
  switch (topicId) {
    case 'books':
      return getAllBooks();
    case 'characters':
      return getAllCharacters();
    case 'doctrines':
      return getAllDoctrines();
    case 'prophecies':
      return getAllProphecies();
    default:
      return [];
  }
};

// Função para obter um estudo específico pelo id do tópico e id do estudo
export const getStudyByIds = (topicId, studyId) => {
  switch (topicId) {
    case 'books':
      return getBookById(studyId);
    case 'characters':
      return getCharacterById(studyId);
    case 'doctrines':
      return getDoctrineById(studyId);
    case 'prophecies':
      return getProphecyById(studyId);
    default:
      return null;
  }
};

// Função para obter o total de estudos
export const getTotalStudiesCount = () => {
  return getAllBooks().length + 
         getAllCharacters().length + 
         getAllDoctrines().length + 
         getAllProphecies().length;
};

// Versículos diários motivacionais
export const dailyVerses = [
  {
    reference: 'Josué 1:9',
    text: 'Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.'
  },
  {
    reference: 'Filipenses 4:13',
    text: 'Tudo posso naquele que me fortalece.'
  },
  {
    reference: 'Salmos 23:1',
    text: 'O Senhor é o meu pastor; de nada terei falta.'
  },
  {
    reference: 'João 3:16',
    text: 'Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna.'
  },
  {
    reference: 'Provérbios 3:5-6',
    text: 'Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas.'
  },
  {
    reference: 'Isaías 40:31',
    text: 'Mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos, andam e não se cansam.'
  },
  {
    reference: 'Romanos 8:28',
    text: 'Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.'
  }
];

// Função para obter um versículo diário aleatório
export const getDailyVerse = () => {
  const randomIndex = Math.floor(Math.random() * dailyVerses.length);
  return dailyVerses[randomIndex];
};

export {
  topics,
  getTopicById,
  getAllTopics,
  bibleBooks,
  getBookById,
  getAllBooks,
  bibleCharacters,
  getCharacterById,
  getAllCharacters,
  bibleDoctrine,
  getDoctrineById,
  getAllDoctrines,
  bibleProphecies,
  getProphecyById,
  getAllProphecies
};
