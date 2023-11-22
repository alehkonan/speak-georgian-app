CREATE OR REPLACE FUNCTION toggle_favorite_word (user_id_input uuid, word_id_input int) RETURNS BOOLEAN AS $$
DECLARE is_in_favorite BOOLEAN;
BEGIN
INSERT INTO favorites (user_id, word_id, is_favorite)
VALUES (user_id_input, word_id_input, TRUE) ON CONFLICT (user_id, word_id) DO
UPDATE
SET is_favorite = NOT favorites.is_favorite
RETURNING is_favorite INTO is_in_favorite;
RETURN is_in_favorite;
END $$ language plpgsql;
