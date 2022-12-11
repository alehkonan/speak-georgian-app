import { Link, useParams } from 'react-router-dom';
import { useCategories } from 'src/api/categories';
import { useWords } from 'src/api/words';
import { WordCard } from 'src/shared/components';
import { ChevronLeftIcon } from 'src/shared/icons';
import { routes } from '..';
import { CategoryParams } from './params';

export const CategoryScreen = () => {
  const params = useParams<CategoryParams>();
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
    <div className="grid gap-5 h-full grid-rows-[auto_1fr] px-3 -mx-3">
      <Link to={routes.home} className="flex items-center gap-3">
        <ChevronLeftIcon className="text-dark" />
        <h3 className="text-dark text-2xl font-bold">
          {categories?.find(({ id }) => id === categoryId)?.name}
        </h3>
      </Link>
      <div className="h-full overflow-auto grid auto-rows-min gap-3 p-2 -m-2">
        {words?.map((word) => (
          <WordCard
            key={word.id}
            nameEn={word.name_en}
            nameKa={word.name_ka}
            transcription={word.transcription}
            pictureUrl={word.picture_url}
          />
        ))}
      </div>
    </div>
  );
};
