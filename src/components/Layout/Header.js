import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.darkMode ? 'var(--gray-800)' : 'var(--gray-100)'};
  transition: background-color 0.3s;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0.5rem 0;
  font-weight: 500;
  color: ${props => props.darkMode ? 'var(--gray-300)' : 'var(--gray-700)'};
  transition: color 0.3s;

  &:hover {
    color: var(--primary);
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${props => props.darkMode ? 'var(--gray-700)' : 'var(--gray-200)'};
  color: ${props => props.darkMode ? 'var(--gray-200)' : 'var(--gray-700)'};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${props => props.darkMode ? 'var(--gray-600)' : 'var(--gray-300)'};
  }
`;

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <HeaderContainer darkMode={darkMode}>
      <Logo>Estudo Bíblico</Logo>
      <Nav>
        <NavLink to="/" darkMode={darkMode}>Início</NavLink>
        <NavLink to="/topics" darkMode={darkMode}>Temas</NavLink>
        <NavLink to="/progress" darkMode={darkMode}>Progresso</NavLink>
      </Nav>
      <ThemeToggle onClick={toggleTheme} darkMode={darkMode}>
        {darkMode ? '☀️' : '🌙'}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
