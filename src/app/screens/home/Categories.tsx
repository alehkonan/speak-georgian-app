import { useNavigate } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { routes } from 'src/app/routes';
import { CategoryCard } from 'src/shared/components';
import { LoaderIcon } from 'src/shared/icons';

export const Categories = () => {
  const navigate = useNavigate();
  const { categories, isLoading, error } = useCategories();

  if (isLoading) {
    return (
      <div className="h-full grid place-items-center">
        <LoaderIcon className="text-ripe-mango" />
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
            learnedWordsCount={category.learnedWordsCount}
            wordsCount={category.wordsCount}
            pictureUrl={category.picture_url}
            onSelectCard={() => navigate(`${routes.category}/${category.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
