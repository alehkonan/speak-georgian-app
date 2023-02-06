import { useLogout } from 'src/features/logout';
import { Button } from 'src/shared/components';

export const Logout = () => {
  const { onLogout, isLoading } = useLogout();

  return (
    <div className="flex justify-center">
      <Button onClick={() => onLogout()} disabled={isLoading}>
        Logout
      </Button>
    </div>
  );
};
