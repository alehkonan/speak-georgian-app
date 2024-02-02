import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type User = {
  id: string;
  name: string;
  created: string;
  pictureUrl?: string;
  provider?: string;
  role?: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create(
  devtools<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    { name: 'User' },
  ),
);

export const useUser = () => useUserStore((state) => state.user);
