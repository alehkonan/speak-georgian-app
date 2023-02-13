import { useLogout } from 'src/features/logout';
import { Button, ErrorMessage } from 'src/shared/components';

export const Logout = () => {
  const { onLogout, isLoading, error } = useLogout();

  return (
    <div className="flex justify-center">
      <Button onClick={() => onLogout()} disabled={isLoading}>
        Logout
      </Button>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
};
