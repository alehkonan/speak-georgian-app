import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { supabaseClient } from './client';

export const signInWithPassword = async (
  credentials: SignInWithPasswordCredentials
) => {
  const { data, error } = await supabaseClient.auth.signInWithPassword(
    credentials
  );

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  return data;
};

export const signInWithGoogle = async () => {
  const { origin } = window.location;
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: origin },
  });

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  return data;
};

export const signUp = async (credentials: SignUpWithPasswordCredentials) => {
  const { data, error } = await supabaseClient.auth.signUp(credentials);

  if (error) throw error;

  return data;
};

export const signOut = async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw new Error(error.message, { cause: error });
  }
};

export const updateUserPassword = (password: string) => {
  return supabaseClient.auth.updateUser({ password });
};

export const resetPasswordForEmail = (email: string, redirectRoute: string) => {
  return supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}${redirectRoute}`,
  });
};

export const getSession = async () => {
  const { data, error } = await supabaseClient.auth.getSession();

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  return data.session;
};
