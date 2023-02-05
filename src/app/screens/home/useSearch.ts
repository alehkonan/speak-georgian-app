import { useCallback, useState } from 'react';
import { useSearchWords } from 'src/api/words';
import { useDebounce } from 'src/shared/hooks';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, 500);

  const { results, isSearching } = useSearchWords(debouncedValue);

  const onSearch = useCallback((value: string) => setSearchValue(value), []);

  const clearSearch = useCallback(() => setSearchValue(''), []);

  return {
    searchValue,
    results,
    isSearching,
    onSearch,
    clearSearch,
    hasSearch: Boolean(debouncedValue) && Boolean(searchValue),
  };
};
