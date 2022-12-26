import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { routes } from 'src/app/routes';
import { CategoryCard } from 'src/shared/components';
import { useContainerPosition } from './useContainerPosition';

export const Categories = () => {
  const navigate = useNavigate();
  const { categories, isLoading, error } = useCategories();
  const { onScroll, scrollContainerRef } = useContainerPosition();

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
        'h-full overflow-auto overscroll-contain',
        'grid grid-cols-2 auto-rows-min lg:grid-cols-3 2xl:grid-cols-4 gap-4',
        'p-3 -m-3',
      ])}
      ref={scrollContainerRef}
      onScroll={onScroll}
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
