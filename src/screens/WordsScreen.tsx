import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Screen } from 'src/components/Screen';
import { WordCard } from 'src/components/WordCard';
import { queryKeys } from 'src/queries';

export const WordsScreen = () => {
  const { id } = useParams();
  const categoryId = Number(id);
  const { data: words, isLoading } = useQuery({ ...queryKeys.word.list });
  const { data: categories } = useQuery({ ...queryKeys.category.list });

  const screenName = useMemo(
    () => categories?.find(({ id }) => id === categoryId)?.name || 'Category',
    [categories, categoryId],
  );

  return (
    <Screen title={screenName} isLoading={isLoading}>
      <div className="grid gap-2">
        {words?.map((word) => <WordCard key={word.id} {...word} />)}
      </div>
    </Screen>
  );
};
