import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

export const GameCardPicture = ({
  pictureUrl,
  nameEn,
}: {
  pictureUrl: string;
  nameEn: string;
}) => {
  const [isShown, setShown] = useState(false);

  return (
    <div className="relative aspect-square w-1/2">
      <img
        className={twJoin([
          'w-full h-full object-cover object-top absolute',
          !isShown && 'opacity-0',
        ])}
        alt={nameEn}
        src={pictureUrl}
      />
      {!isShown && (
        <button
          className="absolute grid h-full w-full place-items-center"
          onClick={() => setShown(true)}
        >
          <span className="text-sm font-semibold text-raisin-black opacity-50">
            Tap to see the picture
          </span>
        </button>
      )}
    </div>
  );
};
