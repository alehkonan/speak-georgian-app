import { useQuery } from '@tanstack/react-query';
import { getFavoriteWords } from 'src/api/favorite/getFavoriteWords';
import { queryKeys } from '../keys';
import { useUser } from '../user/useUser';

export const useGetFavoriteWords = () => {
  const user = useUser();

  return useQuery({
    queryKey: queryKeys.favorite.words.queryKey,
    queryFn: () => getFavoriteWords(user?.id),
    staleTime: Infinity,
  });
};
