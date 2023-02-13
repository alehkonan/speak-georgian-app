import { useUser } from 'src/api/user';
import {
  useGetUserSettings,
  useUpdateUserSettings,
} from 'src/api/userSettings';
import { ErrorMessage, Loader, Switch } from 'src/shared/components';

export const UserSettings = () => {
  const { user } = useUser();
  const { settings, isGettingSettings, error } = useGetUserSettings(user?.id);
  const {
    updateSettings,
    isUpdatingSettings,
    error: updateError,
  } = useUpdateUserSettings();

  const switchDailyWordSetting = (checked: boolean) =>
    settings &&
    updateSettings({
      settingId: settings.settingId,
      shouldShowDailyWord: checked,
    });

  const switchTranscriptionSetting = (checked: boolean) =>
    settings &&
    updateSettings({
      settingId: settings.settingId,
      shouldShowTranscription: checked,
    });

  const switchPictureSetting = (checked: boolean) =>
    settings &&
    updateSettings({
      settingId: settings.settingId,
      shouldShowPictureInGame: checked,
    });

  if (isGettingSettings) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <span className="col-span-2">Show daily word on the home screen</span>
        <Switch
          enabled={settings?.shouldShowDailyWord}
          onSwitch={switchDailyWordSetting}
          disabled={isUpdatingSettings}
        />
        <span className="col-span-2">Show transcription for words</span>
        <Switch
          enabled={settings?.shouldShowTranscription}
          onSwitch={switchTranscriptionSetting}
          disabled={isUpdatingSettings}
        />
        <span className="col-span-2">Always show pictures in game mode</span>
        <Switch
          enabled={settings?.shouldShowPictureInGame}
          onSwitch={switchPictureSetting}
          disabled={isUpdatingSettings}
        />
      </div>
      {updateError && <ErrorMessage message={updateError.message} />}
    </div>
  );
};
