import { type User } from '@supabase/supabase-js';
import { useQueryClient } from '@tanstack/react-query';
import { queryKeys } from '../keys';

export const useUser = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<User>(queryKeys.user.details.queryKey);
};
