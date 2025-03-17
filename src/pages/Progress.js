import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { ProgressContext } from '../context/ProgressContext';
import { getTotalStudiesCount, getStudyByIds } from '../data';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: var(--primary);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
`;

const ProgressSection = styled.section`
  margin-bottom: 3rem;
`;

const ProgressBar = styled.div`
  position: relative;
  height: 2rem;
  background-color: ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-200)'};
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: var(--accent);
  border-radius: 1rem;
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.percentage > 50 ? 'white' : (props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)')};
`;

const ProgressStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin: 0 0.5rem;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

const StatLabel = styled.div`
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
`;

const CompletedStudiesList = styled.div`
  margin-top: 2rem;
`;

const CompletedStudiesTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--primary);
`;

const StudiesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const StudyCard = styled(Link)`
  padding: 1.5rem;
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

const StudyTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${props => props.darkMode ? 'var(--gray-200)' : 'var(--gray-800)'};
`;

const TopicBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  background-color: ${props => props.color || 'var(--primary)'};
  color: white;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Progress = () => {
  const { darkMode } = useContext(ThemeContext);
  const { completedStudies, getCompletionPercentage } = useContext(ProgressContext);
  const [completedStudyObjects, setCompletedStudyObjects] = useState([]);
  const totalStudies = getTotalStudiesCount();
  const percentage = getCompletionPercentage(totalStudies);

  useEffect(() => {
    // Obter os objetos de estudo completos a partir dos IDs
    const studyObjects = completedStudies.map(id => {
      const [topicId, studyId] = id.split('-');
      const study = getStudyByIds(topicId, studyId);
      return study ? { ...study, topicId } : null;
    }).filter(Boolean);

    setCompletedStudyObjects(studyObjects);
  }, [completedStudies]);

  return (
    <Container>
      <Header>
        <Title>Meu Progresso</Title>
        <Subtitle darkMode={darkMode}>
          Acompanhe seus estudos bíblicos e veja seu crescimento
        </Subtitle>
      </Header>

      <ProgressSection>
        <ProgressBar darkMode={darkMode}>
          <ProgressFill percentage={percentage} />
          <ProgressText percentage={percentage} darkMode={darkMode}>
            {percentage}% Completo
          </ProgressText>
        </ProgressBar>

        <ProgressStats>
          <StatItem darkMode={darkMode}>
            <StatNumber>{completedStudies.length}</StatNumber>
            <StatLabel darkMode={darkMode}>Estudos Completados</StatLabel>
          </StatItem>
          <StatItem darkMode={darkMode}>
            <StatNumber>{totalStudies}</StatNumber>
            <StatLabel darkMode={darkMode}>Estudos Totais</StatLabel>
          </StatItem>
          <StatItem darkMode={darkMode}>
            <StatNumber>{totalStudies - completedStudies.length}</StatNumber>
            <StatLabel darkMode={darkMode}>Estudos Restantes</StatLabel>
          </StatItem>
        </ProgressStats>
      </ProgressSection>

      <CompletedStudiesList>
        <CompletedStudiesTitle>Estudos Completados</CompletedStudiesTitle>
        
        {completedStudyObjects.length > 0 ? (
          <StudiesList>
            {completedStudyObjects.map((study) => (
              <StudyCard 
                key={`${study.topicId}-${study.id}`} 
                to={`/study/${study.topicId}/${study.id}`}
                darkMode={darkMode}
              >
                <TopicBadge>{study.topicId}</TopicBadge>
                <StudyTitle darkMode={darkMode}>{study.title}</StudyTitle>
                <p>{study.description}</p>
              </StudyCard>
            ))}
          </StudiesList>
        ) : (
          <EmptyState darkMode={darkMode}>
            <h3>Nenhum estudo completado ainda</h3>
            <p>Comece a explorar os tópicos e marque estudos como concluídos para acompanhar seu progresso.</p>
          </EmptyState>
        )}
      </CompletedStudiesList>
    </Container>
  );
};

export default Progress;
