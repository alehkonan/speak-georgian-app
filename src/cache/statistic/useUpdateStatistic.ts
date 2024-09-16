import { useMutation } from '@tanstack/react-query';
import { updateWordStatistic } from 'src/supabase/statistic/updateWordStatistic';

export const useUpdateWordStatistic = () => {
	return useMutation({
		mutationFn: updateWordStatistic,
	});
};
