import { useQuery } from "@tanstack/react-query";
import { getRules } from "src/supabase/rules/getRules";

export const useGetRules = () => {
  return useQuery({
    queryKey: ["rule", "list"],
    queryFn: () => getRules(),
  });
};
