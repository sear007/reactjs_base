import React, { ReactNode } from 'react';
import { Navigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const GuestLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useAuth();
  if (auth?.isAuthenticated) {
    return <Navigate to='/' />
  }
  return (
    <div>
      <h1>GuestLayout</h1>
      {children}
    </div>
  );
};

export default GuestLayout;