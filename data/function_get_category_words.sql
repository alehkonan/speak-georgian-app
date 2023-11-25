CREATE OR REPLACE FUNCTION get_category_words(user_id_param uuid DEFAULT NULL, category_id_param int DEFAULT NULL)
  RETURNS SETOF word
  AS $$
BEGIN
  RETURN QUERY
  SELECT
    *
  FROM
    get_all_words(user_id_param)
  WHERE(category_id_param IS NULL
    AND category_id IS NULL)
    OR(category_id = category_id_param);
END
$$
LANGUAGE plpgsql;
