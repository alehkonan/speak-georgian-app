CREATE TABLE IF NOT EXISTS settings(
  id serial PRIMARY KEY,
  user_id uuid NOT NULL,
  show_daily_word boolean DEFAULT TRUE,
  show_transcription boolean DEFAULT TRUE,
  show_game_pictures boolean DEFAULT TRUE,
  created_at timestamp with time zone DEFAULT NOW(),
  CONSTRAINT user_settings UNIQUE (user_id),
  FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read access for authenticated users" ON settings AS PERMISSIVE
  FOR SELECT TO authenticated
    USING (TRUE);
