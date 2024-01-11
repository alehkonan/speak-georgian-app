CREATE TABLE IF NOT EXISTS roles(
  user_id uuid PRIMARY KEY,
  role text NOT NULL,
  FOREIGN KEY (user_id) REFERENCES auth.users (id) ON DELETE CASCADE
);

ALTER TABLE roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Read access for all users" ON roles AS PERMISSIVE FOR
SELECT TO authenticated USING (TRUE);