import { generatePath } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { CategoryCard } from 'src/shared/components/CategoryCard';
import { Screen } from 'src/shared/components/Screen';
import { twJoin } from 'tailwind-merge';

export const CategoriesScreen = () => {
  const { data: categories, isLoading } = useGetCategories();

  return (
    <Screen isLoading={isLoading} title="Categories">
      <div
        className={twJoin([
          'mx-auto w-full max-w-5xl p-2',
          'grid auto-rows-min grid-cols-auto-fit-250 justify-center gap-2',
        ])}
      >
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            navigateTo={generatePath(paths.category, {
              id: String(category.id),
            })}
            pictureUrl={category.picture_url}
            title={category.name}
          />
        ))}
      </div>
    </Screen>
  );
};
