import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { useUser } from 'src/api/user';
import { useCategoryWords } from 'src/api/words';
import { RouteParam, routes } from 'src/app/routes';
import { Screen, WordCard } from 'src/shared/components';

const CategoryScreen = () => {
  const params = useParams<RouteParam>();
  const categoryId = Number(params.id);
  const { user } = useUser();
  const { words, isLoading } = useCategoryWords(categoryId, user?.id);
  const { categories } = useCategories();

  const screenName = useMemo(
    () => categories?.find(({ id }) => id === categoryId)?.name || 'Category',
    [categories, categoryId],
  );

  return (
    <Screen name={screenName} showName backTo={routes.category} isLoading={isLoading}>
      <div className="grid gap-2">
        {words?.map((word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </div>
    </Screen>
  );
};

export default CategoryScreen;
