import { useResetPassword } from 'src/features/auth';
import { Button, Form, InputField } from 'src/shared/components';
import * as zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
});

type FormType = zod.infer<typeof schema>;

export const ForgotPasswordScreen = () => {
  const { onUpdatePassword, isLoading } = useResetPassword();

  const onSubmit = (data: FormType) => {
    onUpdatePassword(data.email);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Reset password</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType> name="email" type="email" label="Email" />
        <Button primary disabled={isLoading}>
          Reset password
        </Button>
      </Form>
    </div>
  );
};
