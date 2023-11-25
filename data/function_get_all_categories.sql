-- todo add language detection
CREATE OR REPLACE FUNCTION get_categories()
  RETURNS SETOF categories
  AS $$
  SELECT
    *
  FROM
    categories
  ORDER BY
    name_en;
$$
LANGUAGE SQL;
