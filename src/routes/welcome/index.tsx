import { useNavigate } from 'react-router-dom';
import { Button } from 'src/shared/components';
import { ArrowRightIcon, ChevronDownIcon, PlusIcon } from 'src/shared/icons';
import { routes } from '..';
import { Background } from './Background';

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Background />
      <div className="h-screen flex flex-col justify-end">
        <div className="h-dynamic grid content-between pb-10">
          <div className="text-center">
            <strong className="text-3xl">Welcome</strong>
            <p className="text-sm">to Speak Georgian App</p>
            <p className="text-sm">have fun and enjoy 🙌</p>
          </div>
          <div className="grid justify-items-center gap-1">
            <p className="text-center uppercase text-sm">
              Login or create a new account
            </p>
            <ChevronDownIcon />
            <div className="flex gap-3">
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
    </>
  );
};
