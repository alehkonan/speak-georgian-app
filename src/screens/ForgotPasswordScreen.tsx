import { paths } from 'src/app/paths';
import { Button } from 'src/shared/components/Button';
import { Form } from 'src/shared/components/Form';
import { FormInput } from 'src/shared/components/FormInput';
import { Screen } from 'src/shared/components/Screen';
import zod from 'zod';

const schema = zod.object({
  email: zod.string().email(),
});

type FormType = zod.infer<typeof schema>;

export const ForgotPasswordScreen = () => {
  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <Screen prevRoute={paths.login} title="Reset password">
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <FormInput<FormType> label="Email" name="email" type="email" />
        <Button primary>Reset password</Button>
      </Form>
    </Screen>
  );
};
