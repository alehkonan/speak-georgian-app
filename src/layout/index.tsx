import { Outlet } from 'react-router-dom';
import { useSignOut } from 'src/features/auth';
import { Button } from 'src/shared/components';

export const MainLayout = () => {
  const { onSignOut, isLoading } = useSignOut();

  return (
    <div className="grid h-screen grid-rows-[auto_1fr]">
      <header className="p-3">
        <Button onClick={onSignOut} disabled={isLoading}>
          Logout
        </Button>
      </header>
      <main className="p-4 max-w-xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
