import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useSession } from 'src/api/session';
import { routes } from 'src/app/routes';
import { DailyWord } from 'src/app/widgets';
import { IconButton, Input } from 'src/shared/components';
import { ChevronLeftIcon, CloseIcon } from 'src/shared/icons';
import { Categories } from './Categories';
import { SearchResults } from './SearchResults';
import { useScrollPosition } from './useScrollPosition';
import { useSearch } from './useSearch';

export const HomeScreen = () => {
  const { session } = useSession();
  const navigate = useNavigate();

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
      {session ? (
        <>
          <h3 className="text-raisin-black text-2xl font-bold">
            Hello, {session.user.user_metadata.name}!
          </h3>
          <DailyWord />
        </>
      ) : (
        <div className="flex items-center gap-3">
          <IconButton
            title="Back to Welcome screen"
            onClick={() => navigate(routes.welcome)}
          >
            <ChevronLeftIcon />
          </IconButton>
          <h2 className="text-xl font-bold">Categories</h2>
        </div>
      )}

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
