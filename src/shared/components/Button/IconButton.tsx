import { ComponentProps } from 'react';
import classNames from 'classnames';

type Props = ComponentProps<'button'>;

export const IconButton = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={classNames([
        'grid place-items-center',
        'rounded-full',
        'w-9 h-9',
        'text-white',
        'bg-gradient-to-t from-ripe-mango via-orange-yellow to-caramel',
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};
