import { Input, InputProps } from '@nextui-org/react';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

type Props<FormType extends FieldValues> = Omit<
  InputProps,
  'name' | 'defaultValue' | 'disabled'
> &
  UseControllerProps<FormType>;

export const FormInput = <FormType extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  disabled,
  color,
  ...inputProps
}: Props<FormType>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
  });

  return (
    <Input
      color={error ? 'danger' : color}
      errorMessage={error?.message}
      {...field}
      {...inputProps}
    />
  );
};
