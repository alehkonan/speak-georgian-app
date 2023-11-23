import { Outlet } from 'react-router-dom';
import { Wave } from 'src/assets/images';

import { Navigation } from './Navigation';

type Props = {
  isPrivate?: boolean;
};

export const Layout = ({ isPrivate }: Props) => {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] overflow-hidden bg-page-gradient p-safe">
      <Wave className="pointer-events-none fixed z-50 h-10 w-full text-theme" />
      <Outlet />
      <footer className="flex justify-center p-2">
        <Navigation isPrivate={isPrivate} />
      </footer>
    </div>
  );
};
