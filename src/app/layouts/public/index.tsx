import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useAuthentication } from 'src/auth';
import { ReactComponent as Wave } from '../wave.svg';

export const PublicLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();

  const isWelcomeScreen = pathname === routes.welcome;

  useEffect(() => {
    if (isAuthenticated) navigate(routes.home);
  }, [isAuthenticated]);

  return (
    <div>
      {!isWelcomeScreen && (
        <div className="h-10 -mb-5 text-theme">
          <Wave className="w-full h-full" />
        </div>
      )}
      <Outlet />
    </div>
  );
};
