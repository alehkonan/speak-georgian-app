import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { routes } from 'src/app/routes';
import { signInWithGoogle, signInWithPassword } from 'src/services/supabase';

export const useSignIn = () => {
  const navigate = useNavigate();

  const {
    mutate: onSignInWithPassword,
    isPending: isSignInWithPasswordLoading,
    error: signInWithPasswordError,
  } = useMutation({
    mutationFn: signInWithPassword,
    onSuccess: () => navigate(routes.home),
  });

  const {
    mutate: onSignInWithGoogle,
    isPending: isSignInWithGoogleLoading,
    error: signInWithGoogleError,
  } = useMutation({
    mutationFn: signInWithGoogle,
  });

  const error =
    signInWithPasswordError instanceof Error
      ? signInWithPasswordError
      : signInWithGoogleError instanceof Error
      ? signInWithGoogleError
      : null;

  return {
    onSignInWithPassword,
    onSignInWithGoogle,
    isLoading: isSignInWithPasswordLoading || isSignInWithGoogleLoading,
    error,
  };
};
