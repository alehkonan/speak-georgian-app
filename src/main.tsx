import { RouterProvider, createRouter } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import { routeTree } from './routeTree.gen';

const router = createRouter({
	routeTree,
	defaultPreloadStaleTime: 0, // turn off internal cache in order to use tanstack query
});

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error(`Element with id 'root' does not exist in index.html`);
}

ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
