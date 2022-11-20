import { createClient } from '@supabase/supabase-js';
import { Database } from 'src/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabaseClient = createClient<Database>(supabaseUrl, supabaseKey);
