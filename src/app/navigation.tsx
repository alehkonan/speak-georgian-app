import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/assets/icons';
import { NavItem } from 'src/shared/components/BottomNavigation';

import { paths } from './paths';

export const navItems: NavItem[] = [
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
