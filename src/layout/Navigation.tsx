import { Tab, Tabs } from '@nextui-org/react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigationTabs } from './useNavigationTabs';

export const Navigation = () => {
  const tabs = useNavigationTabs();
  const { pathname } = useLocation();

  return (
    <Tabs selectedKey={pathname}>
      {tabs.map(({ path, title, icon }) => (
        <Tab
          key={path}
          title={
            <div className="flex items-center gap-2">
              {icon}
              <span className="hidden sm:block">{title}</span>
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
