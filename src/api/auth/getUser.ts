import { supabaseApi } from '../api';

export const getUser = async () => {
  const { data, error } = await supabaseApi.auth.getUser();

  if (error) throw error;

  return data.user;
};
