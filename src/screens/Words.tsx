import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { useGetCategoryWords } from 'src/cache/category/useGetCategoryWords';
import { CardContainer } from 'src/shared/components/CardContainer';
import { ErrorCard } from 'src/shared/components/ErrorCard';
import { type Breadcrumb, Screen } from 'src/shared/components/Screen';
import { WordCard } from 'src/shared/components/WordCard';

export const WordsScreen = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const categoryId = Number(id);

  const categoryQuery = useGetCategories();
  const wordsQuery = useGetCategoryWords(categoryId);

  const breadcrumbs = useMemo<Breadcrumb[]>(() => {
    const category = categoryQuery.data?.find(({ id }) => id === categoryId);

    return [
      { path: paths.root, label: t('categories.title') },
      {
        path: paths.category,
        label: category?.name_en ?? t('categories.withoutCategory'),
      },
    ];
  }, [categoryQuery.data, t, categoryId]);

  return (
    <Screen breadcrumbs={breadcrumbs} isLoading={wordsQuery.isLoading}>
      {wordsQuery.error && (
        <ErrorCard error={wordsQuery.error} onRetry={wordsQuery.refetch} />
      )}
      <CardContainer isEmpty={!wordsQuery.data?.length}>
        {wordsQuery.data?.map((word) => (
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
