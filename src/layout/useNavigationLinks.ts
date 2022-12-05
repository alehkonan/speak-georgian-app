import { useMemo } from 'react';
import { routes } from 'src/routes';
import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/shared/icons';

export const useNavigationLinks = () => {
  const links = useMemo(
    () => [
      {
        id: 1,
        to: routes.categories,
        title: 'Categories',
        Icon: HomeIcon,
      },
      {
        id: 1,
        to: routes.game,
        title: 'Game',
        Icon: GameIcon,
      },
      {
        id: 1,
        to: routes.favorites,
        title: 'Favorites',
        Icon: HeartIcon,
      },
      {
        id: 1,
        to: routes.profile,
        title: 'Profile',
        Icon: PersonIcon,
      },
    ],
    []
  );

  return links;
};
