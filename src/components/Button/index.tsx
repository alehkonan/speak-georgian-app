import React, { ComponentProps } from 'react';
import cn from 'classnames';

type Props = ComponentProps<'button'>;

export const Button = ({ className, children, ...props }: Props) => {
  return (
    <button className={cn(['p-2', 'border rounded-lg', className])} {...props}>
      {children}
    </button>
  );
};
