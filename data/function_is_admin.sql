CREATE FUNCTION private.is_admin() RETURNS boolean language plpgsql SECURITY DEFINER AS $$ BEGIN RETURN EXISTS (
  SELECT 1
  FROM roles
  WHERE auth.uid() = user_id
    AND role = 'admin'
);

END;

$$;