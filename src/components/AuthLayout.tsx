import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthLayout: React.FC = () => {
  const auth = useAuth();
  if (!auth?.isAuthenticated) {
    return <Navigate to='/login' />
  }
  return (
    <div>
      <h1>AuthLayout</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;