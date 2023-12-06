import { useGetFavoriteWords } from 'src/cache/favorite/useGetFavoriteWords';
import { CardContainer } from 'src/shared/components/CardContainer';
import { ErrorCard } from 'src/shared/components/ErrorCard';
import { Screen } from 'src/shared/components/Screen';
import { WordCard } from 'src/shared/components/WordCard';

export const FavoritesScreen = () => {
  const { data, error, isLoading, refetch } = useGetFavoriteWords();

  return (
    <Screen isLoading={isLoading}>
      <CardContainer isEmpty={!data?.length}>
        {error && <ErrorCard error={error} onRetry={refetch} />}
        {data?.map((word) => (
          <WordCard
            key={word.id}
            isFavorite={word.is_favorite}
            isLearned={word.is_learned}
            pictureUrl={word.picture_url || undefined}
            transcription={word.transcription_en || undefined}
            translation={word.name_en}
            word={word.name_ka}
            wordId={word.id}
          />
        ))}
      </CardContainer>
    </Screen>
  );
};
