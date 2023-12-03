CREATE OR REPLACE FUNCTION update_word_statistic(user_id_param uuid, word_id_param int, is_right_param boolean)
  RETURNS void
  AS $$
BEGIN
  INSERT INTO statistic(user_id, word_id, right_answers, wrong_answers)
    VALUES(user_id_param, word_id_param, CASE WHEN is_right_param THEN
        1
      ELSE
        0
      END, CASE WHEN is_right_param THEN
        0
      ELSE
        1
      END)
  ON CONFLICT(user_id, word_id)
    DO UPDATE SET
      right_answers = statistic.right_answers + CASE WHEN is_right_param THEN
        1
      ELSE
        0
      END, wrong_answers = statistic.wrong_answers + CASE WHEN is_right_param THEN
        0
      ELSE
        1
      END;
END;
$$
LANGUAGE plpgsql;
