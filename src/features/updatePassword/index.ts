import { useMutation } from '@tanstack/react-query';
import { updateUserPassword } from 'src/services/supabase';

export const useUpdatePassword = () => {
  const { mutate, isLoading, error } = useMutation({
    mutationFn: updateUserPassword,
  });

  return {
    onUpdatePassword: mutate,
    isLoading,
    error: error instanceof Error ? error : null,
  };
};
