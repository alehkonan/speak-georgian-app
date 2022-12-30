import {
  createClient,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

// Authentication
export const signInWithPassword = (
  credentials: SignInWithPasswordCredentials
) => supabaseClient.auth.signInWithPassword(credentials);
export const signInWithGoogle = () => {
  const { origin } = window.location;
  return supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: origin },
  });
};
export const signUp = (credentials: SignUpWithPasswordCredentials) => {
  return supabaseClient.auth.signUp(credentials);
};
export const signOut = () => supabaseClient.auth.signOut();
export const updateUserPassword = (password: string) => {
  return supabaseClient.auth.updateUser({ password });
};
export const resetPasswordForEmail = (email: string, redirectRoute: string) => {
  return supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}${redirectRoute}`,
  });
};

export const getSession = () => supabaseClient.auth.getSession();
export const getUser = () => supabaseClient.auth.getUser();

// Data
export const getCategories = async () => {
  const data = await supabaseClient.from('categories').select();
  return data;
};

export const getWordsCount = async () => {
  const data = await supabaseClient
    .from('words')
    .select('*', { head: true, count: 'exact' });
  return data;
};

export const getWord = async (wordId: number) => {
  const data = await supabaseClient.from('words').select('*').eq('id', wordId);
  return data;
};

export const getWordsByCategory = async (categoryId: number) => {
  const data = await supabaseClient
    .from('words')
    .select()
    .eq('category_id', categoryId);
  return data;
};

export const getAllWords = async () => {
  const data = await supabaseClient.from('words').select();
  return data;
};
