import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: block;
  background-color: white;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--text-color);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    text-decoration: none;
  }
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const CardDescription = styled.p`
  color: var(--accent-color);
  font-size: 0.9rem;
`;

const TopicCard = ({ id, title, description, icon, category }) => {
  const renderIcon = () => {
    // This is a simplified icon system - in a real app you might use a proper icon library
    switch (icon) {
      case 'book':
        return '📖';
      case 'person':
        return '👤';
      case 'light':
        return '💡';
      case 'fire':
        return '🔥';
      case 'hands':
        return '🙏';
      case 'heart':
        return '❤️';
      case 'crown':
        return '👑';
      case 'home':
        return '🏠';
      case 'scroll':
        return '📜';
      default:
        return '📝';
    }
  };

  return (
    <Card to={`/study/${id}`}>
      <CardIcon>{renderIcon()}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

export default TopicCard;