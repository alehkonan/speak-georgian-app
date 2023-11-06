import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import { useState } from 'react';

const DAILY_WORD_CLOSED_AT = 'dailyWordClosedAt';

const findIfDailyWordClosedToday = () => {
  const dailyWordClosedAt = localStorage.getItem(DAILY_WORD_CLOSED_AT);

  if (dailyWordClosedAt === null) return false;

  return isSameDay(new Date(dailyWordClosedAt), new Date());
};

export const useDailyWord = () => {
  const [isDailyWordClosedToday, setDailyWordAsClosed] = useState(
    findIfDailyWordClosedToday,
  );

  const onCloseDailyWord = () => {
    localStorage.setItem(
      DAILY_WORD_CLOSED_AT,
      format(new Date(), 'yyyy-MM-dd'),
    );
    setDailyWordAsClosed(true);
  };

  return {
    isDailyWordClosedToday,
    onCloseDailyWord,
  };
};
