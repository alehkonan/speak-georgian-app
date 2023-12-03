CREATE OR REPLACE FUNCTION update_word_statistic(user_id_param uuid, word_id_param int, is_right_param boolean)
  RETURNS void
  AS $$
DECLARE
  right_answer_increment int;
  wrong_answer_increment int;
BEGIN
  IF is_right_param THEN
    right_answer_increment := 1;
    wrong_answer_increment := 0;
  ELSE
    right_answer_increment := 0;
    wrong_answer_increment := 1;
  END IF;
  INSERT INTO statistic(user_id, word_id, right_answers, wrong_answers)
    VALUES (user_id_param, word_id_param, right_answer_increment, wrong_answer_increment)
  ON CONFLICT (user_id, word_id)
    DO UPDATE SET
      right_answers = statistic.right_answers + right_answer_increment, wrong_answers = statistic.wrong_answers + wrong_answer_increment;
END;
$$
LANGUAGE plpgsql;
