import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { Wave } from 'src/assets/images';
import { BottomNavigation } from 'src/widgets/BottomNavigation';

export const Layout = () => {
  return (
    <div
      className={classNames([
        'pt-safe',
        'grid h-screen grid-rows-[auto_1fr_auto]',
        'bg-gradient-to-t from-columbia-blue via-anti-flash-white to-cosmic-latte',
      ])}
    >
      <div className="h-10 -mb-5 text-theme">
        <Wave className="h-full w-full" />
      </div>
      <main className="p-4 sm:w-[80%] md:w-[60%] sm:mx-auto max-w-4xl overflow-hidden">
        <Outlet />
      </main>
      <footer className="pb-safe">
        <BottomNavigation />
      </footer>
    </div>
  );
};
