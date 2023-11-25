CREATE OR REPLACE FUNCTION toggle_favorite_word(user_id_param uuid, word_id_param int)
  RETURNS SETOF word
  AS $$
BEGIN
  INSERT INTO favorites(user_id, word_id, is_favorite)
    VALUES(user_id_param, word_id_param, TRUE)
  ON CONFLICT(user_id, word_id)
    DO UPDATE SET
      is_favorite = NOT favorites.is_favorite;
  RETURN query
  SELECT
    *
  FROM
    get_all_words(user_id_param)
  WHERE
    id = word_id_param;
END
$$
LANGUAGE plpgsql;
