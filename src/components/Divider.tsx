import classNames from 'classnames';
import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  text?: string;
  className?: string;
};

export const Divider = ({ text, className, ...props }: Props) => {
  return (
    <div className={classNames(['flex items-center', className])} {...props}>
      <div className="flex-1 h-[1px] rounded bg-raisin-black opacity-30"></div>
      {text && (
        <p className="mx-1 lowercase text-raisin-black opacity-50">{text}</p>
      )}
      <div className="flex-1 h-[1px] rounded bg-raisin-black opacity-30"></div>
    </div>
  );
};
