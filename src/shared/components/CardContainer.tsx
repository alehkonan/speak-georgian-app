import type { PropsWithChildren } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { twJoin } from 'tailwind-merge';

type Props = {
  isEmpty?: boolean;
};

export const CardContainer = ({
  children,
  isEmpty,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={twJoin([
        'grid auto-rows-min justify-center gap-2',
        'grid-cols-auto-fill-250 sm:grid-cols-auto-fit-250',
      ])}
    >
      {isEmpty ? (
        <Card className="border bg-slate-100 sm:w-96" shadow="none">
          <CardBody>
            <p className="text-center font-semibold">Empty</p>
          </CardBody>
        </Card>
      ) : (
        children
      )}
    </div>
  );
};
