import React from 'react';
import { useAuth } from '../context/AuthContext';
import GuestLayout from '../components/GuestLayout';

const Login: React.FC = () => {
  const auth = useAuth();
  return (
    <GuestLayout>
      <div>
        <h1>Login</h1>
        <button onClick={auth?.login}>Login</button>
      </div>
    </GuestLayout>
  );
};

export default Login;