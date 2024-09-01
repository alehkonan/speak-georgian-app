import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Wave } from 'src/assets/images';
import { NavigationTabs } from 'src/navigation/NavigationTabs';

export const Route = createFileRoute('/_layout')({
	component: Layout,
});

function Layout() {
	return (
		<div className="grid h-screen grid-rows-[1fr_auto] overflow-hidden bg-page-gradient p-safe">
			<Wave className="pointer-events-none fixed z-50 h-10 w-full text-theme" />
			<Outlet />
			<footer className="flex justify-center p-2">
				<NavigationTabs />
			</footer>
		</div>
	);
}
