import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { Categories } from './categories';
import { Category } from './category';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/:id',
        element: <Category />,
      },
    ],
  },
]);
