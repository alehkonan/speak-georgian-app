import { useRandomWord } from 'src/api/randomWord';
import { DailyCard } from 'src/shared/components';
import { useDailyWord } from './useDailyWord';

export const DailyWord = () => {
  const { isDailyWordClosedToday, onCloseDailyWord } = useDailyWord();
  const randomWord = useRandomWord();

  if (isDailyWordClosedToday || !randomWord) return null;

  return (
    <DailyCard
      wordKa={randomWord.name_ka}
      wordEn={randomWord.name_en}
      transcription={randomWord.transcription}
      pictureUrl={randomWord.picture_url}
      soundUrl={randomWord.sound_url}
      onClose={onCloseDailyWord}
    />
  );
};
