import type { PropsWithChildren } from 'react';
import type { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

type Props<FormType> = {
  schema: ZodSchema;
  onSubmit: (data: FormType) => void;
  className?: string;
};

export const Form = <FormType extends object>({
  schema,
  children,
  onSubmit,
  className,
}: PropsWithChildren<Props<FormType>>) => {
  const methods = useForm<FormType>({ resolver: zodResolver(schema) });

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        noValidate
        onSubmit={methods.handleSubmit(onSubmit, console.error)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
