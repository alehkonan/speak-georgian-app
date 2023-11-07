import { Outlet } from 'react-router-dom';
import { Wave } from 'src/assets/images';
import { BottomNavigation } from 'src/widgets/BottomNavigation';

export const Layout = () => {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] overflow-hidden bg-page-gradient p-safe">
      <Wave className="pointer-events-none fixed h-10 w-full text-theme" />
      <main className="overflow-auto">
        <Outlet />
      </main>
      <footer className="p-2">
        <BottomNavigation />
      </footer>
    </div>
  );
};
