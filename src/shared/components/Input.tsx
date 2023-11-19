import classNames from 'classnames';
import { ComponentProps, forwardRef } from 'react';

type Props = ComponentProps<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames([
          'p-2',
          'border border-gray-400 rounded-lg',
          className,
        ])}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
