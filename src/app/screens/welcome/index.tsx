import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { FieldWithMountains, Hill, Logo } from 'src/assets/svg';
import { Button, Divider } from 'src/shared/components';

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end">
      <div className="fixed w-full h-full -z-10 grid place-items-center">
        <FieldWithMountains className="absolute w-full h-full" />
        <Logo className="z-0 w-2/5" />
      </div>
      <div className="relative flex flex-col justify-end items-center">
        <Hill className="absolute h-[115%] w-full -z-10 text-white" />
        <div className="w-4/5 max-w-xl flex flex-col gap-2 pb-10">
          <div className="text-center">
            <p className="text-3xl font-bold">Welcome!</p>
            <p>
              to <strong>Speak Georgian App</strong>
            </p>
          </div>
          <Button primary onClick={() => navigate(routes.home)}>
            See words
          </Button>
          <Divider text="or use your account" />
          <div className="grid grid-cols-1 min-[350px]:grid-cols-2 gap-1">
            <Button onClick={() => navigate(routes.login)}>Log in</Button>
            <Button onClick={() => navigate(routes.signup)}>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
