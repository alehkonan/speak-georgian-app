import { NextUIProvider } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';
import { Wave } from 'src/assets/images';
import { BottomNavigation } from 'src/shared/components/BottomNavigation';

import { navItems } from './navigation';

type Props = {
  withNavigation?: boolean;
};

export const Layout = ({ withNavigation }: Props) => {
  return (
    <NextUIProvider>
      <div className="grid h-screen grid-rows-[1fr_auto] overflow-hidden bg-page-gradient p-safe">
        <Wave className="pointer-events-none fixed h-10 w-full text-theme" />
        <main className="overflow-auto">
          <Outlet />
        </main>
        {withNavigation && (
          <footer className="p-2">
            <BottomNavigation navItems={navItems} />
          </footer>
        )}
      </div>
    </NextUIProvider>
  );
};
