type Props = {
  text?: string;
};

export const Divider = ({ text }: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex-1 h-[1px] rounded bg-raisin-black opacity-30"></div>
      {text && (
        <p className="mx-1 lowercase text-raisin-black opacity-50">{text}</p>
      )}
      <div className="flex-1 h-[1px] rounded bg-raisin-black opacity-30"></div>
    </div>
  );
};
