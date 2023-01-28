import { useFavorites } from 'src/api/favorites';

type Props = {
  wordId: number;
  isFavorite: boolean | undefined;
};

export const FavoriteButton = ({ wordId, isFavorite }: Props) => {
  const { switchFavorite, isLoading } = useFavorites();

  return (
    <button
      className="text-raisin-black text-sm font-semibold opacity-50"
      onClick={() => switchFavorite(wordId)}
      disabled={isLoading}
    >
      {isLoading
        ? 'Loading...'
        : isFavorite
        ? 'Remove from favorites'
        : 'Add to favorites'}
    </button>
  );
};
