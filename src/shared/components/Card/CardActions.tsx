import classNames from 'classnames';
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
        className={classNames([
          'text-raisin-black',
          {
            'opacity-10': !isLearned,
            'opacity-90': isLearned,
          },
        ])}
        onClick={() => statistics.markAsLearned(wordId)}
        isLoading={statistics.isLoading}
        disabled={statistics.isLoading}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        className={classNames([
          'text-raisin-black',
          {
            'opacity-10': !isFavorite,
            'opacity-90': isFavorite,
          },
        ])}
        onClick={() => favorites.switchFavorite(wordId)}
        isLoading={favorites.isLoading}
        disabled={favorites.isLoading}
      >
        <HeartIcon />
      </IconButton>
    </div>
  );
};
