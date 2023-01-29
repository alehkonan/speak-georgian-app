import { useRandomWord } from 'src/api/randomWord';
import { useGetUserSettings } from 'src/api/userSettings';
import { DailyCard } from 'src/shared/components';
import { useDailyWord } from './useDailyWord';

export const DailyWord = () => {
  const { isDailyWordClosedToday, onCloseDailyWord } = useDailyWord();
  const randomWord = useRandomWord();
  const { settings } = useGetUserSettings();

  if (isDailyWordClosedToday || !randomWord || !settings?.shouldShowDailyWord) {
    return null;
  }

  return (
    <DailyCard
      wordKa={randomWord.ka}
      wordEn={randomWord.en}
      transcription={randomWord.transcription}
      pictureUrl={randomWord.pictureUrl}
      soundUrl={randomWord.soundUrl}
      onClose={onCloseDailyWord}
    />
  );
};
