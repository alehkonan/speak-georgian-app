import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout/Layout';
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
    path: routes.root,
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { CategoriesScreen } = await import('./screens/Categories');
          return { Component: CategoriesScreen };
        },
      },
    ],
  },
  {
    path: '/category/:id',
    lazy: async () => {
      const { WordsScreen } = await import('./screens/WordsScreen');
      return { Component: WordsScreen };
    },
  },
]);
