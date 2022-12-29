import { useQuery } from '@tanstack/react-query';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import { useState } from 'react';
import { getWord, getWordsCount } from 'src/services/supabase';
import { apiKeys } from '.';

const DAILY_WORD = 'dailyWord';

const getRandomInteger = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getDailyWord = () => {
  try {
    const dailyWord = localStorage.getItem(DAILY_WORD);

    if (dailyWord === null) return null;

    const word = JSON.parse(dailyWord);
    const fetchedAt = word?.fetchedAt;

    const isFetchedToday = isSameDay(new Date(fetchedAt), new Date());

    return isFetchedToday ? word : null;
  } catch (error) {
    return null;
  }
};

export const useRandomWord = () => {
  const [dailyWord, setDailyWord] = useState(getDailyWord);

  const countQuery = useQuery(apiKeys.wordsCount, getWordsCount, {
    enabled: !dailyWord,
  });

  useQuery(
    [apiKeys.randomWord],
    () => getWord(getRandomInteger(1, countQuery.data?.count!)),
    {
      enabled: Boolean(countQuery.data?.count) && !dailyWord,
      onSuccess: ({ data }) => {
        const word = data?.at(0);
        if (word) {
          localStorage.setItem(
            DAILY_WORD,
            JSON.stringify({
              ...word,
              fetchedAt: format(new Date(), 'yyyy-MM-dd'),
            })
          );
          setDailyWord(word);
        }
      },
    }
  );

  return dailyWord;
};
