CREATE OR REPLACE FUNCTION get_words(user_id_param uuid DEFAULT NULL)
  RETURNS SETOF word
  AS $$
BEGIN
  IF user_id_param IS NOT NULL THEN
    RETURN QUERY
    SELECT
      w.id,
      w.name_ka,
      w.name_en,
      w.transcription_en,
      w.category_id,
      w.picture_url,
      w.created_at,
      f.is_favorite,
      s.is_learned
    FROM
      words w
    LEFT JOIN favorites f ON w.id = f.word_id
      AND f.user_id = user_id_param
  LEFT JOIN statistic s ON w.id = s.word_id
      AND s.user_id = user_id_param
    ORDER BY
      w.name_en;
  ELSE
    RETURN QUERY
    SELECT
      id,
      name_ka,
      name_en,
      transcription_en,
      category_id,
      picture_url,
      created_at,
      NULL::boolean AS is_favorite,
      NULL::boolean AS is_learned
    FROM
      words
    ORDER BY
      name_en;
  END IF;
END
$$
LANGUAGE plpgsql;
