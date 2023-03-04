import { Word } from 'src/services/supabase';
import { Empty, WordCard } from 'src/shared/components';

type Props = {
  results: Word[] | undefined;
  isSearching: boolean;
};

export const SearchResults = ({ results, isSearching }: Props) => {
  if (isSearching) return <p>Searching...</p>;

  return (
    <div className="grid auto-rows-min lg:grid-cols-2 gap-3">
      {results?.length ? (
        results.map((word) => <WordCard key={word.id} {...word} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};
