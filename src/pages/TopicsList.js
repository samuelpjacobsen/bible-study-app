import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { ProgressContext } from '../context/ProgressContext';
import { getTopicById, getStudiesByTopicId } from '../data';

const Container = styled.div`
  padding: 1rem 0;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  background-color: ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-200)'};
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.darkMode ? 'var(--gray-600)' : 'var(--gray-300)'};
  }
`;

const TopicHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-300)'};
`;

const TopicTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: ${props => props.color || 'var(--primary)'};
`;

const TopicDescription = styled.p`
  font-size: 1.2rem;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
  max-width: 800px;
  margin: 0 auto;
`;

const StudiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
`;

const StudyCard = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StudyStatus = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.completed ? 'var(--accent)' : 'transparent'};
  border: 2px solid ${props => props.completed ? 'var(--accent)' : 'var(--gray-400)'};
`;

const StudyTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: ${props => props.darkMode ? 'var(--gray-200)' : 'var(--gray-800)'};
`;

const StudyDescription = styled.p`
  margin-bottom: 1rem;
`;

const KeyVerses = styled.div`
  margin-top: auto;
  font-size: 0.9rem;
`;

const KeyVersesTitle = styled.h4`
  margin-bottom: 0.5rem;
  color: ${props => props.darkMode ? 'var(--gray-400)' : 'var(--gray-600)'};
`;

const VersesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Verse = styled.li`
  margin-bottom: 0.25rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
`;

const TopicsList = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { isCompleted } = useContext(ProgressContext);
  const [topic, setTopic] = useState(null);
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    const currentTopic = getTopicById(topicId);
    if (!currentTopic) {
      navigate('/');
      return;
    }

    setTopic(currentTopic);
    setStudies(getStudiesByTopicId(topicId));
  }, [topicId, navigate]);

  if (!topic) {
    return null;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)} darkMode={darkMode}>
        ← Voltar
      </BackButton>

      <TopicHeader darkMode={darkMode}>
        <TopicTitle color={topic.color}>{topic.title}</TopicTitle>
        <TopicDescription darkMode={darkMode}>{topic.description}</TopicDescription>
      </TopicHeader>

      {studies.length > 0 ? (
        <StudiesList>
          {studies.map((study) => (
            <StudyCard 
              key={study.id} 
              to={`/study/${topicId}/${study.id}`}
              darkMode={darkMode}
            >
              <StudyStatus completed={isCompleted(`${topicId}-${study.id}`)} />
              <StudyTitle darkMode={darkMode}>{study.title}</StudyTitle>
              <StudyDescription>{study.description}</StudyDescription>
              
              {study.keyVerses && study.keyVerses.length > 0 && (
                <KeyVerses>
                  <KeyVersesTitle darkMode={darkMode}>Versículos chave:</KeyVersesTitle>
                  <VersesList>
                    {study.keyVerses.map((verse, index) => (
                      <Verse key={index}>{verse}</Verse>
                    ))}
                  </VersesList>
                </KeyVerses>
              )}
            </StudyCard>
          ))}
        </StudiesList>
      ) : (
        <EmptyState darkMode={darkMode}>
          <h3>Nenhum estudo encontrado para este tópico.</h3>
          <p>Por favor, tente outro tópico ou volte mais tarde.</p>
        </EmptyState>
      )}
    </Container>
  );
};

export default TopicsList;
