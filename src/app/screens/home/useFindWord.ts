import React, { useCallback, useState } from 'react';
import { useSearchWords } from 'src/api/words';
import { useDebounce } from 'src/shared/hooks';

export const useFindWord = () => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedValue = useDebounce(searchValue, 500);

  const { results, isSearching } = useSearchWords(debouncedValue);

  const onSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setSearchValue(e.target.value.trim()),
    []
  );

  return {
    onSearch,
    searchValue,
    isSearching,
    results,
  };
};
