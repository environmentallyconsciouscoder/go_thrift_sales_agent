import React, { createContext, useState, ReactNode } from 'react';
import { RecommendationsResponse } from '../types/recommendationsTypes';

interface FashionContextProps {
  recommendations: RecommendationsResponse | null;
  setRecommendations: React.Dispatch<React.SetStateAction<RecommendationsResponse | null>>;
}

const FashionContext = createContext<FashionContextProps | undefined>(undefined);

export const FashionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recommendations, setRecommendations] = useState<RecommendationsResponse | null>(null);

  return (
    <FashionContext.Provider value={{ recommendations, setRecommendations }}>
      {children}
    </FashionContext.Provider>
  );
};

export const useFashionContext = () => {
  const context = React.useContext(FashionContext);
  if (!context) {
    throw new Error('useFashionContext must be used within a FashionProvider');
  }
  return context;
};