import classNames from 'classnames';
import { ComponentProps } from 'react';
import type { To } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LoaderIcon } from 'src/assets/icons';

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
