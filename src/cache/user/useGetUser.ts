import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../keys';
import { getUser } from 'src/api/auth/getUser';

export const useGetUser = () => {
  return useQuery({
    queryKey: queryKeys.user.details.queryKey,
    queryFn: () => getUser(),
    staleTime: Infinity,
  });
};
