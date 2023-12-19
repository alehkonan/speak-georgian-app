import { createBrowserRouter } from 'react-router-dom';
import { NotFoundScreen } from 'src/screens/NotFound';
import { CategoriesScreen } from '../screens/Categories';
import { FavoritesScreen } from '../screens/Favorites';
import { GameScreen } from '../screens/Game';
import { LoginScreen } from '../screens/Login';
import { ProfileScreen } from '../screens/Profile';
import { WelcomeScreen } from '../screens/Welcome';
import { WordsScreen } from '../screens/Words';
import { Layout } from './Layout';
import {
  layoutLoader,
  protectedRouteLoader,
  publicRouteLoader,
} from './loaders';
import { paths } from './paths';

export const router = createBrowserRouter([
  {
    id: 'Welcome',
    path: paths.welcome,
    element: <WelcomeScreen />,
  },
  {
    path: paths.root,
    element: <Layout />,
    loader: layoutLoader,
    children: [
      {
        path: paths.login,
        loader: publicRouteLoader,
        element: <LoginScreen />,
      },
      {
        index: true,
        element: <CategoriesScreen />,
      },
      {
        path: paths.category,
        element: <WordsScreen />,
      },

      {
        path: paths.game,
        loader: protectedRouteLoader,
        element: <GameScreen />,
      },
      {
        path: paths.favorites,
        loader: protectedRouteLoader,
        element: <FavoritesScreen />,
      },
      {
        path: paths.profile,
        loader: protectedRouteLoader,
        element: <ProfileScreen />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
]);
