CREATE TYPE game_word AS (
  id int,
  name_en text,
  name_ka text,
  picture_url text,
  variants text[]
);

CREATE OR REPLACE FUNCTION get_game_word()
  RETURNS SETOF game_word
  AS $$
DECLARE
  variants text[];
  word words % ROWTYPE;
BEGIN
  SELECT
    *
  FROM
    get_random_word() INTO word;
  SELECT
    ARRAY (
      SELECT
        name_en
      FROM
        words
      WHERE
        NOT name_en = word.name_en
      ORDER BY
        random()
      LIMIT 3) INTO variants;
  RETURN NEXT ROW (word.id,
    word.name_en,
    word.name_ka,
    word.picture_url,
    variants);
END
$$
LANGUAGE plpgsql;
