CREATE TABLE IF NOT EXISTS favorites (
  id serial PRIMARY KEY,
  user_id uuid NOT NULL,
  word_id int NOT NULL,
  is_favorite boolean DEFAULT false,
  created_at timestamp DEFAULT NOW(),
  CONSTRAINT user_favorite_word UNIQUE (user_id, word_id),
  FOREIGN KEY (word_id) REFERENCES public.words (id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE
);
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read access for authenticated users" ON favorites AS PERMISSIVE FOR
SELECT TO authenticated USING (TRUE);
