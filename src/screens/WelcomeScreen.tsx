import { paths } from 'src/app/paths';
import { FieldWithMountains, Hill, Logo } from 'src/assets/images';
import { Button } from 'src/components/Button';
import { Divider } from 'src/components/Divider';

export const WelcomeScreen = () => {
  return (
    <div className="flex h-screen flex-col justify-end">
      <div className="fixed -z-10 grid h-full w-full place-items-center">
        <FieldWithMountains className="absolute h-full w-full" />
        <Logo className="z-0 w-2/5" />
      </div>
      <div className="relative flex flex-col items-center justify-end">
        <Hill className="absolute -z-10 h-[115%] w-full text-white" />
        <div className="flex w-4/5 max-w-xl flex-col gap-2 pb-10">
          <p className="flex flex-wrap justify-center gap-2 text-xl">
            <span>Welcome to</span>
            <strong>Speak Georgian App</strong>
          </p>
          <Button primary to={paths.root}>
            Try it now
          </Button>
          <Divider text="or use your account" />
          <div className="grid grid-cols-1 gap-1 min-[350px]:grid-cols-2">
            <Button to={paths.login}>Log in</Button>
            <Button to={paths.signup}>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
