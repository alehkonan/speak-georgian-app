import { useQuery } from '@tanstack/react-query';
import { getRules } from 'src/api/rules/getRules';
import { queryKeys } from '../keys';

export const useGetRules = () => {
  return useQuery({
    queryKey: queryKeys.rule.list.queryKey,
    queryFn: () => getRules(),
  });
};
