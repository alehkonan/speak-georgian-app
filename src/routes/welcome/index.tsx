import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/shared/components';
import { ArrowRightIcon, ChevronDownIcon, PlusIcon } from 'src/shared/icons';
import { routes } from '..';

import logo from './logo.png';

export const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-rows-1 h-screen">
      <div
        className={classNames([
          'grid grid-rows-1 items-center',
          'rounded-b-xl',
          'bg-gradient-to-r from-yellow-200 via-amber-200 to-yellow-200',
        ])}
      >
        <img
          className="justify-self-center w-1/2 max-w-sm"
          src={logo}
          alt="logo"
        />

        <div className="mx-10 mb-10 p-5 grid gap-1 bg-amber-100 rounded-lg">
          <h1 className="text-center text-2xl grid">
            Welcome to <strong>Speak Georgian App</strong>
          </h1>
          <p className="text-center text-sm">have fun and enjoy 🙌</p>
        </div>
      </div>
      <div className="mt-3 mb-10 h-[100px] grid grid-rows-[auto_1fr_auto] justify-items-center">
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
  );
};
