import { Navigate, RouteObject } from 'react-router-dom';
import { MainLayout } from 'src/layout';
import { CategoryScreen } from './category';
import { categoryParams } from './category/params';
import { FavoritesScreen } from './favorites';
import { GameScreen } from './game';
import { HomeScreen } from './home';
import { ProfileScreen } from './profile';
import { routes } from './routes';
import { UpdatePasswordScreen } from './update-password';

export const protectedRoutes: RouteObject[] = [
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
        path: `${routes.category}/:${categoryParams.id}`,
        element: <CategoryScreen />,
      },
    ],
  },
  {
    path: routes.updatePassword,
    element: <UpdatePasswordScreen />,
  },
  {
    path: '*',
    element: <Navigate to={routes.home} replace />,
  },
];
