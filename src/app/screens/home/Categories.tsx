import { Link, useNavigate } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { useUser } from 'src/api/user';
import { routes } from 'src/app/routes';
import {
  CategoryCard,
  Divider,
  ErrorMessage,
  Loader,
} from 'src/shared/components';

export const Categories = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { categories, isLoading, error } = useCategories(user?.id);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="grid gap-3">
      <Link to={routes.verbs} className="block p-2 rounded-lg bg-white shadow">
        <span className="text-lg font-medium">Verbs</span>
      </Link>
      <Link
        to={routes.phrases}
        className="block p-2 rounded-lg bg-white shadow"
      >
        <span className="text-lg font-medium">Phrases</span>
      </Link>
      <div className="grid grid-cols-2 auto-rows-min lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        {categories?.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            learnedWordsCount={category.wordsLearned}
            navigateTo={`${routes.category}/${category.id}`}
            wordsCount={category.wordIds.length}
            pictureUrl={category.pictureUrl}
          />
        ))}
      </div>
    </div>
  );
};
