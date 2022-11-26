import React, { PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col p-1 border rounded-md">{children}</div>;
};
