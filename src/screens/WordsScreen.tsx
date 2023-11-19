import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { useGetCategoryWords } from 'src/cache/category/useGetCategoryWords';
import { Screen } from 'src/shared/components/Screen';
import { WordCard } from 'src/shared/components/WordCard';
import { twJoin } from 'tailwind-merge';

export const WordsScreen = () => {
  const { id } = useParams();
  const categoryId = Number(id);

  const { data: categories, isLoading: isGettingCategories } =
    useGetCategories();
  const { data: words, isLoading: isGettingWords } =
    useGetCategoryWords(categoryId);

  const title = useMemo(
    () => categories?.find(({ id }) => id === categoryId)?.name,
    [categories, categoryId],
  );

  return (
    <Screen
      isLoading={isGettingCategories || isGettingWords}
      prevRoute={paths.root}
      title={title}
    >
      <div
        className={twJoin([
          'mx-auto w-full max-w-5xl p-2',
          'grid auto-rows-min grid-cols-auto-fill-250 gap-2',
        ])}
      >
        {words?.map((word) => <WordCard key={word.id} word={word} />)}
      </div>
    </Screen>
  );
};
