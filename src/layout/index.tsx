import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const MainLayout = () => {
  return (
    <div
      className={classNames([
        'grid h-screen grid-rows-[1fr_auto] pt-10',
        'bg-khachapuri bg-scroll bg-no-repeat bg-cover bg-center',
      ])}
    >
      <main className="p-4 max-w-xl mx-auto">
        <Outlet />
      </main>
      <footer className="pb-5">
        <Navigation />
      </footer>
    </div>
  );
};
