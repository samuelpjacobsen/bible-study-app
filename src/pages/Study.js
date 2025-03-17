import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { ThemeContext } from '../context/ThemeContext';
import { ProgressContext } from '../context/ProgressContext';
import { getStudyByIds, getTopicById } from '../data';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
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

const StudyHeader = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-300)'};
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: var(--primary);
`;

const TopicBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 16px;
  background-color: ${props => props.color || 'var(--primary)'};
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
`;

const StudyContent = styled.div`
  margin-bottom: 3rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.darkMode ? 'var(--gray-200)' : 'var(--gray-800)'};
  
  h2, h3, h4 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--primary);
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  strong {
    color: ${props => props.darkMode ? 'var(--gray-100)' : 'var(--gray-900)'};
  }
`;

const KeyVersesSection = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
`;

const KeyVersesTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--primary);
`;

const VersesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Verse = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-200)'};
`;

const VideoLinks = styled.div`
  margin-bottom: 2rem;
`;

const VideoLinksTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--primary);
`;

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ResourceLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-200)'};
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
  transition: background-color 0.3s;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.darkMode ? 'var(--gray-600)' : 'var(--gray-300)'};
  }
`;

const ActionButton = styled.button`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  background-color: ${props => props.completed ? 'var(--accent)' : 'var(--primary)'};
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.completed ? '#b38535' : '#3a5a8f'};
  }
`;

const Study = () => {
  const { topicId, studyId } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const { isCompleted, markAsCompleted, removeCompletion } = useContext(ProgressContext);
  const [study, setStudy] = useState(null);
  const [topic, setTopic] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const currentStudy = getStudyByIds(topicId, studyId);
    const currentTopic = getTopicById(topicId);
    
    if (!currentStudy || !currentTopic) {
      navigate(`/topics/${topicId}`);
      return;
    }

    setStudy(currentStudy);
    setTopic(currentTopic);
    setCompleted(isCompleted(`${topicId}-${studyId}`));
  }, [topicId, studyId, navigate, isCompleted]);

  const handleToggleCompletion = () => {
    const studyKey = `${topicId}-${studyId}`;
    if (completed) {
      removeCompletion(studyKey);
    } else {
      markAsCompleted(studyKey);
    }
    setCompleted(!completed);
  };

  if (!study || !topic) {
    return null;
  }

  return (
    <Container>
      <BackButton onClick={() => navigate(`/topics/${topicId}`)} darkMode={darkMode}>
        ← Voltar para {topic.title}
      </BackButton>

      <StudyHeader darkMode={darkMode}>
        <TopicBadge color={topic.color}>{topic.title}</TopicBadge>
        <Title>{study.title}</Title>
        <Description darkMode={darkMode}>{study.description}</Description>
      </StudyHeader>

      <StudyContent darkMode={darkMode}>
        <ReactMarkdown>{study.content}</ReactMarkdown>
      </StudyContent>

      {study.keyVerses && study.keyVerses.length > 0 && (
        <KeyVersesSection darkMode={darkMode}>
          <KeyVersesTitle>Versículos-chave</KeyVersesTitle>
          <VersesList>
            {study.keyVerses.map((verse, index) => (
              <Verse key={index} darkMode={darkMode}>{verse}</Verse>
            ))}
          </VersesList>
        </KeyVersesSection>
      )}

      {study.videoLinks && study.videoLinks.length > 0 && (
        <VideoLinks>
          <VideoLinksTitle>Recursos adicionais</VideoLinksTitle>
          <LinksList>
            {study.videoLinks.map((link, index) => (
              <LinkItem key={index}>
                <ResourceLink 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  darkMode={darkMode}
                >
                  Video {index + 1}
                </ResourceLink>
              </LinkItem>
            ))}
          </LinksList>
        </VideoLinks>
      )}

      <ActionButton 
        onClick={handleToggleCompletion}
        completed={completed}
      >
        {completed ? 'Marcar como não estudado' : 'Marcar como estudado'}
      </ActionButton>
    </Container>
  );
};

export default Study;
