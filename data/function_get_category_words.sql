CREATE OR REPLACE FUNCTION get_category_words(category_id_param int DEFAULT NULL)
  RETURNS SETOF words
  AS $$
BEGIN
  IF category_id_param IS NULL THEN
    RETURN query
    SELECT
      *
    FROM
      words
    WHERE
      category_id IS NULL
    ORDER BY
      name_en;
  ELSE
    RETURN query
    SELECT
      *
    FROM
      words
    WHERE
      category_id = category_id_param
    ORDER BY
      name_en;
  END IF;
END
$$
LANGUAGE plpgsql;
