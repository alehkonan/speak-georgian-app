import { RouterProvider } from 'react-router-dom';
import { useAuth } from 'src/api/auth';
import { browserRouter } from 'src/routes';

export const App = () => {
  const { isAuthenticated } = useAuth();

  return <RouterProvider router={browserRouter(isAuthenticated)} />;
};
