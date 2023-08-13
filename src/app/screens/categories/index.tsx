import { useCategories } from 'src/api/categories';
import { useUser } from 'src/api/user';
import { routes } from 'src/app/routes';
import { CategoryCard, IconButton, Input, Screen } from 'src/shared/components';
import { CloseIcon } from 'src/shared/icons';
import { SearchResults } from './SearchResults';
import { useSearch } from './useSearch';

const WordCategoriesScreen = () => {
  const { user } = useUser();
  const { categories, isLoading } = useCategories(user?.id);
  const { searchValue, isSearching, onSearch, clearSearch, results, hasSearch } = useSearch();

  return (
    <Screen name="Categories" showName backTo={routes.home} isLoading={isLoading}>
      <div className="relative">
        <Input
          className="sticky top-0 w-full"
          placeholder="Find a word..."
          value={searchValue}
          onChange={({ target }) => onSearch(target.value.trim())}
        />
        <div className="absolute right-0 top-0 h-full flex items-center p-1">
          <IconButton title="Clear search" onClick={clearSearch}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      {hasSearch ? (
        <SearchResults results={results} isSearching={isSearching} />
      ) : (
        <div className="grid grid-cols-2 auto-rows-min lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          {categories?.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              learnedWordsCount={category.wordsLearned}
              navigateTo={`${routes.category}/${category.id}`}
              wordsCount={category.wordIds.length}
              pictureUrl={category.pictureUrl}
            />
          ))}
        </div>
      )}
    </Screen>
  );
};

export default WordCategoriesScreen;
