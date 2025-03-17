import React, { createContext, useState, useEffect, useContext } from 'react';

const UserProgressContext = createContext();

export const UserProgressProvider = ({ children }) => {
  const [studiedTopics, setStudiedTopics] = useState([]);
  const [totalTopics, setTotalTopics] = useState(0);
  
  useEffect(() => {
    const loadProgress = () => {
      const savedProgress = localStorage.getItem('studiedTopics');
      if (savedProgress) {
        setStudiedTopics(JSON.parse(savedProgress));
      }
    };
    
    loadProgress();
    
    const fetchTotalTopics = async () => {
      try {
        const response = await fetch('/data/topics.json');
        const data = await response.json();
        
        let count = 0;
        data.categories.forEach(category => {
          count += category.topics.length;
        });
        
        setTotalTopics(count);
      } catch (error) {
        console.error('Error fetching total topics:', error);
      }
    };
    
    fetchTotalTopics();
  }, []);
  
  const markAsStudied = (topicId) => {
    if (!studiedTopics.includes(topicId)) {
      const updatedStudiedTopics = [...studiedTopics, topicId];
      setStudiedTopics(updatedStudiedTopics);
      localStorage.setItem('studiedTopics', JSON.stringify(updatedStudiedTopics));
    }
  };
  
  const isTopicStudied = (topicId) => {
    return studiedTopics.includes(topicId);
  };
  
  const resetProgress = () => {
    setStudiedTopics([]);
    localStorage.removeItem('studiedTopics');
  };
  
  return (
    <UserProgressContext.Provider
      value={{
        studiedTopics,
        totalTopics,
        markAsStudied,
        isTopicStudied,
        resetProgress
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => useContext(UserProgressContext);

export default UserProgressContext;