import { FC, useMemo, useState } from 'react';
import { useFavorites } from 'src/api/favorites';
import { useStatistics } from 'src/api/statistics';
import { CheckIcon, HeartIcon, TranslateIcon } from 'src/shared/icons';

type CardAction = {
  id: number;
  Icon: FC;
  onClick: () => void;
  isActive: boolean;
  isLoading?: boolean;
};

type Options = {
  wordId: number;
  isLearned: boolean;
  isFavorite: boolean;
};

export const useCardActions = ({ wordId, isFavorite, isLearned }: Options) => {
  const [isTranslationShown, setTranslationShown] = useState(false);
  const favorites = useFavorites();
  const statistics = useStatistics();

  const cardActions = useMemo<CardAction[]>(
    () => [
      {
        id: 1,
        Icon: TranslateIcon,
        onClick: () => setTranslationShown(!isTranslationShown),
        isActive: isTranslationShown,
      },
      {
        id: 2,
        Icon: CheckIcon,
        onClick: () => statistics.markAsLearned(wordId),
        isActive: isLearned,
        isLoading: statistics.isLoading,
      },
      {
        id: 3,
        Icon: HeartIcon,
        onClick: () => favorites.switchFavorite(wordId),
        isActive: isFavorite,
        isLoading: favorites.isLoading,
      },
    ],
    [wordId, isLearned, isFavorite, statistics, favorites, isTranslationShown]
  );

  return { cardActions, isTranslationShown };
};
