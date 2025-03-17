import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: calc(100vh - 140px);
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
