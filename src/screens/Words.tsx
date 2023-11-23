import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { useGetCategoryWords } from 'src/cache/category/useGetCategoryWords';
import { CardContainer } from 'src/shared/components/CardContainer';
import { ErrorCard } from 'src/shared/components/ErrorCard';
import { Breadcrumb, Screen } from 'src/shared/components/Screen';
import { WordCard } from 'src/shared/components/WordCard';

export const WordsScreen = () => {
  const { id } = useParams();
  const categoryId = Number(id);

  const { data: categories, isLoading: isGettingCategories } =
    useGetCategories();
  const {
    data: words,
    isLoading: isGettingWords,
    error,
    refetch,
  } = useGetCategoryWords(categoryId);

  const breadcrumbs = useMemo<Breadcrumb[]>(() => {
    const category = categories?.find(({ id }) => id === categoryId);

    return [
      { path: paths.root, label: 'Categories' },
      { path: paths.category, label: category?.name_en ?? 'No category' },
    ];
  }, [categories, categoryId]);

  return (
    <Screen
      breadcrumbs={breadcrumbs}
      isLoading={isGettingWords || isGettingCategories}
    >
      {error && <ErrorCard error={error} onRetry={refetch} />}
      <CardContainer isEmpty={!words?.length}>
        {words?.map((word) => (
          <WordCard
            key={word.id}
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
