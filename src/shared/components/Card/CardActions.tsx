import { useFavorites } from 'src/api/favorites';
import { useStatistics } from 'src/api/statistics';
import { CheckIcon, HeartIcon } from 'src/shared/icons';
import { IconButton } from '../Button/IconButton';

type Props = {
  wordId: number;
  isLearned: boolean | undefined;
  isFavorite: boolean | undefined;
};

export const CardActions = ({ wordId, isFavorite, isLearned }: Props) => {
  const favorites = useFavorites();
  const statistics = useStatistics();

  return (
    <div className="flex gap-3 justify-self-end self-end">
      <IconButton
        className={`text-raisin-black opacity-${isLearned ? 90 : 10}`}
        onClick={() => statistics.markAsLearned(wordId)}
        isLoading={statistics.isLoading}
        disabled={statistics.isLoading}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        className={`text-raisin-black opacity-${isFavorite ? 90 : 10}`}
        onClick={() => favorites.switchFavorite(wordId)}
        isLoading={favorites.isLoading}
        disabled={favorites.isLoading}
      >
        <HeartIcon />
      </IconButton>
    </div>
  );
};
