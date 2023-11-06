import { zodResolver } from '@hookform/resolvers/zod';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ZodSchema } from 'zod';

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
        noValidate
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};
