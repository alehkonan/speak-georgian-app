import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useNavigation } from './useNavigation';

export const Navigation = () => {
  const links = useNavigation();

  return (
    <nav>
      <ul className="flex justify-center gap-5 min-[380px]:gap-10">
        {links.map(({ id, Icon, to, title }) => (
          <li key={id}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                classNames([
                  'flex justify-center items-center',
                  'h-12 w-12 rounded-full',
                  { 'bg-yellow-500': isActive },
                  { 'text-sky-700': !isActive },
                  { 'text-white': isActive },
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
