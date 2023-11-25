CREATE OR REPLACE FUNCTION get_favorite_words(user_id_param uuid DEFAULT NULL)
  RETURNS SETOF word
  AS $$
BEGIN
  RETURN QUERY
  SELECT
    *
  FROM
    get_all_words(user_id_param)
  WHERE
    is_favorite = TRUE;
END
$$
LANGUAGE plpgsql;
