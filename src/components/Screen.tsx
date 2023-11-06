import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import type { To } from 'react-router-dom';
import { ChevronLeftIcon } from 'src/assets/icons';

import { IconButton } from './IconButton';
import { Loader } from './Loader';

type Props = {
  title?: string;
  backTo?: To;
  isLoading?: boolean;
};

export const Screen = ({
  children,
  title,
  backTo,
  isLoading,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={classNames([
        'h-full overflow-auto overscroll-contain',
        'flex flex-col gap-3',
        'px-2 -mx-2',
      ])}
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
        <h2 className="text-xl font-bold">{title}</h2>
        {backTo && <IconButton className="invisible" />}
      </div>
      {isLoading ? <Loader /> : children}
    </div>
  );
};
