import {
  createClient,
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);

export const getSession = () => supabaseClient.auth.getSession();

export const getUser = () => supabaseClient.auth.getUser();

export const signUp = (credentials: SignUpWithPasswordCredentials) =>
  supabaseClient.auth.signUp(credentials);

export const signInWithPassword = (
  credentials: SignInWithPasswordCredentials
) => supabaseClient.auth.signInWithPassword(credentials);

export const signInWithGoogle = () =>
  supabaseClient.auth.signInWithOAuth({
    provider: 'google',
  });

export const updateUserPassword = (password: string) =>
  supabaseClient.auth.updateUser({ password });

export const resetPasswordForEmail = (email: string, redirectRoute: string) =>
  supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}${redirectRoute}`,
  });

export const signOut = () => supabaseClient.auth.signOut();

export const getCategories = async () =>
  await supabaseClient.from('categories').select();

export const getWordsCount = async () =>
  await supabaseClient
    .from('words')
    .select('*', { head: true, count: 'exact' });

export const getWord = async (wordId: number) =>
  await supabaseClient.from('words').select('*').eq('id', wordId);

export const getWordsByCategory = async (categoryId: number) =>
  await supabaseClient.from('words').select().eq('category_id', categoryId);
