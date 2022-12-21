import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { Button } from 'src/shared/components';
import { ArrowRightIcon, ChevronDownIcon, PlusIcon } from 'src/shared/icons';
import { Background } from './Background';
import { ReactComponent as TextBackground } from './hill.svg';

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end">
      <Background />
      <div className="relative h-dynamic grid items-center pb-10">
        <TextBackground className="absolute h-full w-full" />
        <div className="text-center z-0">
          <strong className="text-3xl">Welcome</strong>
          <p className="text-sm">to Speak Georgian App</p>
          <p className="text-sm">have fun and enjoy 🙌</p>
        </div>
        <div className="self-end grid justify-items-center gap-1 z-0">
          <p className="text-center uppercase text-sm">
            Log in or create a new account
          </p>
          <ChevronDownIcon />
          <div className="flex justify-center flex-wrap gap-3">
            <Button primary onClick={() => navigate(routes.login)}>
              <span>LOG IN</span>
              <ArrowRightIcon />
            </Button>
            <Button onClick={() => navigate(routes.signup)}>
              <span>SIGN UP</span>
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
