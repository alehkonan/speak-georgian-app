CREATE TABLE IF NOT EXISTS words(
  id serial PRIMARY KEY,
  name_ka text NOT NULL,
  name_en text NOT NULL,
  transcription_en text DEFAULT NULL,
  name_ru text DEFAULT NULL,
  name_by text DEFAULT NULL,
  category_id int DEFAULT NULL,
  picture_url text DEFAULT NULL,
  created_at timestamp WITH time zone DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE
  SET DEFAULT
);

ALTER TABLE words ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read access for all users" ON words AS PERMISSIVE FOR
SELECT TO anon,
  authenticated USING (TRUE);

CREATE POLICY "Insert access for admin" ON words AS PERMISSIVE FOR
INSERT TO authenticated USING (is_admin());