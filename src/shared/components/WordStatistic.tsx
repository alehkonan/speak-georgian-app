import { Chip, type ChipProps, Tooltip } from '@nextui-org/react';
import { useMemo } from 'react';
import { useGetWordStatistic } from 'src/cache/statistic/useGetWordStatistic';

type Props = {
  wordId: number;
};

function getColor(percent: number): ChipProps['color'] {
  if (percent >= 80) return 'success';
  if (percent >= 50) return 'warning';
  return 'danger';
}

export const WordStatistic = ({ wordId }: Props) => {
  const { data, isLoading, error } = useGetWordStatistic(wordId);

  const percent = useMemo(() => {
    if (!data) return 0;

    return (
      (data.right_answers / (data.right_answers + data.wrong_answers)) * 100
    );
  }, [data]);

  if (isLoading || error) return null;

  return (
    <Tooltip content="Content">
      <Chip color={getColor(percent)} size="sm" variant="flat">
        {percent?.toFixed(0)}%
      </Chip>
    </Tooltip>
  );
};
