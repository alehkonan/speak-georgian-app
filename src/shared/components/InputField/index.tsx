import { ComponentProps, useId } from 'react';
import { Input } from '../Input';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type Props<FormType extends FieldValues> = {
  label?: JSX.Element | string;
  type?: ComponentProps<'input'>['type'];
} & UseControllerProps<FormType>;

export const InputField = <FormType extends FieldValues>({
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
      <label htmlFor={id} className="text-sm font-semibold mb-1">
        {label}
      </label>
      <Input id={id} className="w-full" type={type} {...field} />
      {error && (
        <span className="text-center text-xs text-red-500">
          {error.message}
        </span>
      )}
    </div>
  );
};
