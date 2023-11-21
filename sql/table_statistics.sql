CREATE TABLE IF NOT EXISTS statistics (
  id BIGINT PRIMARY KEY generated always AS IDENTITY,
  word_id INT NOT NULL,
  user_id uuid NOT NULL,
  listened INT DEFAULT 0 NOT NULL,
  translation_shown INT DEFAULT 0 NOT NULL,
  right_answers INT DEFAULT 0 NOT NULL,
  wrong_answers INT DEFAULT 0 NOT NULL,
  total_answers INT DEFAULT 0 NOT NULL,
  is_learned BOOLEAN DEFAULT FALSE NOT NULL,
  created_at TIMESTAMP WITH TIME zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (word_id) REFERENCES public.words (id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE
)
