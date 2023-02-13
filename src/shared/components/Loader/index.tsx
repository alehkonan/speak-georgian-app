import classNames from 'classnames';
import { LoaderIcon } from 'src/shared/icons';

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
