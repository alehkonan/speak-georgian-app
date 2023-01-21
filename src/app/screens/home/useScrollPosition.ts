import { useEffect, useRef } from 'react';

export const useScrollPosition = (containerName: string) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const currentPosition = e.currentTarget.scrollTop;
    localStorage.setItem(containerName, String(currentPosition));
  };

  useEffect(() => {
    const scrollPosition = localStorage.getItem(containerName);

    if (containerRef.current && scrollPosition) {
      containerRef.current.scrollTo({
        top: Number(scrollPosition),
      });
    }
  }, []);

  return {
    onScroll,
    containerRef,
  };
};
