import { NextUIProvider } from '@nextui-org/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createRootRoute, Outlet, useRouter } from '@tanstack/react-router';
import { lazy, StrictMode, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { queryClient } from 'src/cache/client';
import { idbPersister } from 'src/cache/persister';
import { setUser, useUserStore } from 'src/store/user';
import { getUserRole } from 'src/supabase/auth/getUserRole';
import { supabaseClient } from 'src/supabase/client';

export const Route = createRootRoute({
	beforeLoad: async () => {
		const { user } = useUserStore.getState();
		if (user) return;
		const { data } = await supabaseClient.auth.getUser();
		if (!data.user) return;
		const role = await getUserRole(data.user.id);
		setUser({ ...data.user, role });
	},
	component: App,
});

const TanStackRouterDevtools =
	process.env.NODE_ENV === 'production'
		? () => null
		: lazy(() =>
				import('@tanstack/router-devtools').then((res) => ({
					default: res.TanStackRouterDevtools,
				})),
			);

function App() {
	const router = useRouter();

	return (
		<StrictMode>
			<NextUIProvider navigate={(path) => router.navigate({ to: path })}>
				<PersistQueryClientProvider
					client={queryClient}
					persistOptions={{ persister: idbPersister }}
				>
					<Outlet />
					<Toaster />
					<ReactQueryDevtools />
					<Suspense fallback="Loading...">
						<TanStackRouterDevtools />
					</Suspense>
				</PersistQueryClientProvider>
			</NextUIProvider>
		</StrictMode>
	);
}
