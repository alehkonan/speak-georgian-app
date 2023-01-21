import classNames from 'classnames';
import { Input } from 'src/shared/components';
import { Categories } from './Categories';
import { DailyWord } from './DailyWord';
import { Greeting } from './Greeting';
import { SearchResults } from './SearchResults';
import { useScrollPosition } from './useScrollPosition';
import { useSearch } from './useSearch';

export const HomeScreen = () => {
  const { isSearching, onSearch, results, hasSearch } = useSearch();
  const { onScroll, containerRef } = useScrollPosition('home-screen');

  return (
    <div
      className={classNames([
        'h-full overflow-auto overscroll-contain',
        'flex flex-col gap-3',
        'px-2 -mx-2',
      ])}
      ref={containerRef}
      onScroll={onScroll}
    >
      <Greeting />
      <DailyWord />
      <Input
        className="sticky top-0"
        placeholder="Find a word..."
        onChange={({ target }) => onSearch(target.value.trim())}
      />
      {hasSearch ? (
        <SearchResults results={results} isSearching={isSearching} />
      ) : (
        <Categories />
      )}
    </div>
  );
};
