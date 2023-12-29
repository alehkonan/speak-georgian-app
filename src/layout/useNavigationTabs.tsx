import { Gamepad2, Home, LogIn, Star, UserRound } from 'lucide-react';
import { useMemo, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { paths } from 'src/app/paths';
import { useUser } from 'src/auth/useUser';

type NavTab = {
  path: `/${string}`;
  title: string;
  icon: ReactNode;
};

export const useNavigationTabs = () => {
  const user = useUser();
  const { t } = useTranslation();

  const publicTabs = useMemo<NavTab[]>(
    () => [
      {
        path: paths.root,
        title: t('navigation.home'),
        icon: <Home />,
      },
      {
        path: paths.login,
        title: t('navigation.login'),
        icon: <LogIn />,
      },
    ],
    [t],
  );

  const privateTabs = useMemo<NavTab[]>(
    () => [
      {
        path: paths.root,
        title: t('navigation.home'),
        icon: <Home />,
      },
      {
        path: paths.game,
        title: t('navigation.game'),
        icon: <Gamepad2 />,
      },
      {
        path: paths.favorites,
        title: t('navigation.favorites'),
        icon: <Star />,
      },
      {
        path: paths.profile,
        title: t('navigation.profile'),
        icon: <UserRound />,
      },
    ],
    [t],
  );

  return user ? privateTabs : publicTabs;
};
