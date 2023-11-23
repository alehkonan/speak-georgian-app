-- todo add language detection
CREATE OR REPLACE FUNCTION get_categories() RETURNS setof categories AS $$
SELECT *
ORDER BY name_en
FROM categories $$ LANGUAGE SQL;
