import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Categories } from './categories';
import { Category } from './category';
import { FavoritesScreen } from './favorites';
import { ForgotPasswordScreen } from './forgot-password';
import { GameScreen } from './game';
import { LoginScreen } from './login';
import { ProfileScreen } from './profile';
import { SignupScreen } from './signup';
import { UpdatePasswordScreen } from './update-password';
import { WelcomeScreen } from './welcome';

export const routes = {
  home: '/',
  welcome: '/welcome',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  updatePassword: '/update-password',
  categories: '/categories',
  game: '/game',
  favorites: '/favorites',
  profile: '/profile',
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
                path: routes.home,
                element: <Navigate to={routes.categories} />,
              },
              {
                path: routes.categories,
                element: <Categories />,
              },
              {
                path: 'categories/:id',
                element: <Category />,
              },
              {
                path: routes.game,
                element: <GameScreen />,
              },
              {
                path: routes.favorites,
                element: <FavoritesScreen />,
              },
              {
                path: routes.profile,
                element: <ProfileScreen />,
              },
            ],
          },
          {
            path: routes.updatePassword,
            element: <UpdatePasswordScreen />,
          },
          {
            path: '*',
            element: <Navigate to={routes.home} />,
          },
        ]
      : [
          {
            path: routes.home,
            element: <WelcomeScreen />,
          },
          {
            path: routes.login,
            element: <LoginScreen />,
          },
          {
            path: routes.signup,
            element: <SignupScreen />,
          },
          {
            path: routes.forgotPassword,
            element: <ForgotPasswordScreen />,
          },
          {
            path: '*',
            element: <Navigate to={routes.login} />,
          },
        ]
  );
