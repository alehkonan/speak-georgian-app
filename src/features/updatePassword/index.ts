import { useMutation } from '@tanstack/react-query';
import { updateUserPassword } from 'src/services/supabase';

export const useUpdatePassword = () => {
  const updatePasswordMutation = useMutation(updateUserPassword);

  return {
    onUpdatePassword: updatePasswordMutation.mutate,
    isLoading: updatePasswordMutation.isLoading,
    error: updatePasswordMutation.data?.error,
  };
};
