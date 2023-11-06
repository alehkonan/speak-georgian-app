import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { FormInput } from 'src/components/FormInput';
import { Screen } from 'src/components/Screen';
import { routes } from 'src/routes';
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
    <Screen title="Reset password" backTo={routes.login}>
      <Form<FormType>
        className="grid gap-2"
        schema={schema}
        onSubmit={onSubmit}
      >
        <FormInput<FormType> name="email" type="email" label="Email" />
        <Button primary>Reset password</Button>
      </Form>
    </Screen>
  );
};
