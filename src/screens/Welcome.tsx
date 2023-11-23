import { Button, Divider } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { loginWithGoogle } from 'src/api/auth/loginWithGoogle';
import { paths } from 'src/app/paths';
import { FieldWithMountains, Hill, Logo } from 'src/assets/images';

export const WelcomeScreen = () => {
  localStorage.setItem('visited', 'true');

  return (
    <div className="flex h-screen flex-col justify-end">
      <div className="fixed -z-10 grid h-full w-full place-items-center">
        <FieldWithMountains className="absolute h-full w-full" />
        <Logo className="z-0 w-2/5" />
      </div>
      <div className="relative flex flex-col items-center justify-end">
        <Hill className="absolute -z-10 h-[115%] w-full text-white" />
        <div className="flex w-4/5 max-w-xl flex-col gap-2 pb-10">
          <h1 className="text-center text-xl font-bold text-ripe-mango">
            Speak Georgian
          </h1>
          <Button
            as={Link}
            className="font-semibold"
            color="warning"
            to={paths.root}
            variant="flat"
          >
            Go to words
          </Button>
          <Divider />
          <Button
            className="font-semibold"
            color="warning"
            variant="flat"
            onClick={loginWithGoogle}
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};
