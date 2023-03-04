import { routes } from 'src/app/routes';
import { FieldWithMountains, Hill, Logo } from 'src/assets/svg';
import { Button, Divider } from 'src/shared/components';

export const WelcomeScreen = () => {
  return (
    <div className="h-screen flex flex-col justify-end">
      <div className="fixed w-full h-full -z-10 grid place-items-center">
        <FieldWithMountains className="absolute w-full h-full" />
        <Logo className="z-0 w-2/5" />
      </div>
      <div className="relative flex flex-col justify-end items-center">
        <Hill className="absolute h-[115%] w-full -z-10 text-white" />
        <div className="w-4/5 max-w-xl flex flex-col gap-2 pb-10">
          <p className="flex flex-wrap justify-center gap-2 text-xl">
            <span>Welcome to</span>
            <strong>Speak Georgian App</strong>
          </p>
          <Button primary to={routes.home}>
            Try it now
          </Button>
          <Divider text="or use your account" />
          <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-1">
            <Button to={routes.login}>Log in</Button>
            <Button to={routes.signup}>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
