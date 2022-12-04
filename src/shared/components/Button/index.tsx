import { ComponentProps } from 'react';
import classNames from 'classnames';

type Props = ComponentProps<'button'> & {
  primary?: boolean;
};

export const Button = ({ className, children, primary, ...props }: Props) => {
  return (
    <button
      className={classNames([
        'flex justify-center items-center gap-1',
        'px-5 py-2',
        'rounded-3xl',
        'min-w-[120px]',
        'disabled:border disabled:border-gray-400',
        'disabled:bg-gray-50 disabled:text-gray-400 disabled:bg-none',
        {
          'text-white': primary,
          'text-amber-500': !primary,
        },
        {
          'bg-gradient-to-t from-amber-500 to-amber-200': primary,
          'border border-amber-500': !primary,
        },
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
