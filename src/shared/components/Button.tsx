import classNames from 'classnames';
import { ComponentProps, HTMLAttributes } from 'react';
import type { To } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = ComponentProps<'button'> & {
  primary?: boolean;
  to?: To;
};

const buttonClassName = (
  primary: boolean,
): HTMLAttributes<HTMLButtonElement>['className'] =>
  classNames([
    'flex justify-center items-center gap-1',
    'px-5 py-2',
    'rounded-3xl',
    'min-w-[120px]',
    'border border-ripe-mango',
    'disabled:border disabled:border-gray-400',
    'disabled:bg-gray-50 disabled:text-gray-400 disabled:bg-none',
    {
      'bg-ripe-mango text-white': primary,
      'bg-white text-ripe-mango': !primary,
    },
  ]);

export const Button = ({ children, primary = false, to, ...props }: Props) => {
  if (to)
    return (
      <Link className={buttonClassName(primary)} to={to}>
        {children}
      </Link>
    );

  return (
    <button className={buttonClassName(primary)} {...props}>
      {children}
    </button>
  );
};
