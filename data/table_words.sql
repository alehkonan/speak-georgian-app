CREATE TABLE IF NOT EXISTS words(
  id serial PRIMARY KEY,
  name_en text NOT NULL,
  transcription_en text DEFAULT NULL,
  name_ka text DEFAULT NULL,
  name_ru text DEFAULT NULL,
  name_by text DEFAULT NULL,
  category_id int DEFAULT NULL,
  picture_url text DEFAULT NULL,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET DEFAULT
);

ALTER TABLE words ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read access for all users" ON words AS PERMISSIVE
  FOR SELECT TO anon, authenticated
    USING (TRUE);
