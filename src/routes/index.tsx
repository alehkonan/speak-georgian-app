import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Categories } from './categories';
import { Category } from './category';
import { ForgotPasswordScreen } from './forgot-password';
import { LoginScreen } from './login';
import { SigninScreen } from './signin';
import { WelcomeScreen } from './welcome';

export const routes = {
  home: '/',
  welcome: '/welcome',
  login: '/login',
  signin: '/signin',
  forgotPassword: '/forgot-password',
  categories: '/categories',
} as const;

export const browserRouter = (isAuth: boolean) =>
  createBrowserRouter(
    isAuth
      ? [
          {
            path: routes.home,
            element: <MainLayout />,
            children: [
              {
                path: routes.categories,
                element: <Categories />,
              },
              {
                path: 'categories/:id',
                element: <Category />,
              },
            ],
          },
        ]
      : [
          {
            path: routes.home,
            element: <Navigate to={routes.welcome} />,
          },
          {
            path: routes.welcome,
            element: <WelcomeScreen />,
          },
          {
            path: routes.login,
            element: <LoginScreen />,
          },
          {
            path: routes.signin,
            element: <SigninScreen />,
          },
          {
            path: routes.forgotPassword,
            element: <ForgotPasswordScreen />,
          },
        ]
  );
