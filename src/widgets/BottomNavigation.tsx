import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useNavigation } from 'src/app/useNavigation';

export const BottomNavigation = () => {
  const links = useNavigation();

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
                  'text-steel-blue',
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
