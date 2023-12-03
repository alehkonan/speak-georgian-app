CREATE TABLE IF NOT EXISTS statistic(
  id serial PRIMARY KEY,
  user_id uuid NOT NULL,
  word_id int NOT NULL,
  right_answers int DEFAULT 0,
  wrong_answers int DEFAULT 0,
  created_at timestamp with time zone DEFAULT NOW(),
  CONSTRAINT word_statistic UNIQUE (user_id, word_id),
  FOREIGN KEY (word_id) REFERENCES public.words(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE statistic ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their rows" ON statistic AS PERMISSIVE
  FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert new rows for their ids" ON statistic AS PERMISSIVE
  FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update rows with their ids" ON statistic AS PERMISSIVE
  FOR UPDATE TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete rows with their ids" ON statistic AS PERMISSIVE
  FOR DELETE TO authenticated
    USING (auth.uid() = user_id);
