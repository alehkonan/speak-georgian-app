import { supabaseClient } from './client';

type UserSettings = {
  settingId: number;
  shouldShowDailyWord: boolean;
  shouldShowTranscription: boolean;
  shouldShowPictureInGame: boolean;
};

const addUserSettings = async (userId: string) => {
  const { data, error } = await supabaseClient
    .from('user-settings')
    .insert({ user_id: userId })
    .select();

  if (error) throw error;

  return data?.at(0);
};

export const getUserSettings = async (userId: string) => {
  const { data, error } = await supabaseClient
    .from('user-settings')
    .select()
    .eq('user_id', userId);

  if (error) throw error;

  const userSettings = data.at(0);

  if (!userSettings) {
    const newUserSettings = await addUserSettings(userId);

    if (!newUserSettings) throw new Error('No user settings found');

    return {
      settingId: newUserSettings.id,
      shouldShowDailyWord: newUserSettings.show_daily_word,
      shouldShowTranscription: newUserSettings.show_transcription,
      shouldShowPictureInGame: newUserSettings.show_pictures_in_game,
    };
  }

  return {
    settingId: userSettings.id,
    shouldShowDailyWord: userSettings.show_daily_word,
    shouldShowTranscription: userSettings.show_transcription,
    shouldShowPictureInGame: userSettings.show_pictures_in_game,
  };
};

export const updateUserSettings = async (
  newSettings: Pick<UserSettings, 'settingId'> &
    Omit<Partial<UserSettings>, 'settingId'>
) => {
  const { error } = await supabaseClient.from('user-settings').update({
    id: newSettings.settingId,
    show_daily_word: newSettings.shouldShowDailyWord,
    show_transcription: newSettings.shouldShowTranscription,
    show_pictures_in_game: newSettings.shouldShowPictureInGame,
  });

  if (error) throw error;
};
