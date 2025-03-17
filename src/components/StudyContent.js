import React from 'react';
import styled from 'styled-components';

const StudyContainer = styled.div`
  background-color: white;
  border-radius: var(--radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
`;

const StudyTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;

const StudyText = styled.div`
  margin-bottom: 2rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1rem;
  }
`;

const VersesSection = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  background-color: var(--secondary-color);
  padding: 1.5rem;
  border-radius: var(--radius-md);
`;

const VerseItem = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const VerseReference = styled.h4`
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const ResourcesSection = styled.div`
  margin-top: 2rem;
`;

const ResourcesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResourceItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  a {
    margin-left: 0.5rem;
  }
`;

const ResourceIcon = styled.span`
  margin-right: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1.5rem;
  
  &:hover {
    background-color: #2c4c7c;
  }
  
  &:disabled {
    background-color: var(--accent-color);
    cursor: not-allowed;
  }
`;

const StudyContent = ({ study, onMarkAsStudied, isStudied }) => {
  if (!study) {
    return <StudyContainer>Carregando estudo...</StudyContainer>;
  }

  const renderContent = () => {
    return study.content.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'audio':
        return '🎧';
      case 'pdf':
        return '📄';
      default:
        return '🔗';
    }
  };

  return (
    <StudyContainer>
      <StudyTitle>{study.title}</StudyTitle>
      
      <StudyText>
        {renderContent()}
      </StudyText>
      
      {study.verses && study.verses.length > 0 && (
        <VersesSection>
          <h3>Versículos Relacionados</h3>
          {study.verses.map((verse, index) => (
            <VerseItem key={index}>
              <VerseReference>{verse.reference}</VerseReference>
              <p>"{verse.text}"</p>
            </VerseItem>
          ))}
        </VersesSection>
      )}
      
      {study.additionalResources && study.additionalResources.length > 0 && (
        <ResourcesSection>
          <h3>Recursos Adicionais</h3>
          <ResourcesList>
            {study.additionalResources.map((resource, index) => (
              <ResourceItem key={index}>
                <ResourceIcon>{getResourceIcon(resource.type)}</ResourceIcon>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
              </ResourceItem>
            ))}
          </ResourcesList>
        </ResourcesSection>
      )}
      
      <ActionButton 
        onClick={onMarkAsStudied} 
        disabled={isStudied}
      >
        {isStudied ? 'Estudo Concluído' : 'Marcar como Estudado'}
      </ActionButton>
    </StudyContainer>
  );
};

export default StudyContent;