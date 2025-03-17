import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  background-color: var(--secondary-color);
  border-radius: 100px;
  height: 16px;
  width: 100%;
  margin: 1.5rem 0;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  background-color: var(--success-color);
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width 0.5s ease;
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--accent-color);
`;

const ProgressBar = ({ completed, total }) => {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return (
    <div>
      <ProgressContainer>
        <ProgressFill percentage={percentage} />
      </ProgressContainer>
      <ProgressText>
        <span>Progresso: {completed} de {total} estudos</span>
        <span>{percentage}%</span>
      </ProgressText>
    </div>
  );
};

export default ProgressBar;