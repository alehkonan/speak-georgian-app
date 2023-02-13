import { supabaseClient } from './client';

export const getUser = async () => {
  const { data, error } = await supabaseClient.auth.getUser();

  if (error) throw error;

  return data.user;
};
