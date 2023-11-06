import { useQuery } from '@tanstack/react-query';
import { CategoryCard } from 'src/components/CategoryCard';
import { Screen } from 'src/components/Screen';
import { queryKeys } from 'src/queries';
import { routes } from 'src/routes';

export const CategoriesScreen = () => {
  const { data: categories, isLoading } = useQuery({
    ...queryKeys.category.list,
  });

  return (
    <Screen title="Categories" isLoading={isLoading}>
      <div className="grid grid-cols-2 auto-rows-min lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            navigateTo={`${routes.category}/${category.id}`}
          />
        ))}
      </div>
    </Screen>
  );
};
