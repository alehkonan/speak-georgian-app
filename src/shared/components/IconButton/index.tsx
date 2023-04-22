import type { To } from 'react-router-dom';
import { ComponentProps } from 'react';
import { LoaderIcon } from 'src/shared/icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = ComponentProps<'button'> & {
  isLoading?: boolean;
  to?: To;
};

const buttonClassName = 'grid place-items-center rounded-full w-9 h-9 border';

export const IconButton = ({
  className,
  children,
  isLoading,
  to,
  ...props
}: Props) => {
  if (to)
    return (
      <Link to={to} className={classNames(buttonClassName, className)}>
        {children}
      </Link>
    );

  return (
    <button className={classNames(buttonClassName, className)} {...props}>
      {isLoading ? <LoaderIcon /> : children}
    </button>
  );
};
