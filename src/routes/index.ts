import { createBrowserRouter } from 'react-router-dom';
import { protectedRoutes } from './protectedRoutes';
import { publicRoutes } from './publicRoutes';

export { routes } from './routes';

export const browserRouter = (isAuth: boolean) =>
  createBrowserRouter(isAuth ? protectedRoutes : publicRoutes);
