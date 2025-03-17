import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import TopicsList from './pages/TopicsList';
import Study from './pages/Study';
import Progress from './pages/Progress';

function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <Router>
          <GlobalStyles />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topics/:topicId" element={<TopicsList />} />
              <Route path="/study/:topicId/:studyId" element={<Study />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/topics" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
