import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <main className="p-4 max-w-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
