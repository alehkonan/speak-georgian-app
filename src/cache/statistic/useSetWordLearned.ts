import { useMutation } from '@tanstack/react-query';
import { setWordLearned } from 'src/api/statistic/setWordLearned';

export const useSetWordLearned = () => {
  return useMutation({
    mutationFn: setWordLearned,
  });
};
