type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return <span className="text-red-600">{message}</span>;
};
