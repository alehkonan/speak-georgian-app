import { Word } from 'src/services/supabase';
import { WordCard } from 'src/shared/components';

type Props = {
  results: Word[] | undefined;
  isSearching: boolean;
};

export const SearchResults = ({ results, isSearching }: Props) => {
  if (isSearching) return <p>Searching...</p>;

  return (
    <div className="grid auto-rows-min lg:grid-cols-2 gap-3 p-2 -m-2">
      {results?.length ? (
        results.map((word) => <WordCard key={word.id} {...word} />)
      ) : (
        <p className="text-lg text-raisin-black opacity-50 justify-self-center">
          Can't find this word
        </p>
      )}
    </div>
  );
};
