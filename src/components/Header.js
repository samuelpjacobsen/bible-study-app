import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  position: relative;
  
  &.active {
    color: var(--primary-color);
    font-weight: 600;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`;

const Header = () => {
  const location = useLocation();
  
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">Portal do Estudo Bíblico</Logo>
        <Nav>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Início
          </NavLink>
          <NavLink to="/topics" className={location.pathname.includes('/topics') ? 'active' : ''}>
            Temas
          </NavLink>
          <NavLink to="/progress" className={location.pathname === '/progress' ? 'active' : ''}>
            Meu Progresso
          </NavLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;