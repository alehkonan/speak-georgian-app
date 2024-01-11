CREATE OR REPLACE FUNCTION get_random_word()
  RETURNS SETOF words
  AS $$
  SELECT
    w.*
  FROM
    words w
  LEFT JOIN statistic s ON w.id = s.word_id
WHERE
  s.is_learned IS NULL
  OR s.is_learned = FALSE
ORDER BY
  random()
LIMIT 1;
$$
LANGUAGE SQL;
