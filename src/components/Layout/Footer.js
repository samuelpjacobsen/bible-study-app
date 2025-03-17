import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const FooterContainer = styled.footer`
  padding: 1.5rem 2rem;
  text-align: center;
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  border-top: 1px solid ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-300)'};
  transition: background-color 0.3s;
`;

const Copyright = styled.p`
  color: ${props => props.darkMode ? 'var(--gray-400)' : 'var(--gray-600)'};
  font-size: 0.9rem;
`;

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer darkMode={darkMode}>
      <Copyright darkMode={darkMode}>
        © {currentYear} Sistema de Estudo Bíblico - Desenvolvido para a glória de Deus
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
