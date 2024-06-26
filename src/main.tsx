import { NextUIProvider } from '@nextui-org/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { queryClient } from './cache/client';
import { idbPersister } from './cache/persister';
import './i18n';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found!');

const root = ReactDOM.createRoot(rootElement);
const App = (
	<React.StrictMode>
		<NextUIProvider>
			<PersistQueryClientProvider
				client={queryClient}
				persistOptions={{ persister: idbPersister }}
			>
				<RouterProvider router={router} />
				<Toaster />
				<ReactQueryDevtools />
			</PersistQueryClientProvider>
		</NextUIProvider>
	</React.StrictMode>
);

root.render(App);
