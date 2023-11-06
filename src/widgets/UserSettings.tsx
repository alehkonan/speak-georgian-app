import { Switch } from 'src/components/Switch';

export const UserSettings = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        <span className="col-span-2">Show daily word on the home screen</span>
        <Switch />
        <span className="col-span-2">Show transcription for words</span>
        <Switch />
        <span className="col-span-2">Always show pictures in game mode</span>
        <Switch />
      </div>
    </div>
  );
};
