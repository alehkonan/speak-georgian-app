import classNames from 'classnames';
import { IconButton, Input } from 'src/shared/components';
import { CloseIcon } from 'src/shared/icons';
import { Categories } from './Categories';
import { DailyWord } from './DailyWord';
import { Greeting } from './Greeting';
import { SearchResults } from './SearchResults';
import { useScrollPosition } from './useScrollPosition';
import { useSearch } from './useSearch';

export const HomeScreen = () => {
  const {
    searchValue,
    isSearching,
    onSearch,
    clearSearch,
    results,
    hasSearch,
  } = useSearch();
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
      <div className="relative">
        <Input
          className="sticky top-0 w-full"
          placeholder="Find a word..."
          value={searchValue}
          onChange={({ target }) => onSearch(target.value.trim())}
        />
        <div className="absolute right-0 top-0 h-full flex items-center p-1">
          <IconButton onClick={clearSearch}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      {hasSearch ? (
        <SearchResults results={results} isSearching={isSearching} />
      ) : (
        <Categories />
      )}
    </div>
  );
};
