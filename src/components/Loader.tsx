import classNames from 'classnames';
import { LoaderIcon } from 'src/assets/icons';

type Props = {
  fullScreen?: boolean;
};

export const Loader = ({ fullScreen }: Props) => {
  return (
    <div
      className={classNames([
        'grid place-items-center',
        { 'h-screen': fullScreen },
      ])}
    >
      <LoaderIcon className="text-maize" />
    </div>
  );
};
