CREATE FUNCTION private.is_admin()
  RETURNS boolean
  LANGUAGE plpgsql
  SECURITY DEFINER
  AS $$
BEGIN
  RETURN EXISTS(
    SELECT
      1
    FROM
      roles
    WHERE
      auth.uid() = user_id
      AND ROLE = 'admin');
END;
$$;
