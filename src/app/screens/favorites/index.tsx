import { useFavoriteWords } from 'src/api/words';
import { WordCard } from 'src/shared/components';

export const FavoritesScreen = () => {
  const { words, isLoading, error } = useFavoriteWords();

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col gap-3 px-3 -mx-3">
      <div className="flex-1 overflow-auto overscroll-contain grid auto-rows-min lg:grid-cols-2 gap-3 p-2 -m-2">
        {words?.map((word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </div>
    </div>
  );
};
