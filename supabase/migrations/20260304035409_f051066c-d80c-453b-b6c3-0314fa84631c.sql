CREATE OR REPLACE FUNCTION public.calculate_waitlist_position(user_id uuid)
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  pos INTEGER;
  user_created_at TIMESTAMPTZ;
  email_signups_before INTEGER;
BEGIN
  -- Get the user's creation time
  SELECT created_at INTO user_created_at FROM profiles WHERE id = user_id;
  
  -- Count profiles created before this user
  SELECT COUNT(*) INTO pos
  FROM profiles p
  WHERE p.created_at < user_created_at
    AND p.id != user_id;
  
  -- Count email-only waitlist signups created before this user
  SELECT COUNT(*) INTO email_signups_before
  FROM waitlist_signups ws
  WHERE ws.created_at < user_created_at;
  
  -- Total position = profiles before + email signups before + 1
  pos := pos + email_signups_before + 1;
  
  -- Adjust for referrals (every 3 referrals = -50 positions)
  pos := pos - (SELECT COALESCE(FLOOR(referral_count / 3) * 50, 0) FROM profiles WHERE id = user_id)::INTEGER;
  
  IF pos < 1 THEN pos := 1; END IF;
  
  RETURN pos;
END;
$function$;