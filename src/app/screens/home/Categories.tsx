import { useNavigate } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { useUser } from 'src/api/user';
import { routes } from 'src/app/routes';
import { CategoryCard, ErrorMessage, Loader } from 'src/shared/components';

export const Categories = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { categories, isLoading, error } = useCategories(user?.id);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

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
            learnedWordsCount={category.wordsLearned}
            wordsCount={category.wordIds.length}
            pictureUrl={category.pictureUrl}
            onSelectCard={() => navigate(`${routes.category}/${category.id}`)}
          />
        ))}
      </div>
    </div>
  );
};
