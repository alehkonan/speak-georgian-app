import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/assets/icons';

const links = [
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
];

export const BottomNavigation = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-5 min-[380px]:gap-10">
        {links.map(({ Icon, to, title }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                classNames([
                  'grid place-items-center',
                  'h-12 w-12 rounded-full',
                  ' text-steel-blue',
                  {
                    'border shadow-lg text-lapis-lazuli': isActive,
                  },
                ])
              }
            >
              <Icon title={title} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
