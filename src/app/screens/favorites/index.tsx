import { useUser } from 'src/api/user';
import { useFavoriteWords } from 'src/api/words';
import { Empty, ErrorMessage, Loader, WordCard } from 'src/shared/components';

export const FavoritesScreen = () => {
  const { user } = useUser();
  const { words, isLoading, error } = useFavoriteWords(user?.id);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="h-full flex flex-col gap-3 px-3 -mx-3">
      <div className="flex-1 overflow-auto overscroll-contain grid auto-rows-min lg:grid-cols-2 gap-3 p-2 -m-2">
        {words ? (
          words.map((word) => <WordCard key={word.id} {...word} />)
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};
