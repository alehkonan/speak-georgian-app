import classNames from 'classnames';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Navigation } from '../widgets/Navigation';
import { Session } from '@supabase/supabase-js';
import { Wave } from 'src/assets/svg';

export const Layout = () => {
  const session = useLoaderData() as Session | null | undefined;
  // TODO fix that Layout is rendered before loader
  console.log('session in Layout: ', session);

  return (
    <div
      className={classNames([
        'grid h-screen grid-rows-[auto_1fr_auto]',
        'bg-gradient-to-t from-columbia-blue via-anti-flash-white to-cosmic-latte',
      ])}
    >
      <div className="h-10 -mb-5 text-theme">
        <Wave className="h-full w-full" />
      </div>
      <main className="p-4 sm:w-[80%] md:w-[60%] sm:mx-auto max-w-4xl overflow-hidden">
        <Outlet />
      </main>
      <footer className="pb-7">{!!session && <Navigation />}</footer>
    </div>
  );
};
