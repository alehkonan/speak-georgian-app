import { Tab, Tabs } from '@nextui-org/react';
import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/assets/icons';

import { paths } from './paths';
import { twJoin } from 'tailwind-merge';

type NavTab = {
  path: `/${string}`;
  title: string;
  icon?: ReactNode;
};

export const publicTabs: NavTab[] = [
  {
    path: paths.root,
    title: 'Home',
  },
  {
    path: paths.login,
    title: 'Login',
  },
];

export const privateTabs: NavTab[] = [
  {
    path: paths.root,
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: paths.game,
    title: 'Game',
    icon: <GameIcon />,
  },
  {
    path: paths.favorites,
    title: 'Favorites',
    icon: <HeartIcon />,
  },
  {
    path: paths.profile,
    title: 'Profile',
    icon: <PersonIcon />,
  },
];

type Props = {
  isPrivate?: boolean;
};

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
