CREATE OR REPLACE FUNCTION get_user_statistic(user_id_param uuid)
  RETURNS TABLE(
    total_words int,
    learned_words int,
    favorite_words int
  )
  AS $$
BEGIN
  RETURN query
  SELECT
    count(*) AS total_words,
    count(*) FILTER(WHERE is_learned = TRUE) AS learned_words,
    count(*) FILTER(WHERE is_favorite = TRUE) AS favorite_words
  FROM
    get_all_words(user_id_param);
END
$$
LANGUAGE plpgsql;
