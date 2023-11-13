import { createBrowserRouter, redirect } from 'react-router-dom';

import { Layout } from '../layout/Layout';
import { paths } from './paths';
import * as routes from './routes';

export const router = createBrowserRouter([
  routes.welcome,
  {
    path: paths.root,
    element: <Layout />,
    loader: () => {
      const isVisited = localStorage.getItem('visited');
      if (!isVisited) return redirect(paths.welcome);
      return null;
    },
    children: [
      routes.login,
      routes.forgotPassword,
      routes.signup,
      routes.categories,
      routes.category,
    ],
  },
]);

export const userRouter = createBrowserRouter([
  {
    path: paths.root,
    element: <Layout />,
    children: [
      routes.categories,
      routes.category,
      routes.game,
      routes.favorites,
      routes.profile,
      routes.updatePassword,
    ],
  },
]);
