import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextUIProvider } from '@nextui-org/react';
import { createRootRoute, Outlet, useRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { Toaster } from 'react-hot-toast';
import { queryClient } from 'src/cache/client';
import { idbPersister } from 'src/cache/persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { useUserStore } from 'src/auth/useUser';
import { supabaseClient } from 'src/supabase/client';
import { getUserRole } from 'src/supabase/auth/getUserRole';

export const Route = createRootRoute({
	beforeLoad: async () => {
		const { user, setUser } = useUserStore.getState();
		if (user) return;
		const { data } = await supabaseClient.auth.getUser();
		if (!data.user) return;
		const role = await getUserRole(data.user.id);
		setUser({
			id: data.user.id,
			name: data.user.user_metadata.full_name,
			pictureUrl: data.user.user_metadata.picture,
			created: data.user.created_at,
			provider: data.user.app_metadata.provider,
			role,
		});
	},
	component: () => {
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
					</PersistQueryClientProvider>
				</NextUIProvider>
			</StrictMode>
		);
	},
});
