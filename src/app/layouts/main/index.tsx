import classNames from 'classnames';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthentication } from 'src/auth';
import { routes } from '../../routes';
import { Navigation } from './Navigation';

export const MainLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (!isAuthenticated) navigate(routes.welcome);
  }, [isAuthenticated]);

  return (
    <div
      className={classNames([
        'grid h-screen grid-rows-[1fr_auto]',
        'bg-khachapuri bg-scroll bg-no-repeat bg-cover bg-center',
      ])}
    >
      <main className="px-4 pt-4 sm:w-[80%] md:w-[60%] sm:mx-auto max-w-4xl overflow-hidden touch-none">
        <Outlet />
      </main>
      <footer className="pb-5">
        <Navigation />
      </footer>
    </div>
  );
};
