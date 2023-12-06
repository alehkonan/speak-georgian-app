import { Tab, Tabs } from '@nextui-org/react';
import { Gamepad2, Home, Star, UserRound } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import { paths } from './paths';

type NavTab = {
  path: `/${string}`;
  title: string;
  icon?: ReactNode;
};

type Props = {
  isPrivate?: boolean;
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

export const Navigation = ({ isPrivate }: Props) => {
  const tabs = isPrivate ? privateTabs : publicTabs;
  const [selectedKey, setSelectedKey] = useState(window.location.pathname);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabs.find(({ path }) => path === pathname)) {
      setSelectedKey(pathname);
    }
  }, [pathname, tabs]);

  return (
    <Tabs
      selectedKey={selectedKey}
      onSelectionChange={(key) => navigate(String(key))}
    >
      {tabs.map(({ path, title, icon }) => (
        <Tab
          key={path}
          title={
            <div className="flex items-center gap-2">
              {icon}
              <span className={twJoin(['sm:block', isPrivate && 'hidden'])}>
                {title}
              </span>
            </div>
          }
        />
      ))}
    </Tabs>
  );
};
