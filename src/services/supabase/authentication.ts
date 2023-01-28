import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';
import { supabaseClient } from './client';

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
