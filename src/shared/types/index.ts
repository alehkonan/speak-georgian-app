import { Database } from 'src/services/supabase/types';

export type Word = Database['public']['Tables']['words']['Row'] & {
  favorites?: boolean;
};
