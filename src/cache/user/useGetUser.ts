import { useQuery } from '@tanstack/react-query';
import { getUser } from 'src/api/auth/getUser';
import { queryKeys } from '../keys';

export const useGetUser = () => {
  return useQuery({
    queryKey: queryKeys.user.details.queryKey,
    queryFn: () => getUser(),
    staleTime: Infinity,
  });
};
