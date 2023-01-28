import { useQuery } from '@tanstack/react-query';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import { useState } from 'react';
import { getWord, getWordsCount, Word } from 'src/services/supabase';
import { getRandomInteger } from 'src/shared/utils';
import { apiKeys } from '.';

const DAILY_WORD = 'dailyWord';

const getDailyWord = () => {
  try {
    const dailyWord = localStorage.getItem(DAILY_WORD);

    if (dailyWord === null) return null;

    const word = JSON.parse(dailyWord) as Word & { fetchedAt?: string };
    const fetchedAt = word?.fetchedAt;

    if (!fetchedAt) throw new Error('word is not fetched');

    const isFetchedToday = isSameDay(new Date(fetchedAt), new Date());

    return isFetchedToday ? word : null;
  } catch (error) {
    return null;
  }
};

export const useRandomWord = () => {
  const [dailyWord, setDailyWord] = useState(getDailyWord);

  const { data: count } = useQuery(apiKeys.wordsCount, getWordsCount, {
    enabled: !dailyWord,
  });

  useQuery({
    queryKey: apiKeys.randomWord,
    queryFn: () => getWord(getRandomInteger(1, count!)),
    enabled: Boolean(count) && !dailyWord,
    onSuccess: (word) => {
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
  });

  return dailyWord;
};
