import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { useAuthentication } from 'src/auth';

export const PublicLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (isAuthenticated) navigate(routes.home);
  }, [isAuthenticated]);

  return (
    <div className="touch-none">
      <Outlet />
    </div>
  );
};
