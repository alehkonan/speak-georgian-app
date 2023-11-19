import { Spinner } from '@nextui-org/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useGetUser } from 'src/cache/user/useGetUser';

import { privateRoutes, publicRoutes } from './routes';

export const App = () => {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) return <Spinner />;

  return (
    <RouterProvider
      router={createBrowserRouter(user ? privateRoutes : publicRoutes)}
    />
  );
};
