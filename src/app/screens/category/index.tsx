import { useNavigate, useParams } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { useUser } from 'src/api/user';
import { useCategoryWords } from 'src/api/words';
import { RouteParam } from 'src/app/params';
import { routes } from 'src/app/routes';
import {
  ErrorMessage,
  IconButton,
  Loader,
  WordCard,
} from 'src/shared/components';
import { ChevronLeftIcon } from 'src/shared/icons';

export const CategoryScreen = () => {
  const navigate = useNavigate();
  const params = useParams<RouteParam>();
  const categoryId = Number(params.id);
  const { user } = useUser();
  const { words, isLoading, error } = useCategoryWords(categoryId, user?.id);
  const { categories } = useCategories();

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="h-full flex flex-col gap-3 px-3 -mx-3">
      <div className="flex items-center gap-2">
        <IconButton
          title="Back to categories"
          onClick={() => navigate(routes.home)}
        >
          <ChevronLeftIcon />
        </IconButton>
        <h2 className="text-xl font-bold">
          {categories?.find(({ id }) => id === categoryId)?.name}
        </h2>
      </div>
      <div className="flex-1 overflow-auto overscroll-contain grid auto-rows-min lg:grid-cols-2 gap-3 p-2 -m-2">
        {words?.map((word) => (
          <WordCard key={word.id} {...word} />
        ))}
      </div>
    </div>
  );
};
