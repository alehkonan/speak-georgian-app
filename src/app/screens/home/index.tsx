import { DailyCard } from 'src/shared/components';
import { Categories } from './Categories';
import { useDailyWord } from './useDailyWord';

export const HomeScreen = () => {
  const { isDailyWordClosedToday, onCloseDailyWord } = useDailyWord();

  return (
    <div className="grid gap-3 h-full grid-rows-[auto_auto_1fr] px-3 -mx-3">
      <h3 className="text-primary text-2xl font-bold">Hello!</h3>
      {!isDailyWordClosedToday && (
        <DailyCard
          wordKa="გამარჯობა"
          wordEn="Hello"
          transcription="Gamarjoba"
          onClose={onCloseDailyWord}
        />
      )}
      <div className="h-full overflow-hidden grid gap-3 px-3 -mx-3">
        <h3 className="text-dark text-2xl font-bold">Categories</h3>
        <Categories />
      </div>
    </div>
  );
};
