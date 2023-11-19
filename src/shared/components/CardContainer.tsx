import { PropsWithChildren } from 'react';
import { twJoin } from 'tailwind-merge';

export const CardContainer = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={twJoin([
        'max-w-5xl mx-auto p-4',
        'grid auto-rows-min justify-center gap-2',
        'grid-cols-auto-fill-250 sm:grid-cols-auto-fit-250',
      ])}
    >
      {children}
    </div>
  );
};
