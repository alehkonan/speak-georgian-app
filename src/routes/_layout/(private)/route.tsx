import { createFileRoute, redirect } from '@tanstack/react-router';
import { useUserStore } from 'src/auth/useUser';
import { getUserRole } from 'src/supabase/auth/getUserRole';
import { supabaseClient } from 'src/supabase/client';

export const Route = createFileRoute('/_layout/(private)')({
	beforeLoad: async () => {
		const { user, setUser } = useUserStore.getState();
		if (user) return;
		const { data } = await supabaseClient.auth.getUser();
		if (!data.user) throw redirect({ to: '/login', replace: true });
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
});
