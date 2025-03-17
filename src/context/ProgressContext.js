import React, { createContext, useState, useEffect } from 'react';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [completedStudies, setCompletedStudies] = useState([]);
  
  useEffect(() => {
    const savedProgress = localStorage.getItem('completedStudies');
    if (savedProgress) {
      setCompletedStudies(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('completedStudies', JSON.stringify(completedStudies));
  }, [completedStudies]);

  const markAsCompleted = (studyId) => {
    if (!completedStudies.includes(studyId)) {
      setCompletedStudies([...completedStudies, studyId]);
    }
  };

  const removeCompletion = (studyId) => {
    setCompletedStudies(completedStudies.filter(id => id !== studyId));
  };

  const isCompleted = (studyId) => {
    return completedStudies.includes(studyId);
  };

  const getCompletionPercentage = (totalStudies) => {
    if (totalStudies === 0) return 0;
    return Math.round((completedStudies.length / totalStudies) * 100);
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        completedStudies, 
        markAsCompleted, 
        removeCompletion, 
        isCompleted,
        getCompletionPercentage
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
