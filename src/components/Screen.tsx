import { PropsWithChildren } from 'react';
import { type To } from 'react-router-dom';
import { ChevronLeftIcon } from 'src/assets/icons';
import { twJoin } from 'tailwind-merge';

import { IconButton } from './IconButton';
import { Loader } from './Loader';

type Props = {
  title?: string;
  prevRoute?: To;
  isLoading?: boolean;
};

export const Screen = ({
  children,
  title,
  prevRoute,
  isLoading,
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex h-full flex-col">
      <header
        className={twJoin([
          'flex items-center gap-3 p-4',
          prevRoute ? 'justify-between' : 'justify-center',
        ])}
      >
        {prevRoute && (
          <IconButton to={prevRoute}>
            <ChevronLeftIcon />
          </IconButton>
        )}
        <h2 className="text-xl font-bold">{title}</h2>
        {prevRoute && <IconButton className="invisible" />}
      </header>
      {isLoading ? <Loader /> : children}
    </div>
  );
};
