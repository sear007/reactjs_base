import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthLayout from './components/AuthLayout';
import NotFound from './screens/404';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: AuthLayout,
      children: [
        { index: true, Component: Home },
      ],
    },
    {
      path: '/login',
      Component: Login,
    },
    {
      path: '/register',
      Component: Login,
    },
    {
      path: '*',
      Component: NotFound,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={'Loading'}
      />
    </AuthProvider>
  );
}

export default App;
