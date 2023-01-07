import { Link, useParams } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { useWords } from 'src/api/words';
import { RouteParam } from 'src/app/params';
import { routes } from 'src/app/routes';
import { WordCard } from 'src/shared/components';
import { ChevronLeftIcon } from 'src/shared/icons';

export const CategoryScreen = () => {
  const params = useParams<RouteParam>();
  const categoryId = Number(params.id);
  const { words, isLoading, error } = useWords(categoryId);
  const { categories } = useCategories();

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
    <div className="h-full flex flex-col gap-3 px-3 -mx-3">
      <div>
        <Link to={routes.home} className="inline-flex items-center gap-3">
          <ChevronLeftIcon className="text-dark" />
          <h3 className="text-dark text-2xl font-bold">
            {categories?.find(({ id }) => id === categoryId)?.name}
          </h3>
        </Link>
      </div>
      <div className="flex-1 overflow-auto overscroll-contain grid auto-rows-min lg:grid-cols-2 gap-3 p-2 -m-2">
        {words?.map((word) => (
          <WordCard
            id={word.id}
            key={word.id}
            nameEn={word.name_en}
            nameKa={word.name_ka}
            transcription={word.transcription}
            pictureUrl={word.picture_url}
            soundUrl={word.sound_url}
            categoryId={word.category_id}
            isFavorite={word.favorites}
          />
        ))}
      </div>
    </div>
  );
};
