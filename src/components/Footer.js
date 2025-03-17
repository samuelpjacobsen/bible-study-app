import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: white;
  padding: 1.5rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  color: var(--accent-color);
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <p>Portal do Estudo Bíblico &copy; {currentYear}</p>
        <p>"Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho." - Salmos 119:105</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;