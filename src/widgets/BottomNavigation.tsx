import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { GameIcon, HeartIcon, HomeIcon, PersonIcon } from 'src/assets/icons';
import { routes } from 'src/routes';

const links = [
  {
    to: routes.home,
    title: 'Home',
    Icon: HomeIcon,
  },
  {
    to: routes.game,
    title: 'Game',
    Icon: GameIcon,
  },
  {
    to: routes.favorites,
    title: 'Favorites',
    Icon: HeartIcon,
  },
  {
    to: routes.profile,
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
