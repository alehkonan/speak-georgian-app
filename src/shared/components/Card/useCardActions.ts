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
  userId: string | undefined;
  wordId: number;
  isLearned: boolean;
  isFavorite: boolean;
};

export const useCardActions = ({
  userId,
  wordId,
  isFavorite,
  isLearned,
}: Options) => {
  const [isTranslationShown, setTranslationShown] = useState(false);

  const favorites = useFavorites();
  const statistics = useStatistics();

  const cardActions = useMemo<CardAction[]>(() => {
    if (!userId)
      return [
        {
          id: 1,
          Icon: TranslateIcon,
          onClick: () => setTranslationShown(!isTranslationShown),
          isActive: isTranslationShown,
        },
      ];

    return [
      {
        id: 1,
        Icon: TranslateIcon,
        onClick: () => setTranslationShown(!isTranslationShown),
        isActive: isTranslationShown,
      },
      {
        id: 2,
        Icon: CheckIcon,
        onClick: () => statistics.markAsLearned({ userId, wordId }),
        isActive: isLearned,
        isLoading: statistics.isLoading,
      },
      {
        id: 3,
        Icon: HeartIcon,
        onClick: () => favorites.switchFavorite({ userId, wordId }),
        isActive: isFavorite,
        isLoading: favorites.isLoading,
      },
    ];
  }, [
    userId,
    wordId,
    isLearned,
    isFavorite,
    statistics,
    favorites,
    isTranslationShown,
  ]);

  return { cardActions, isTranslationShown };
};
