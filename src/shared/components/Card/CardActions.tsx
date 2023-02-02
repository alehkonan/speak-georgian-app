import classNames from 'classnames';
import { useFavorites } from 'src/api/favorites';
import { useStatistics } from 'src/api/statistics';
import { useDeleteWord } from 'src/api/words';
import { CheckIcon, DeleteIcon, HeartIcon } from 'src/shared/icons';
import { IconButton } from '../Button/IconButton';

type Props = {
  wordId: number;
  isLearned: boolean | undefined;
  isFavorite: boolean | undefined;
};

const getClassName = (isActive?: boolean) =>
  classNames([
    'text-raisin-black',
    'hover:opacity-50',
    {
      'opacity-10': !isActive,
      'opacity-90': isActive,
    },
  ]);

export const CardActions = ({ wordId, isFavorite, isLearned }: Props) => {
  const favorites = useFavorites();
  const statistics = useStatistics();
  const { deleteWord, isDeleting } = useDeleteWord();

  return (
    <div className="flex gap-2 justify-self-end self-end">
      <IconButton
        className={getClassName()}
        onClick={() => deleteWord(wordId)}
        isLoading={isDeleting}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        className={getClassName(isLearned)}
        onClick={() => statistics.markAsLearned(wordId)}
        isLoading={statistics.isLoading}
        disabled={statistics.isLoading}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        className={getClassName(isFavorite)}
        onClick={() => favorites.switchFavorite(wordId)}
        isLoading={favorites.isLoading}
        disabled={favorites.isLoading}
      >
        <HeartIcon />
      </IconButton>
    </div>
  );
};
