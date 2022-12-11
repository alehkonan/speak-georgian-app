import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { CategoryCard } from 'src/shared/components';
import { routes } from '..';

export const Categories = () => {
  const navigate = useNavigate();
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
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
    <div
      className={classNames([
        'h-full overflow-auto',
        'grid grid-cols-2 auto-rows-min lg:grid-cols-3 2xl:grid-cols-4 gap-4',
        'p-3 -m-3',
      ])}
    >
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
  );
};
