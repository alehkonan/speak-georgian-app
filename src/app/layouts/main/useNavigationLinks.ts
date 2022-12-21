import { useMemo } from 'react';
import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/shared/icons';
import { routes } from '../../routes';

export const useNavigationLinks = () => {
  const links = useMemo(
    () => [
      {
        id: 1,
        to: routes.home,
        title: 'Home',
        Icon: HomeIcon,
      },
      {
        id: 2,
        to: routes.game,
        title: 'Game',
        Icon: GameIcon,
      },
      {
        id: 3,
        to: routes.favorites,
        title: 'Favorites',
        Icon: HeartIcon,
      },
      {
        id: 4,
        to: routes.profile,
        title: 'Profile',
        Icon: PersonIcon,
      },
    ],
    []
  );

  return links;
};
