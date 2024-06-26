import { Outlet } from 'react-router-dom';
import { Wave } from 'src/assets/images';
import { Navigation } from './Navigation';

export const Layout = () => {
	return (
		<div className="grid h-screen grid-rows-[1fr_auto] overflow-hidden bg-page-gradient p-safe">
			<Wave className="pointer-events-none fixed z-50 h-10 w-full text-theme" />
			<Outlet />
			<footer className="flex justify-center p-2">
				<Navigation />
			</footer>
		</div>
	);
};
