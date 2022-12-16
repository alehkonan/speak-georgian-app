import { ReactComponent as Field } from './field-with-mountains.svg';
import { ReactComponent as Logo } from './logo.svg';

export const Background = () => {
  return (
    <div className="fixed w-full h-2/3 -z-10 grid place-items-center">
      <Field className="absolute w-full h-full" />
      <Logo className="z-0 w-2/5" />
    </div>
  );
};
