import { useMemo } from 'react';
import { useGetStatistics } from 'src/api/statistics';
import { useFavoriteWords, useWordsCount } from 'src/api/words';

export const UserStatistics = () => {
  const { count } = useWordsCount();
  const { statistics } = useGetStatistics();
  const { words } = useFavoriteWords();

  const learnedWords = useMemo(() => {
    if (!statistics) return 0;

    return statistics.filter(({ is_learned }) => is_learned).length;
  }, [statistics]);

  return (
    <div className="grid grid-cols-3 gap-2">
      <span className="col-span-2">Total words in the app</span>
      <span>{count}</span>
      <span className="col-span-2">Learned words</span>
      <span>{learnedWords}</span>
      <span className="col-span-2">Favorite words</span>
      <span>{words?.length}</span>
    </div>
  );
};
