CREATE TYPE word AS (
  id int,
  name_ka text,
  name_en text,
  transcription_en text,
  category_id int,
  picture_url text,
  created_at timestamp with time zone,
  is_favorite boolean
);

CREATE TYPE game_word AS (
  id int,
  name_en text,
  name_ka text,
  picture_url text,
  variants text[]
);
