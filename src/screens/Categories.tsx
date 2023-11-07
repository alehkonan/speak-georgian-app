import { CategoryCard } from 'src/components/CategoryCard';
import { Screen } from 'src/components/Screen';
import { useCategoriesQuery } from 'src/queries/useCategoriesQuery';
import { routes } from 'src/routes';
import { twJoin } from 'tailwind-merge';

export const CategoriesScreen = () => {
  const { data: categories, isLoading } = useCategoriesQuery();

  return (
    <Screen title="Categories" isLoading={isLoading}>
      <div
        className={twJoin([
          'mx-auto w-full max-w-5xl p-2',
          'grid auto-rows-min grid-cols-auto-fit-250 justify-center gap-2',
        ])}
      >
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            navigateTo={`${routes.category}/${category.id}`}
            pictureUrl={category.picture_url}
          />
        ))}
      </div>
    </Screen>
  );
};
