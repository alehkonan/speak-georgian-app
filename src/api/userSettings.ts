import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getUserSettings, updateUserSettings } from 'src/services/supabase';
import { apiKeys } from './apiKeys';

export const useGetUserSettings = (userId?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: apiKeys.userSettings,
    queryFn: () => getUserSettings(userId!),
    enabled: Boolean(userId),
  });

  return {
    settings: data,
    isGettingSettings: isLoading,
    error: error instanceof Error ? error : null,
  };
};

export const useUpdateUserSettings = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation({
    mutationFn: updateUserSettings,
    onSuccess: () => queryClient.invalidateQueries(apiKeys.userSettings),
  });

  return {
    updateSettings: mutate,
    isUpdatingSettings: isLoading,
    error: error instanceof Error ? error : null,
  };
};
