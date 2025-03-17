import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VerseContainer = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  margin-bottom: 2rem;
  text-align: center;
`;

const VerseText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const VerseReference = styled.p`
  font-weight: 600;
  color: var(--primary-color);
`;

const VerseOfDay = () => {
  const [verse, setVerse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await fetch('/data/verses.json');
        const verses = await response.json();
        
        // Get a random verse or based on the day of the year
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const index = dayOfYear % verses.length;
        
        setVerse(verses[index]);
      } catch (error) {
        console.error('Error fetching verse of the day:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  if (loading) {
    return <VerseContainer>Carregando versículo do dia...</VerseContainer>;
  }

  if (!verse) {
    return null;
  }

  return (
    <VerseContainer>
      <h2>Versículo do Dia</h2>
      <VerseText>"{verse.text}"</VerseText>
      <VerseReference>{verse.reference}</VerseReference>
    </VerseContainer>
  );
};

export default VerseOfDay;