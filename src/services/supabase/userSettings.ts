import { supabaseClient } from './client';
import { getUserId } from './user';

type UserSettings = {
  shouldShowDailyWord: boolean;
  shouldShowTranslation: boolean;
  shouldShowPictureInGame: boolean;
};

const addUserSettings = async (userId: string) => {
  const { data } = await supabaseClient
    .from('user-settings')
    .insert({ user_id: userId })
    .select();

  return data?.at(0);
};

export const getUserSettings = async (): Promise<UserSettings> => {
  const userId = await getUserId();

  const { data, error } = await supabaseClient
    .from('user-settings')
    .select()
    .eq('user_id', userId);

  if (error) {
    throw new Error(error.message, { cause: error });
  }

  const userSettings = data.at(0);

  if (!userSettings) {
    const newUserSettings = await addUserSettings(userId);
    return {
      shouldShowDailyWord: Boolean(newUserSettings?.show_daily_word),
      shouldShowTranslation: Boolean(newUserSettings?.show_transcription),
      shouldShowPictureInGame: Boolean(newUserSettings?.show_pictures_in_game),
    };
  }

  return {
    shouldShowDailyWord: Boolean(userSettings?.show_daily_word),
    shouldShowTranslation: Boolean(userSettings?.show_transcription),
    shouldShowPictureInGame: Boolean(userSettings?.show_pictures_in_game),
  };
};
