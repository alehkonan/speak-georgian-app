import { Tab, Tabs } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';
import { useGetUser } from 'src/cache/user/useGetUser';
import { useNavigationTabs } from './useNavigationTabs';


export const Navigation = () => {
  const { data: user, isLoading } = useGetUser();
  const tabs = useNavigationTabs(Boolean(user));
  const { pathname } = useLocation();

  if (isLoading) return null;

  return (
    <Tabs selectedKey={pathname}>
      {tabs.map(({ path, title, icon }) => (
        <Tab
          key={path}
          title={
            <div className="flex items-center gap-2">
              {icon}
              <span className={twJoin(['sm:block', user && 'hidden'])}>
                {title}
              </span>
            </div>
          }
          as={Link}
          // @ts-expect-error as Link has to prop
          to={path}
        />
      ))}
    </Tabs>
  );
};
