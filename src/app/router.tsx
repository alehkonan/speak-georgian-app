import { type RouteObject, createBrowserRouter } from 'react-router-dom';
import { NotFoundScreen } from 'src/screens/NotFound';
import { Layout } from '../layout/Layout';
import { LoginScreen } from '../screens/Login';
import { protectedRouteLoader, publicRouteLoader, rootLoader } from './loaders';
import { paths } from './paths';

const publicRoutes: RouteObject[] = [
  {
    path: paths.login,
    element: <LoginScreen />,
  },
];

const protectedRoutes: RouteObject[] = [
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
    lazy: async () => {
      const { NewWordScreen } = await import('../screens/NewWord');
      return { Component: NewWordScreen };
    },
  },
];

export const router = createBrowserRouter([
  {
    path: paths.welcome,
    lazy: async () => {
      const { WelcomeScreen } = await import('../screens/Welcome');
      return { Component: WelcomeScreen };
    },
  },
  {
    path: paths.root,
    element: <Layout />,
    loader: rootLoader,
    children: [
      {
        index: true,
        lazy: async () => {
          const { CategoriesScreen } = await import('../screens/Categories');
          return { Component: CategoriesScreen };
        },
      },
      {
        path: paths.category,
        lazy: async () => {
          const { WordsScreen } = await import('../screens/Words');
          return { Component: WordsScreen };
        },
      },
      {
        loader: publicRouteLoader,
        children: publicRoutes,
      },
      {
        loader: protectedRouteLoader,
        children: protectedRoutes,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
]);
