import { supabaseApi } from '../api';

export const getSession = async () => {
  const { data, error } = await supabaseApi.auth.getSession();

  if (error) throw error;

  return data.session;
};
