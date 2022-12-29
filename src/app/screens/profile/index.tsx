import { useLogout } from 'src/features/logout';
import { Button } from 'src/shared/components';

export const ProfileScreen = () => {
  const { onLogout, isLoading } = useLogout();

  return (
    <div>
      <p>Profile screen</p>
      <Button onClick={() => onLogout()} disabled={isLoading}>
        Logout
      </Button>
    </div>
  );
};
