import { useQuery } from '@tanstack/react-query';
import { getUser } from 'src/services/supabase';
import { apiKeys } from '.';

export const useUser = () => {
  const userQuery = useQuery(apiKeys.user, getUser);

  return {
    user: userQuery.data?.data.user,
    isLoading: userQuery.isLoading,
    error: userQuery.data?.error,
  };
};
