import { useNavigate } from 'react-router-dom';
import { useUpdatePassword } from 'src/features/auth';
import { Button, Form, InputField } from 'src/shared/components';
import * as zod from 'zod';
import { routes } from '..';

const schema = zod.object({
  password: zod
    .string()
    .min(8, 'Should contain at least 8 characters')
    .regex(/\d/, 'Should contain a digit')
    .regex(/\W/, 'Should contain a symbol')
    .regex(/[A-Z]/, 'Should contain uppercase letter')
    .regex(/[a-z]/, 'Should contain lowercase letter'),
});

type FormType = zod.infer<typeof schema>;

export const UpdatePasswordScreen = () => {
  const navigate = useNavigate();
  const { onUpdatePassword, isLoading } = useUpdatePassword();

  const onSubmit = (data: FormType) => {
    onUpdatePassword(data.password);
  };

  return (
    <div className="p-4 grid gap-4">
      <h2 className="text-xl font-bold">Reset password</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <InputField<FormType>
          name="password"
          type="password"
          label="New password"
        />
        <Button primary disabled={isLoading}>
          Update password
        </Button>
        <Button onClick={() => navigate(routes.home)}>Go to main screen</Button>
      </Form>
    </div>
  );
};
