DROP FUNCTION set_word_learned(uuid, integer);

CREATE OR REPLACE FUNCTION set_word_learned(user_id_param uuid, word_id_param int)
  RETURNS SETOF word
  AS $$
BEGIN
  INSERT INTO statistic(user_id, word_id, is_learned)
    VALUES(user_id_param, word_id_param, TRUE)
  ON CONFLICT(user_id, word_id)
    DO UPDATE SET
      is_learned = TRUE;
  RETURN query
  SELECT
    *
  FROM
    get_all_words(user_id_param)
  WHERE
    id = word_id_param
END;
$$
LANGUAGE plpgsql;
