import classNames from 'classnames';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthentication } from 'src/auth';
import { routes } from '../../routes';
import { Navigation } from './Navigation';
import { ReactComponent as Wave } from '../wave.svg';

export const MainLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (!isAuthenticated) navigate(routes.welcome);
  }, [isAuthenticated]);

  return (
    <div
      className={classNames([
        'grid h-screen grid-rows-[auto_1fr_auto]',
        'bg-gradient-to-t from-columbia-blue via-anti-flash-white to-cosmic-latte',
      ])}
    >
      <div className="h-10 -mb-5 text-theme">
        <Wave className="h-full w-full" />
      </div>
      <main className="px-4 pt-4 sm:w-[80%] md:w-[60%] sm:mx-auto max-w-4xl overflow-hidden">
        <Outlet />
      </main>
      <footer className="pb-7">
        <Navigation />
      </footer>
    </div>
  );
};
