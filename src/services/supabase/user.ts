import { supabaseClient } from './client';

export const getUser = () => supabaseClient.auth.getUser();

export const getUserId = async () => {
  const response = await getUser();

  if (response.error) {
    throw new Error(response.error.message, { cause: response.error });
  }

  const userId = response.data.user?.id;

  if (!userId) throw new Error('User is not found');

  return userId;
};
