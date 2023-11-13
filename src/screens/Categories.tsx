import { generatePath } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { useGetUser } from 'src/cache/user/useGetUser';
import { CategoryCard } from 'src/components/CategoryCard';
import { Screen } from 'src/components/Screen';
import { twJoin } from 'tailwind-merge';

export const CategoriesScreen = () => {
  const { data: user } = useGetUser();
  const { data: categories, isLoading } = useGetCategories();

  return (
    <Screen
      title="Categories"
      isLoading={isLoading}
      prevRoute={!user?.id ? paths.welcome : undefined}
    >
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
            navigateTo={generatePath(paths.category, {
              id: String(category.id),
            })}
            pictureUrl={category.picture_url}
          />
        ))}
      </div>
    </Screen>
  );
};
