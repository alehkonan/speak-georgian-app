import { SignupScreen } from './signup';
import { LoginScreen } from './login';
import { WelcomeScreen } from './welcome';
import { Navigate, RouteObject } from 'react-router-dom';
import { routes } from './routes';
import { ForgotPasswordScreen } from './forgot-password';

export const publicRoutes: RouteObject[] = [
  {
    path: routes.home,
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
    path: '*',
    element: <Navigate to={routes.welcome} replace />,
  },
];
