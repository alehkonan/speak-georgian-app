import { ComponentProps } from 'react';
import classNames from 'classnames';
import { LoaderIcon } from 'src/shared/icons';

type Props = ComponentProps<'button'> & {
  isLoading?: boolean;
};

export const IconButton = ({
  className,
  children,
  isLoading,
  ...props
}: Props) => {
  return (
    <button
      className={classNames([
        'grid place-items-center',
        'rounded-full',
        'w-9 h-9',
        'border',
        className,
      ])}
      {...props}
    >
      {isLoading ? <LoaderIcon /> : children}
    </button>
  );
};
