CREATE OR REPLACE FUNCTION set_word_learned(user_id_param uuid, word_id_param int)
  RETURNS void
  AS $$
BEGIN
  INSERT INTO statistic(user_id, word_id, is_learned)
    VALUES(user_id_param, word_id_param, TRUE)
  ON CONFLICT(user_id, word_id)
    DO UPDATE SET
      is_learned = TRUE;
END;
$$
LANGUAGE plpgsql;
