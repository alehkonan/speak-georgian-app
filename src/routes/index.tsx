import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { CategoryScreen } from './category';
import { categoryParams } from './category/params';
import { FavoritesScreen } from './favorites';
import { ForgotPasswordScreen } from './forgot-password';
import { GameScreen } from './game';
import { HomeScreen } from './home';
import { LoginScreen } from './login';
import { ProfileScreen } from './profile';
import { SignupScreen } from './signup';
import { UpdatePasswordScreen } from './update-password';
import { WelcomeScreen } from './welcome';

export const routes = {
  welcome: '/welcome',
  login: '/login',
  signup: '/signup',
  forgotPassword: '/forgot-password',
  updatePassword: '/update-password',
  home: '/',
  category: '/category',
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
                element: <HomeScreen />,
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
              {
                path: `${routes.category}/:${categoryParams.id}`,
                element: <CategoryScreen />,
              },
            ],
          },
          {
            path: routes.updatePassword,
            element: <UpdatePasswordScreen />,
          },
          {
            path: '*',
            element: <Navigate to={routes.home} replace />,
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
            element: <Navigate to={routes.login} replace />,
          },
        ]
  );
