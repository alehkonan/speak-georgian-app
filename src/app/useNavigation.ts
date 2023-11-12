import { useMemo } from 'react';
import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/assets/icons';
import { useGetUser } from 'src/cache/user/useGetUser';

import { paths } from './paths';

export const useNavigation = () => {
  const { data: user } = useGetUser();

  const links = useMemo(
    () => [
      {
        to: paths.root,
        title: 'Home',
        Icon: HomeIcon,
      },
    ],
    [],
  );

  const userLinks = useMemo(
    () => [
      {
        to: paths.root,
        title: 'Home',
        Icon: HomeIcon,
      },
      {
        to: paths.game,
        title: 'Game',
        Icon: GameIcon,
      },
      {
        to: paths.favorites,
        title: 'Favorites',
        Icon: HeartIcon,
      },
      {
        to: paths.profile,
        title: 'Profile',
        Icon: PersonIcon,
      },
    ],
    [],
  );

  return user?.id ? userLinks : links;
};
