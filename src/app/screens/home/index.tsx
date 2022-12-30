import { useRandomWord } from 'src/api/randomWord';
import { DailyCard } from 'src/shared/components';
import { Categories } from './Categories';
import { useDailyWord } from './useDailyWord';

export const HomeScreen = () => {
  const { isDailyWordClosedToday, onCloseDailyWord } = useDailyWord();
  const randomWord = useRandomWord();

  return (
    <div className="h-full flex flex-col gap-3 px-3 -mx-3">
      <h3 className="text-primary text-2xl font-bold">Hello!</h3>
      {!isDailyWordClosedToday && randomWord && (
        <DailyCard
          wordKa={randomWord.name_ka}
          wordEn={randomWord.name_en}
          transcription={randomWord.transcription}
          pictureUrl={randomWord.picture_url}
          soundUrl={randomWord.sound_url}
          onClose={onCloseDailyWord}
        />
      )}
      <div className="flex-1 overflow-hidden flex flex-col gap-3 px-3 -mx-3">
        <h3 className="text-dark text-2xl font-bold">Categories</h3>
        <Categories />
      </div>
    </div>
  );
};
