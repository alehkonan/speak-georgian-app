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
  const data = await supabaseClient.from('categories').select().order('name');
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

export const getWordStatistic = async (wordId: number) => {
  const { data } = await getUser();
  const userId = data.user?.id;
  const { data: statistic } = await supabaseClient
    .from('statistics')
    .select()
    .eq('word_id', wordId)
    .eq('user_id', userId);

  return statistic?.at(0);
};

export const incrementWrongAnswers = async (wordId: number) => {
  const { data: userData } = await getUser();
  const userId = userData.user?.id;

  if (!userId) return;

  const statistic = await getWordStatistic(wordId);

  if (statistic) {
    await supabaseClient.from('statistics').update({
      id: statistic.id,
      wrong_answers: statistic.wrong_answers + 1,
      total_answers: statistic.total_answers + 1,
    });
  } else {
    await supabaseClient.from('statistics').insert({
      word_id: wordId,
      user_id: userId,
      wrong_answers: 1,
      total_answers: 1,
    });
  }
};

export const incrementRightAnswers = async (wordId: number) => {
  const { data: userData } = await getUser();
  const userId = userData.user?.id;

  if (!userId) return;

  const statistic = await getWordStatistic(wordId);

  if (statistic) {
    await supabaseClient.from('statistics').update({
      id: statistic.id,
      right_answers: statistic.right_answers + 1,
      total_answers: statistic.total_answers + 1,
    });
  } else {
    await supabaseClient.from('statistics').insert({
      word_id: wordId,
      user_id: userId,
      right_answers: 1,
      total_answers: 1,
    });
  }
};
