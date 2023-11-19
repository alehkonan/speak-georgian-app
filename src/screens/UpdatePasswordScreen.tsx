import { useNavigate } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { Button } from 'src/shared/components/Button';
import { Form } from 'src/shared/components/Form';
import { FormInput } from 'src/shared/components/FormInput';
import zod from 'zod';

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

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <div className="grid gap-4 p-4">
      <h2 className="text-xl font-bold">Reset password</h2>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <FormInput<FormType>
          label="New password"
          name="password"
          type="password"
        />
        <Button primary>Update password</Button>
        <Button onClick={() => navigate(paths.root)}>Go to main screen</Button>
      </Form>
    </div>
  );
};
