import { Tab, Tabs } from '@nextui-org/react';
import { Gamepad2, Home, Star, UserRound } from 'lucide-react';
import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import { useGetUser } from 'src/cache/user/useGetUser';
import { paths } from './paths';

type NavTab = {
  path: `/${string}`;
  title: string;
  icon?: ReactNode;
};

const publicTabs: NavTab[] = [
  {
    path: paths.root,
    title: 'Home',
  },
  {
    path: paths.login,
    title: 'Login',
  },
];

const privateTabs: NavTab[] = [
  {
    path: paths.root,
    title: 'Home',
    icon: <Home />,
  },
  {
    path: paths.game,
    title: 'Game',
    icon: <Gamepad2 />,
  },
  {
    path: paths.favorites,
    title: 'Favorites',
    icon: <Star />,
  },
  {
    path: paths.profile,
    title: 'Profile',
    icon: <UserRound />,
  },
];

export const Navigation = () => {
  const { data: user, isLoading } = useGetUser();
  const tabs = user ? privateTabs : publicTabs;
  const { pathname } = useLocation();

  if (isLoading) return null;

  return (
    <Tabs selectedKey={pathname}>
      {tabs.map(({ path, title, icon }) => (
        <Tab
          key={path}
          title={
            <div className="flex items-center gap-2">
              {icon}
              <span className={twJoin(['sm:block', user && 'hidden'])}>
                {title}
              </span>
            </div>
          }
          as={Link}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          to={path}
        />
      ))}
    </Tabs>
  );
};
