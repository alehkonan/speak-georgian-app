import { type User } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { getUser } from 'src/api/auth/getUser';

import { queryKeys } from '../keys';

export const useGetUser = () => {
  return useQuery({
    queryKey: queryKeys.user.details.queryKey,
    queryFn: () => getUser(),
    staleTime: Infinity,
    // placeholder data is used to avoid <App /> rerender
    // When any nested component is mounted it changes the state of the query
    // And is causes recreation of the router in the App
    // After that nested component is mounted again and again
    placeholderData: {} as User,
  });
};
