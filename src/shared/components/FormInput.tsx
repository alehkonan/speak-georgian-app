import { ComponentProps, useId } from 'react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

import { ErrorMessage } from './ErrorMessage';
import { Input } from './Input';

type Props<FormType extends FieldValues> = {
  label?: JSX.Element | string;
  type?: ComponentProps<'input'>['type'];
} & UseControllerProps<FormType>;

export const FormInput = <FormType extends FieldValues>({
  label,
  type,
  ...props
}: Props<FormType>) => {
  const id = useId();
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <div className="grid">
      <label className="mb-1 text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <Input className="w-full" id={id} type={type} {...field} />
      {error?.message && <ErrorMessage message={error.message} />}
    </div>
  );
};
