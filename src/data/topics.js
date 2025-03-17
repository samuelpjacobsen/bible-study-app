export const topics = [
  {
    id: 'books',
    title: 'Livros da Bíblia',
    description: 'Explore os 66 livros da Bíblia e seu contexto histórico.',
    icon: '📚',
    color: 'var(--primary)'
  },
  {
    id: 'characters',
    title: 'Personagens Bíblicos',
    description: 'Conheça as histórias dos principais personagens bíblicos.',
    icon: '👤',
    color: 'var(--accent)'
  },
  {
    id: 'doctrines',
    title: 'Doutrinas e Ensinamentos',
    description: 'Estude as principais doutrinas e ensinamentos bíblicos.',
    icon: '📖',
    color: '#4CAF50'
  },
  {
    id: 'prophecies',
    title: 'Profecias e Parábolas',
    description: 'Estude as profecias e parábolas contidas na Bíblia.',
    icon: '🔮',
    color: '#9C27B0'
  }
];

export const getTopicById = (id) => {
  return topics.find(topic => topic.id === id);
};

export const getAllTopics = () => {
  return topics;
};
