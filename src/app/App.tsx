import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useGetUser } from 'src/cache/user/useGetUser';
import { Loader } from 'src/shared/components/Loader';

import { privateRoutes, publicRoutes } from './routes';

export const App = () => {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) return <Loader />;

  return (
    <RouterProvider
      router={createBrowserRouter(user ? privateRoutes : publicRoutes)}
    />
  );
};
