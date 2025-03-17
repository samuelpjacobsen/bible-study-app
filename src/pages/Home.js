import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { topics } from '../data';
import { ThemeContext } from '../context/ThemeContext';
import { getDailyVerse } from '../data';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const WelcomeSection = styled.section`
  text-align: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: var(--primary);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
`;

const VerseBox = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 80%;
  border-radius: 8px;
  border-left: 4px solid var(--accent);
  background-color: ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-200)'};
  text-align: left;
`;

const VerseText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const VerseReference = styled.p`
  font-weight: bold;
  text-align: right;
  color: var(--accent);
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const TopicCard = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const TopicIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const TopicTitle = styled.h2`
  margin-bottom: 0.5rem;
  color: ${props => props.darkMode ? 'var(--gray-200)' : 'var(--gray-800)'};
`;

const TopicDescription = styled.p`
  margin-bottom: 0;
`;

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const dailyVerse = getDailyVerse();

  return (
    <HomeContainer>
      <WelcomeSection darkMode={darkMode}>
        <Title>Portal do Estudo Bíblico</Title>
        <Subtitle darkMode={darkMode}>
          Bem-vindo ao seu caminho de descoberta e aprofundamento nas Escrituras
        </Subtitle>
        <VerseBox darkMode={darkMode}>
          <VerseText>"{dailyVerse.text}"</VerseText>
          <VerseReference>{dailyVerse.reference}</VerseReference>
        </VerseBox>
      </WelcomeSection>

      <TopicsGrid>
        {topics.map((topic) => (
          <TopicCard 
            key={topic.id} 
            to={`/topics/${topic.id}`}
            darkMode={darkMode}
          >
            <TopicIcon>{topic.icon}</TopicIcon>
            <TopicTitle darkMode={darkMode}>{topic.title}</TopicTitle>
            <TopicDescription>{topic.description}</TopicDescription>
          </TopicCard>
        ))}
      </TopicsGrid>
    </HomeContainer>
  );
};

export default Home;
