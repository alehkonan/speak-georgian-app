import { useUser } from 'src/api/user';
import { useFavoriteWords } from 'src/api/words';
import {
  Empty,
  ErrorMessage,
  Loader,
  Screen,
  WordCard,
} from 'src/shared/components';

export const FavoritesScreen = () => {
  const { user } = useUser();
  const { words, isLoading, error } = useFavoriteWords(user?.id);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Screen name="Favorites" showName>
      <div className="grid gap-2">
        {words ? (
          words.map((word) => <WordCard key={word.id} {...word} />)
        ) : (
          <Empty />
        )}
      </div>
    </Screen>
  );
};
