import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { routes } from 'src/app/routes';
import { CategoryCard } from 'src/shared/components';

export const Categories = () => {
  const navigate = useNavigate();
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div>
        <p>Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-raisin-black text-lg font-bold">
        Choose the category:
      </h3>
      <div className="grid grid-cols-2 auto-rows-min lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            learnedWordsCount={12}
            wordsCount={50}
            pictureUrl={category.picture_url}
            onSelectCard={() => navigate(`${routes.category}/${category.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
