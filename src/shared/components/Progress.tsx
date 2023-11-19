type Props = {
  value: number;
  max: number;
};

export const Progress = ({ value, max }: Props) => {
  const percent = Math.round((value / max) * 100) || 0;

  return (
    <div className="flex items-center gap-1">
      <progress className="w-full appearance-none" max={max} value={value} />
      <span className="text-xs">{percent}%</span>
    </div>
  );
};
