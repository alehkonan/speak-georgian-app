import { useQuery } from '@tanstack/react-query';
import { getUserSettings } from 'src/services/supabase';
import { apiKeys } from '.';

export const useUserSettings = () => {
  const { data: settings, isLoading } = useQuery({
    queryKey: apiKeys.userSettings,
    queryFn: getUserSettings,
  });

  return {
    settings,
    isLoading,
  };
};
