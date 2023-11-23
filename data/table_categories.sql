CREATE TABLE IF NOT EXISTS categories(
  id serial PRIMARY KEY,
  name_en text NOT NULL,
  name_ka text DEFAULT NULL,
  name_ru text DEFAULT NULL,
  name_by text DEFAULT NULL,
  picture_url text DEFAULT NULL,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read access for all users" ON categories AS PERMISSIVE
  FOR SELECT TO anon, authenticated
    USING (TRUE);
