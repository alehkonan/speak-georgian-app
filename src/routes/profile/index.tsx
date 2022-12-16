import { useSignOut } from 'src/features/auth';
import { Button } from 'src/shared/components';

export const ProfileScreen = () => {
  const { onSignOut, isLoading } = useSignOut();

  return (
    <div>
      <p>Profile screen</p>
      <Button onClick={onSignOut} disabled={isLoading}>
        Logout
      </Button>
    </div>
  );
};
