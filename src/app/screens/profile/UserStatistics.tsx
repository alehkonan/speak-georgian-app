import { useMemo } from 'react';
import { useGetStatistics } from 'src/api/statistics';
import { useUser } from 'src/api/user';
import { useFavoriteWords, useWordsCount } from 'src/api/words';
import { ErrorMessage, Loader } from 'src/shared/components';

export const UserStatistics = () => {
  const { user } = useUser();
  const wordsCount = useWordsCount();
  const statistics = useGetStatistics(user?.id);
  const favWords = useFavoriteWords(user?.id);

  const isLoading =
    wordsCount.isLoading || statistics.isLoading || favWords.isLoading;

  const learnedWords = useMemo(() => {
    if (!statistics.statistics) return 0;

    return statistics.statistics.filter(({ is_learned }) => is_learned).length;
  }, [statistics]);

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-3 gap-2">
      <span className="col-span-2">Total words in the app</span>
      {wordsCount.error ? (
        <ErrorMessage message={wordsCount.error.message} />
      ) : (
        <span>{wordsCount.count}</span>
      )}

      <span className="col-span-2">Learned words</span>
      {statistics.error ? (
        <ErrorMessage message={statistics.error.message} />
      ) : (
        <span>{learnedWords}</span>
      )}

      <span className="col-span-2">Favorite words</span>
      {favWords.error ? (
        <ErrorMessage message={favWords.error.message} />
      ) : (
        <span>{favWords.words?.length}</span>
      )}
    </div>
  );
};
