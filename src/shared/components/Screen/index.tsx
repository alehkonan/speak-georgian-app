import type { To } from 'react-router-dom';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from './useScrollPosition';
import { IconButton } from '../IconButton';
import { ChevronLeftIcon } from 'src/shared/icons';
import { Loader } from '../Loader';

type Props = {
  name: string;
  showName?: boolean;
  backTo?: To;
  isLoading?: boolean;
};

export const Screen = ({
  children,
  name,
  showName,
  backTo,
  isLoading,
}: PropsWithChildren<Props>) => {
  const { onScroll, containerRef } = useScrollPosition(name);

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
      <div
        className={`flex ${
          backTo ? 'justify-between' : 'justify-center'
        }  items-center gap-3`}
      >
        {backTo && (
          <IconButton to={backTo}>
            <ChevronLeftIcon />
          </IconButton>
        )}
        {showName && <h2 className="text-xl font-bold">{name}</h2>}
        {backTo && <IconButton className="invisible" />}
      </div>
      {isLoading ? <Loader /> : children}
    </div>
  );
};
