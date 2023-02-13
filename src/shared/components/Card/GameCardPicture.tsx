import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useUser } from 'src/api/user';
import { useGetUserSettings } from 'src/api/userSettings';

export const GameCardPicture = ({
  pictureUrl,
  nameEn,
}: {
  pictureUrl: string;
  nameEn: string;
}) => {
  const { user } = useUser();
  const { settings } = useGetUserSettings(user?.id);
  const [isShown, setShown] = useState(false);

  useEffect(() => {
    if (settings) {
      setShown(settings.shouldShowPictureInGame);
    }
  }, [settings]);

  return (
    <div className="w-1/2 aspect-square relative">
      <img
        className={classNames([
          'w-full h-full object-cover object-top absolute',
          { 'opacity-0': !isShown },
        ])}
        src={pictureUrl}
        alt={nameEn}
      />
      {!isShown && (
        <button
          className="w-full h-full absolute grid place-items-center"
          onClick={() => setShown(true)}
        >
          <span className="text-raisin-black opacity-50 text-sm font-semibold">
            Tap to see the picture
          </span>
        </button>
      )}
    </div>
  );
};
