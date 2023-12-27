import { QueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
    mutations: {
      retry: false,
      onError: (error) => toast.error(error.message),
    },
  },
});
