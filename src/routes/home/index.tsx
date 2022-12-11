import { useState } from 'react';
import { DailyCard } from 'src/shared/components';
import { Categories } from './Categories';

export const HomeScreen = () => {
  const [hasDailyWord, setHasDailyWord] = useState(true);

  return (
    <div className="grid gap-3 h-full grid-rows-[auto_auto_1fr] px-3 -mx-3">
      <h3 className="text-primary text-2xl font-bold">Hello!</h3>
      {hasDailyWord && (
        <DailyCard
          wordKa="გამარჯობა"
          wordEn="Hello"
          transcription="Gamarjoba"
          onClose={() => setHasDailyWord(false)}
        />
      )}
      <div className="h-full overflow-hidden grid gap-3 px-3 -mx-3">
        <h3 className="text-dark text-2xl font-bold">Categories</h3>
        <Categories />
      </div>
    </div>
  );
};
