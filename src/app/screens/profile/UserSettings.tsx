import {
  useGetUserSettings,
  useUpdateUserSettings,
} from 'src/api/userSettings';
import { Switch } from 'src/shared/components';
import { LoaderIcon } from 'src/shared/icons';

export const UserSettings = () => {
  const { settings, isGettingSettings } = useGetUserSettings();
  const { updateSettings, isUpdatingSettings } = useUpdateUserSettings();

  if (isGettingSettings) {
    return (
      <div className="grid place-items-center">
        <LoaderIcon className="text-maize w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      <span className="col-span-2">Show daily word on the home screen</span>
      <Switch
        enabled={settings?.shouldShowDailyWord}
        onSwitch={(checked) =>
          settings &&
          updateSettings({
            settingId: settings.settingId,
            shouldShowDailyWord: checked,
          })
        }
        disabled={isUpdatingSettings}
      />
      <span className="col-span-2">Show transcription for words</span>
      <Switch
        enabled={settings?.shouldShowTranscription}
        onSwitch={(checked) =>
          settings &&
          updateSettings({
            settingId: settings.settingId,
            shouldShowTranscription: checked,
          })
        }
        disabled={isUpdatingSettings}
      />
      <span className="col-span-2">Always show pictures in game mode</span>
      <Switch
        enabled={settings?.shouldShowPictureInGame}
        onSwitch={(checked) =>
          settings &&
          updateSettings({
            settingId: settings.settingId,
            shouldShowPictureInGame: checked,
          })
        }
        disabled={isUpdatingSettings}
      />
    </div>
  );
};
