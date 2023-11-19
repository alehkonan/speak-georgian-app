import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

export type NavItem = {
  path: `/${string}`;
  title: string;
  icon: ReactNode;
};

type Props = {
  navItems: NavItem[];
};

export const BottomNavigation = ({ navItems }: Props) => {
  return (
    <nav>
      <ul className="flex justify-center gap-5 min-[380px]:gap-10">
        {navItems.map(({ path, icon, title }) => (
          <li key={path}>
            <NavLink
              className={({ isActive }) =>
                twJoin([
                  'grid place-items-center',
                  'h-12 w-12 rounded-full',
                  'text-steel-blue',
                  isActive && 'border shadow-lg text-lapis-lazuli',
                ])
              }
              title={title}
              to={path}
            >
              {icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
