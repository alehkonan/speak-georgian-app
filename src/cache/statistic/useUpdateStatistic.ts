import { useMutation } from '@tanstack/react-query';
import { updateStatistic } from 'src/api/statistic/updateStatistic';

export const useUpdateStatistic = () => {
  return useMutation({
    mutationFn: updateStatistic,
  });
};
