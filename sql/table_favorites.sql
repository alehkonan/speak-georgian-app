CREATE TABLE IF NOT EXISTS favorites (
  id BIGINT PRIMARY KEY generated always AS IDENTITY,
  word_id INT NOT NULL,
  user_id uuid NOT NULL,
  is_favorite BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMP WITH TIME zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
  CONSTRAINT user_favorite_word UNIQUE (user_id, word_id),
  FOREIGN KEY (word_id) REFERENCES public.words (id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE
)
