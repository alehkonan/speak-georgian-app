import { Button } from '@nextui-org/react';
import { loginWithGoogle } from 'src/api/auth/loginWithGoogle';
import { Screen } from 'src/shared/components/Screen';

export const LoginScreen = () => {
  return (
    <Screen>
      <Button
        className="justify-self-center"
        color="primary"
        onClick={loginWithGoogle}
      >
        Login with Google
      </Button>
    </Screen>
  );
};
