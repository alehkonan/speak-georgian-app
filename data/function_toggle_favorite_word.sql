CREATE OR REPLACE FUNCTION toggle_favorite_word(user_id_param uuid, word_id_param int)
  RETURNS boolean
  AS $$
DECLARE
  is_in_favorite boolean;
BEGIN
  INSERT INTO favorites(user_id, word_id, is_favorite)
    VALUES (user_id_param, word_id_param, TRUE)
  ON CONFLICT (user_id, word_id)
    DO UPDATE SET
      is_favorite = NOT favorites.is_favorite
    RETURNING
      is_favorite INTO is_in_favorite;
  RETURN is_in_favorite;
END
$$
LANGUAGE plpgsql;
