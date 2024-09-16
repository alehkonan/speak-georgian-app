import type { User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type StoredUser = {
	id: string;
	name: string;
	created: string;
	pictureUrl?: string;
	provider?: string;
	role?: string;
};

type UserState = {
	user: StoredUser | null;
	clear: () => void;
};

export const useUserStore = create(
	devtools<UserState>(
		(set) => ({
			user: null,
			clear: () => set({ user: null }),
		}),
		{ name: 'User' },
	),
);

export const setUser = (user: User & { role: string | undefined }) => {
	useUserStore.setState({
		user: {
			id: user.id,
			name: user.user_metadata.full_name,
			pictureUrl: user.user_metadata.picture,
			created: user.created_at,
			provider: user.app_metadata.provider,
			role: user.role,
		},
	});
};
