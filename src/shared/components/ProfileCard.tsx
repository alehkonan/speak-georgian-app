import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  title: string;
  avatar?: ReactNode;
};

export const ProfileCard = ({
  children,
  avatar,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <Card>
      <CardHeader className="justify-between">
        <p>{title}</p>
        {avatar}
      </CardHeader>
      <Divider />
      <CardBody className="gap-2">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-[240px_auto]">
          {children}
        </div>
      </CardBody>
    </Card>
  );
};
