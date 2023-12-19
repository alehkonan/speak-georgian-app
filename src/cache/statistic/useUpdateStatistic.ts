import { useMutation } from '@tanstack/react-query';
import { updateWordStatistic } from 'src/api/statistic/updateWordStatistic';

export const useUpdateWordStatistic = () => {
  return useMutation({
    mutationFn: updateWordStatistic,
  });
};
