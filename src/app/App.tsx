import { RouterProvider } from 'react-router-dom';
import { useGetUser } from 'src/cache/user/useGetUser';
import { Loader } from 'src/components/Loader';

import { router, userRouter } from './router';

export const App = () => {
  const { data: user, isLoading } = useGetUser();

  if (isLoading) return <Loader />;

  return <RouterProvider router={user?.id ? userRouter : router} />;
};
