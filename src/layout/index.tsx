import { Outlet } from 'react-router-dom';
import { Header } from 'src/shared/components';

export const MainLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <Header />
      <main className="p-4 max-w-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
