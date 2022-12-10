import { useState } from 'react';
import { DailyCard } from 'src/shared/components';

export const HomeScreen = () => {
  const [hasDailyWord, setHasDailyWord] = useState(true);

  return (
    <div className="grid gap-3">
      <h3 className="text-primary text-2xl font-bold">Hello!</h3>
      {hasDailyWord && (
        <DailyCard
          wordKa="გამარჯობა"
          wordEn="Hello"
          transcription="Gamarjoba"
          onClose={() => setHasDailyWord(false)}
        />
      )}
    </div>
  );
};
