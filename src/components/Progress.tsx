type Props = {
  value: number;
  max: number;
};

export const Progress = ({ value, max }: Props) => {
  const percent = Math.round((value / max) * 100) || 0;

  return (
    <div className="flex items-center gap-1">
      <progress className="w-full appearance-none" value={value} max={max} />
      <span className="text-xs">{percent}%</span>
    </div>
  );
};
