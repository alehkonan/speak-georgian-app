import { Tab, Tabs } from '@nextui-org/react';
import { useLocation } from '@tanstack/react-router';
import { useNavigationTabs } from './useNavigationTabs';

export const NavigationTabs = () => {
	const { pathname } = useLocation();
	const tabs = useNavigationTabs();

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
					href={path}
				/>
			))}
		</Tabs>
	);
};
