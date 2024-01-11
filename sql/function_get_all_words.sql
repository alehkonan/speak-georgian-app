CREATE TYPE word AS (
  id int,
  name_ka text,
  name_en text,
  name_ru text,
  transcription_en text,
  category_id int,
  picture_url text,
  speech_part speech_part,
  created_at timestamp with time zone,
  is_favorite boolean,
  is_learned boolean
);

CREATE OR REPLACE FUNCTION get_all_words(user_id_param uuid DEFAULT NULL)
  RETURNS SETOF word
  AS $$
BEGIN
  IF user_id_param IS NOT NULL THEN
    RETURN QUERY
    SELECT
      w.id,
      w.name_ka,
      w.name_en,
      w.name_ru,
      w.transcription_en,
      w.category_id,
      w.picture_url,
      w.speech_part,
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
      name_ru,
      transcription_en,
      category_id,
      picture_url,
      speech_part,
      created_at,
      FALSE::boolean AS is_favorite,
      FALSE::boolean AS is_learned
    FROM
      words
    ORDER BY
      name_en;
  END IF;
END
$$
LANGUAGE plpgsql;
