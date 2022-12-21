import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from 'src/app/layouts/main';
import { PublicLayout } from './layouts/public';
import { params } from './params';
import { routes } from './routes';
import { CategoryScreen } from './screens/category';
import { FavoritesScreen } from './screens/favorites';
import { ForgotPasswordScreen } from './screens/forgot-password';
import { GameScreen } from './screens/game';
import { HomeScreen } from './screens/home';
import { LoginScreen } from './screens/login';
import { ProfileScreen } from './screens/profile';
import { SignupScreen } from './screens/signup';
import { UpdatePasswordScreen } from './screens/update-password';
import { WelcomeScreen } from './screens/welcome';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <MainLayout />,
    children: [
      {
        path: routes.home,
        element: <HomeScreen />,
      },
      {
        path: routes.game,
        element: <GameScreen />,
      },
      {
        path: routes.favorites,
        element: <FavoritesScreen />,
      },
      {
        path: routes.profile,
        element: <ProfileScreen />,
      },
      {
        path: `${routes.category}/:${params.id}`,
        element: <CategoryScreen />,
      },
    ],
  },
  {
    path: routes.home,
    element: <PublicLayout />,
    children: [
      {
        path: routes.welcome,
        element: <WelcomeScreen />,
      },
      {
        path: routes.login,
        element: <LoginScreen />,
      },
      {
        path: routes.signup,
        element: <SignupScreen />,
      },
      {
        path: routes.forgotPassword,
        element: <ForgotPasswordScreen />,
      },
      {
        path: routes.updatePassword,
        element: <UpdatePasswordScreen />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not found</div>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
