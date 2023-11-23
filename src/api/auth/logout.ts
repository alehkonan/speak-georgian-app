import { supabaseApi } from '../api';

export const logout = async () => {
  const { error } = await supabaseApi.auth.signOut();

  if (error) throw error;
};
