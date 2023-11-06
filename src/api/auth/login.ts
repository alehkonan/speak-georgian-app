import { type SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { supabaseApi } from '../api';

export const login = async (credentials: SignInWithPasswordCredentials) => {
  const { data, error } =
    await supabaseApi.auth.signInWithPassword(credentials);

  if (error) throw error;

  return data;
};
