import { type RouteObject } from 'react-router-dom';

import { CategoriesScreen } from '../screens/Categories';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { GameScreen } from '../screens/GameScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SignupScreen } from '../screens/SignupScreen';
import { UpdatePasswordScreen } from '../screens/UpdatePasswordScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { WordsScreen } from '../screens/WordsScreen';
import { Layout } from './Layout';
import { checkIfVisited } from './loaders';
import { paths } from './paths';

const commonRoutes: RouteObject[] = [
  {
    index: true,
    element: <CategoriesScreen />,
  },
  {
    path: paths.category,
    element: <WordsScreen />,
  },
];

export const publicRoutes: RouteObject[] = [
  {
    id: 'Welcome',
    path: paths.welcome,
    element: <WelcomeScreen />,
  },
  {
    path: paths.root,
    element: <Layout />,
    loader: checkIfVisited,
    children: [
      ...commonRoutes,
      {
        path: paths.login,
        element: <LoginScreen />,
      },
      {
        path: paths.signup,
        element: <SignupScreen />,
      },
      {
        path: paths.forgotPassword,
        element: <ForgotPasswordScreen />,
      },
    ],
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: paths.root,
    element: <Layout withNavigation />,
    children: [
      ...commonRoutes,
      {
        path: paths.favorites,
        element: <FavoritesScreen />,
      },
      {
        path: paths.game,
        element: <GameScreen />,
      },
      {
        path: paths.profile,
        element: <ProfileScreen />,
      },
      {
        path: paths.updatePassword,
        element: <UpdatePasswordScreen />,
      },
    ],
  },
];
