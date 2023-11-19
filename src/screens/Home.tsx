import { generatePath } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { CardContainer } from 'src/shared/components/CardContainer';
import { CategoryCard } from 'src/shared/components/CategoryCard';
import { Breadcrumb, Screen } from 'src/shared/components/Screen';

const breadcrumbs: Breadcrumb[] = [{ label: 'Categories', path: '/' }];

export const HomeScreen = () => {
  const { data: categories, isLoading } = useGetCategories();

  return (
    <Screen breadcrumbs={breadcrumbs} isLoading={isLoading}>
      <CardContainer>
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            path={generatePath(paths.category, {
              id: String(category.id),
            })}
            pictureUrl={category.picture_url}
            title={category.name}
          />
        ))}
      </CardContainer>
    </Screen>
  );
};
