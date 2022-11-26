import { ComponentProps } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

type Props = ComponentProps<'header'>;

export const Header = ({ className, ...props }: Props) => {
  const { pathname } = useLocation();

  return (
    <header
      className={classNames(['p-4 flex justify-between shadow', className])}
      {...props}
    >
      <h1>{pathname}</h1>
      <div>Avatar</div>
    </header>
  );
};
