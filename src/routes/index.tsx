import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Categories } from './categories';
import { Category } from './category';
import { LoginScreen } from './login';
import { SigninScreen } from './signin';
import { WelcomeScreen } from './welcome';

const isLoggedIn = false;

export const router = createBrowserRouter([
  {
    path: 'welcome',
    element: <WelcomeScreen />,
  },
  {
    path: 'login',
    element: <LoginScreen />,
  },
  {
    path: 'signin',
    element: <SigninScreen />,
  },
  {
    path: '/',
    element: isLoggedIn ? <MainLayout /> : <Navigate replace to="welcome" />,
    children: [
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/:id',
        element: <Category />,
      },
    ],
  },
]);
