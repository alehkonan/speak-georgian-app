import { Chip, Tooltip } from '@nextui-org/react';
import { useMemo } from 'react';
import { useGetWordStatistic } from 'src/cache/statistic/useGetWordStatistic';

type Props = {
  wordId: number;
};

export const WordStatistic = ({ wordId }: Props) => {
  const { data, isLoading, error } = useGetWordStatistic(wordId);

  const percent = useMemo(() => {
    if (!data) return undefined;

    return (
      (data.right_answers / (data.right_answers + data.wrong_answers)) * 100
    );
  }, [data]);

  if (isLoading || error) return null;

  return (
    <Tooltip content="Content">
      <Chip color="success" size="sm" variant="flat">
        {percent?.toFixed(0)}%
      </Chip>
    </Tooltip>
  );
};
