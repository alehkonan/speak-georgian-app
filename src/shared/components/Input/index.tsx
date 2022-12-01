import { ComponentProps, forwardRef } from 'react';
import classNames from 'classnames';

type Props = ComponentProps<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames([
          'p-2',
          'border border-gray-800 rounded-lg',
          className,
        ])}
        {...props}
      />
    );
  }
);
