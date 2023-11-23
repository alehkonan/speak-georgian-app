import { Card, CardBody, Chip, Image } from '@nextui-org/react';
import { type To, useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  pictureUrl?: string | null;
  path: To;
};

export const CategoryCard = ({ title, pictureUrl, path }: Props) => {
  const navigate = useNavigate();

  return (
    <Card shadow="sm" disableRipple isPressable onPress={() => navigate(path)}>
      <CardBody className="p-0">
        <Chip className="absolute z-20 m-1" variant="faded">
          {title}
        </Chip>
        <Image
          alt={title}
          className="aspect-square object-cover"
          src={pictureUrl || undefined}
          removeWrapper
        />
      </CardBody>
    </Card>
  );
};
