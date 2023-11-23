CREATE TABLE IF NOT EXISTS answers(
  id serial PRIMARY KEY,
  user_id uuid NOT NULL,
  word_id int NOT NULL,
  right_answers int DEFAULT 0,
  wrong_answers int DEFAULT 0,
  is_learned boolean DEFAULT FALSE,
  created_at timestamp with time zone DEFAULT NOW(),
  CONSTRAINT user_word_answer UNIQUE (user_id, word_id),
  FOREIGN KEY (word_id) REFERENCES public.words(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read access for authenticated users" ON answers AS PERMISSIVE
  FOR SELECT TO authenticated
    USING (TRUE);
