import { useEffect, useRef } from 'react';

const CATEGORIES_POSITION = 'categoriesPosition';

export const useContainerPosition = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentPosition = e.currentTarget.scrollTop;
    localStorage.setItem(CATEGORIES_POSITION, String(currentPosition));
  };

  useEffect(() => {
    const scrollPosition = localStorage.getItem(CATEGORIES_POSITION);

    if (scrollContainerRef.current && scrollPosition) {
      scrollContainerRef.current.scrollTo({
        top: Number(scrollPosition),
      });
    }
  }, []);

  return {
    onScroll,
    scrollContainerRef,
  };
};
