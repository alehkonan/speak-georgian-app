import { Button } from '@nextui-org/react';
import { type ComponentPropsWithRef, forwardRef } from 'react';

type Props = Omit<ComponentPropsWithRef<'input'>, 'className' | 'type'>;

export const FileInput = forwardRef<HTMLInputElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <Button as="label" size="lg">
        {children}
        <input ref={ref} className="hidden" type="file" {...props} />
      </Button>
    );
  },
);

FileInput.displayName = 'FileInput';
