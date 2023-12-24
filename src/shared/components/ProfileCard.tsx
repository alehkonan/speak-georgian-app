import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { type PropsWithChildren, type ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
  title: string;
  avatar?: ReactNode;
  edgeValues?: boolean;
};

export const ProfileCard = ({
  children,
  avatar,
  edgeValues = false,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <Card>
      <CardHeader className="justify-between">
        <p>{title}</p>
        {avatar}
      </CardHeader>
      <Divider />
      <CardBody
        className={twJoin([
          'grid gap-2 items-center',
          edgeValues ? 'grid-cols-[1fr_70px]' : 'grid-cols-2',
        ])}
      >
        {children}
      </CardBody>
    </Card>
  );
};
