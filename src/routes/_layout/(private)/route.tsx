import { createFileRoute, redirect } from '@tanstack/react-router';
import { setUser, useUserStore } from 'src/store/user';
import { getUserRole } from 'src/supabase/auth/getUserRole';
import { supabaseClient } from 'src/supabase/client';

export const Route = createFileRoute('/_layout/(private)')({
	beforeLoad: async () => {
		const { user } = useUserStore.getState();
		if (user) return;
		const { data } = await supabaseClient.auth.getUser();
		if (!data.user) throw redirect({ to: '/login', replace: true });
		const role = await getUserRole(data.user.id);
		setUser({ ...data.user, role });
	},
});
