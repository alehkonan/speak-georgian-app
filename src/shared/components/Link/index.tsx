import classNames from 'classnames';
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

type LinkComponent = ForwardRefExoticComponent<
  LinkProps & RefAttributes<HTMLAnchorElement>
>;

export const Link: LinkComponent = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <RouterLink
        className={classNames('text-orange-500 underline', className)}
        ref={ref}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }
);
