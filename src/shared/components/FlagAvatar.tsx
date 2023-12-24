import { Avatar } from '@nextui-org/react';
import { type Language } from 'src/types';

type Props = {
  language?: Language | null;
};

const getSrc = (code: string) => `https://flagcdn.com/${code}.svg`;

export const FlagAvatar = ({ language }: Props) => {
  if (!language?.code) return null;

  return (
    <Avatar
      aria-label={language?.label}
      className="h-4 w-4"
      src={getSrc(language.code)}
    />
  );
};
