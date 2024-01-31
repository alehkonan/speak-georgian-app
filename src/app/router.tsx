import { createBrowserRouter } from 'react-router-dom';
import { NotFoundScreen } from 'src/screens/NotFound';
import { RulesScreen } from 'src/screens/Rules';
import { Layout } from '../layout/Layout';
import { CategoriesScreen } from '../screens/Categories';
import { LoginScreen } from '../screens/Login';
import { WordsScreen } from '../screens/Words';
import {
  adminLoader,
  protectedRouteLoader,
  publicRouteLoader,
  rootLoader,
} from './loaders';
import { paths } from './paths';

export const router = createBrowserRouter([
  {
    path: paths.root,
    element: <Layout />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <CategoriesScreen />,
      },
      {
        path: paths.category,
        element: <WordsScreen />,
      },
      {
        path: paths.rules,
        element: <RulesScreen />,
      },
      {
        loader: publicRouteLoader,
        children: [
          {
            path: paths.login,
            element: <LoginScreen />,
          },
        ],
      },
      {
        loader: protectedRouteLoader,
        children: [
          {
            path: paths.game,
            lazy: async () => {
              const { GameScreen } = await import('../screens/Game');
              return { Component: GameScreen };
            },
          },
          {
            path: paths.favorites,
            lazy: async () => {
              const { FavoritesScreen } = await import('../screens/Favorites');
              return { Component: FavoritesScreen };
            },
          },
          {
            path: paths.profile,
            lazy: async () => {
              const { ProfileScreen } = await import('../screens/Profile');
              return { Component: ProfileScreen };
            },
          },
          {
            path: paths.newWord,
            loader: adminLoader,
            lazy: async () => {
              const { NewWordScreen } = await import('../screens/NewWord');
              return { Component: NewWordScreen };
            },
          },
        ],
      },
    ],
  },
  {
    path: paths.welcome,
    lazy: async () => {
      const { WelcomeScreen } = await import('../screens/Welcome');
      return { Component: WelcomeScreen };
    },
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
]);
