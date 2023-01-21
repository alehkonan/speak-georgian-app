import { WordCard } from 'src/shared/components';
import type { Word } from 'src/shared/types';

type Props = {
  results: Word[] | undefined;
  isSearching: boolean;
};

export const SearchResults = ({ results, isSearching }: Props) => {
  if (isSearching) return <p>Searching...</p>;

  return (
    <div className="grid auto-rows-min lg:grid-cols-2 gap-3 p-2 -m-2">
      {results?.length ? (
        results.map((word) => (
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
        ))
      ) : (
        <p className="text-lg text-raisin-black opacity-50 justify-self-center">
          Can't find this word
        </p>
      )}
    </div>
  );
};
