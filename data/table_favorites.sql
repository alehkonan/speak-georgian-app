CREATE TABLE IF NOT EXISTS favorites(
  id serial PRIMARY KEY,
  user_id uuid NOT NULL,
  word_id int NOT NULL,
  is_favorite boolean DEFAULT FALSE,
  created_at timestamp with time zone DEFAULT NOW(),
  CONSTRAINT user_favorite_word UNIQUE (user_id, word_id),
  FOREIGN KEY (word_id) REFERENCES public.words(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their rows" ON favorites AS PERMISSIVE
  FOR SELECT TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert new rows for their ids" ON favorites AS PERMISSIVE
  FOR INSERT TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update rows with their ids" ON favorites AS PERMISSIVE
  FOR UPDATE TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete rows with their ids" ON favorites AS PERMISSIVE
  FOR DELETE TO authenticated
    USING (auth.uid() = user_id);
