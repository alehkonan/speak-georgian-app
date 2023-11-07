import classNames from 'classnames';
import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  text?: string;
  className?: string;
};

export const Divider = ({ text, className, ...props }: Props) => {
  return (
    <div className={classNames(['flex items-center', className])} {...props}>
      <div className="h-[1px] flex-1 rounded bg-raisin-black opacity-30"></div>
      {text && (
        <p className="mx-1 lowercase text-raisin-black opacity-50">{text}</p>
      )}
      <div className="h-[1px] flex-1 rounded bg-raisin-black opacity-30"></div>
    </div>
  );
};
