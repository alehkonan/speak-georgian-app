CREATE TYPE game_words AS (
  name_en text,
  name_ka text,
  picture_url text,
  variants text []
);
CREATE OR REPLACE FUNCTION get_game_word() RETURNS setof game_words AS $$
DECLARE variants text [];
word words %ROWTYPE;
BEGIN
SELECT *
FROM get_random_word() INTO word;
SELECT array(
    SELECT name_en
    FROM words
    WHERE NOT name_en = word.name_en
    ORDER BY random()
    LIMIT 3
  ) INTO variants;
RETURN next ROW(
  word.name_en,
  word.name_ka,
  word.picture_url,
  variants
);
END $$ language plpgsql;
