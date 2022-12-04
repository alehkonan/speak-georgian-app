import { RouterProvider } from 'react-router-dom';
import { useSession } from 'src/api/auth';
import { browserRouter } from 'src/routes';

export const App = () => {
  const { isAuthenticated, isAuthenticating } = useSession();

  if (isAuthenticating) return null;

  return <RouterProvider router={browserRouter(isAuthenticated)} />;
};
