import { supabaseClient } from '../client';
import { UserStatisticSchema } from '../schemas/statistic';

export const getUserStatistic = async (userId: string) => {
	const { data, error } = await supabaseClient
		.rpc('get_user_statistic', {
			user_id_param: userId,
		})
		.single();

	if (error) throw error;

	return UserStatisticSchema.parse(data);
};
