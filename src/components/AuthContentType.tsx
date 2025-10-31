import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';

interface Props {
  children: React.ReactNode;
}

export const AuthContentType: React.FC<Props> = ({ children }) => {
  const { currentUser, isLoading } = useAuth();
  
  if (isLoading) return <Loading />;
  
  if (!currentUser) {
    return null; // Or redirect to login page
  }
  
  return <>{children}</>;
};

export default AuthContentType;