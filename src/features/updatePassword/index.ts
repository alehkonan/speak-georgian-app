import { useMutation } from '@tanstack/react-query';
import { updateUserPassword } from 'src/services/supabase';

export const useUpdatePassword = () => {
  const { mutate, isPending, error } = useMutation({
    mutationFn: updateUserPassword,
  });

  return {
    onUpdatePassword: mutate,
    isLoading: isPending,
    error: error instanceof Error ? error : null,
  };
};
