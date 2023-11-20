import { type RouteObject } from 'react-router-dom';
import { NotFoundScreen } from 'src/screens/NotFound';

import { FavoritesScreen } from '../screens/Favorites';
import { GameScreen } from '../screens/Game';
import { HomeScreen } from '../screens/Home';
import { LoginScreen } from '../screens/Login';
import { ProfileScreen } from '../screens/Profile';
import { WelcomeScreen } from '../screens/Welcome';
import { WordsScreen } from '../screens/Words';
import { Layout } from './Layout';
import { checkIfVisited } from './loaders';
import { paths } from './paths';

const commonRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomeScreen />,
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
    ],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
];

export const privateRoutes: RouteObject[] = [
  {
    path: paths.root,
    element: <Layout isPrivate />,
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
    ],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
];
