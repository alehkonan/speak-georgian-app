import { useQuery } from "@tanstack/react-query";
import { getUserStatistic } from "src/supabase/statistic/getUserStatistic";

export const useGetUserStatistic = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["statistic", "user", { id: userId }],
    queryFn: ({ queryKey: [, , { id }] }) => {
      if (!id) return;
      return getUserStatistic(id);
    },
    enabled: Boolean(userId),
    staleTime: Number.POSITIVE_INFINITY,
  });
};
