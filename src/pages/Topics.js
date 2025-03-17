import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import TopicCard from '../components/TopicCard';

const TopicsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BreadcrumbNav = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: var(--accent-color);
`;

const TopicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const CategoryCard = styled(Link)`
  background-color: white;
  border-radius: var(--radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    text-decoration: none;
  }
`;

const CategoryIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CategoryName = styled.h3`
  color: var(--primary-color);
`;

const Topics = () => {
  const { categoryId } = useParams();
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/topics.json');
        const data = await response.json();
        setCategories(data.categories);
        
        if (categoryId) {
          const category = data.categories.find(cat => cat.id === categoryId);
          setCurrentCategory(category || null);
        } else {
          setCurrentCategory(null);
        }
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTopics();
  }, [categoryId]);
  
  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'books':
        return '📚';
      case 'characters':
        return '👥';
      case 'doctrines':
        return '📜';
      case 'prophecies':
        return '🔮';
      default:
        return '📝';
    }
  };
  
  if (loading) {
    return (
      <TopicsContainer>
        <h2>Carregando...</h2>
      </TopicsContainer>
    );
  }
  
  if (!categoryId) {
    return (
      <TopicsContainer>
        <h1>Temas Bíblicos</h1>
        <p>Selecione uma categoria para explorar os temas de estudo disponíveis.</p>
        
        <CategoryList>
          {categories.map(category => (
            <CategoryCard key={category.id} to={`/topics/${category.id}`}>
              <CategoryIcon>{getCategoryIcon(category.id)}</CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <p>{category.topics.length} temas</p>
            </CategoryCard>
          ))}
        </CategoryList>
      </TopicsContainer>
    );
  }
  
  if (!currentCategory) {
    return (
      <TopicsContainer>
        <h2>Categoria não encontrada</h2>
        <Link to="/topics">Voltar para categorias</Link>
      </TopicsContainer>
    );
  }
  
  return (
    <TopicsContainer>
      <BreadcrumbNav>
        <Link to="/topics">Categorias</Link>
        <Separator>&gt;</Separator>
        <span>{currentCategory.name}</span>
      </BreadcrumbNav>
      
      <h1>{currentCategory.name}</h1>
      
      <TopicsGrid>
        {currentCategory.topics.map(topic => (
          <TopicCard
            key={topic.id}
            id={topic.id}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
            category={categoryId}
          />
        ))}
      </TopicsGrid>
    </TopicsContainer>
  );
};

export default Topics;