import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import { getSession } from 'src/services/supabase';
import { Layout } from './layout';
import { params } from './params';
import { routes } from './routes';
import { CategoryScreen } from './screens/category';
import { FavoritesScreen } from './screens/favorites';
import { ForgotPasswordScreen } from './screens/forgot-password';
import { GameScreen } from './screens/game';
import { HomeScreen } from './screens/home';
import { LoginScreen } from './screens/login';
import { NotFoundScreen } from './screens/notFound';
import { ProfileScreen } from './screens/profile';
import { SignupScreen } from './screens/signup';
import { UpdatePasswordScreen } from './screens/update-password';
import { WelcomeScreen } from './screens/welcome';

export const ROOT_ID = 'root';

const router = createBrowserRouter([
  // public routes
  {
    id: ROOT_ID,
    path: routes.home,
    element: <Layout />,
    loader: async () => {
      const session = await getSession();
      // TODO fix that Layout is rendered before loader
      console.log('session in loader: ', session);
      return session;
    },
    children: [
      {
        path: routes.home,
        element: <HomeScreen />,
      },
      {
        path: `${routes.category}/:${params.id}`,
        element: <CategoryScreen />,
      },
    ],
  },
  {
    path: routes.welcome,
    element: <WelcomeScreen />,
    loader: async () => {
      const session = await getSession();
      return session && redirect(routes.home);
    },
  },
  {
    path: routes.home,
    element: <Layout />,
    loader: async () => {
      const session = await getSession();
      return session && redirect(routes.home);
    },
    children: [
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
  // protected routes
  {
    path: routes.home,
    element: <Layout />,
    loader: async () => {
      const session = await getSession();
      // TODO fix that Layout is rendered before loader
      console.log('session in loader: ', session);
      return session ? session : redirect(routes.login);
    },
    children: [
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
    ],
  },
  {
    path: '*',
    element: <NotFoundScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
