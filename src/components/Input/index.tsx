import React, { ComponentPropsWithRef } from 'react';
import cn from 'classnames';

type Props = ComponentPropsWithRef<'input'>;

export const Input = ({ className, ...props }: Props) => {
  return (
    <input className={cn(['p-2', 'border rounded-lg', className])} {...props} />
  );
};
