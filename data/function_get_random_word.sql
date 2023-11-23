CREATE OR REPLACE FUNCTION get_random_word()
  RETURNS SETOF words
  AS $$
  SELECT
    *
  FROM
    words
  ORDER BY
    random()
  LIMIT 1;
$$
LANGUAGE SQL;
