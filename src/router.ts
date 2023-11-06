import { createBrowserRouter } from 'react-router-dom';

import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.welcome,
    lazy: async () => {
      const { WelcomeScreen } = await import('./screens/WelcomeScreen');
      return { Component: WelcomeScreen };
    },
  },
  {
    path: routes.home,
    lazy: async () => {
      const { HomeScreen } = await import('./screens/HomeScreen');
      return { Component: HomeScreen };
    },
  },
  {
    path: routes.category,
    lazy: async () => {
      const { CategoriesScreen } = await import('./screens/CategoriesScreen');
      return { Component: CategoriesScreen };
    },
  },
  {
    path: '/category/:id',
    lazy: async () => {
      const { WordsScreen } = await import('./screens/WordsScreen');
      return { Component: WordsScreen };
    },
  },
]);
