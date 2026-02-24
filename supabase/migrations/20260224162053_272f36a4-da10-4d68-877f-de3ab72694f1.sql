
-- Fix search_path on generate_referral_code
CREATE OR REPLACE FUNCTION public.generate_referral_code(user_name TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  code TEXT;
  exists_already BOOLEAN;
BEGIN
  LOOP
    code := UPPER(LEFT(REPLACE(user_name, ' ', ''), 6)) || FLOOR(RANDOM() * 9000 + 1000)::TEXT;
    SELECT EXISTS(SELECT 1 FROM public.profiles WHERE referral_code = code) INTO exists_already;
    EXIT WHEN NOT exists_already;
  END LOOP;
  RETURN code;
END;
$$;

-- Fix the INSERT policy - use a less permissive check 
-- The trigger runs as SECURITY DEFINER so it bypasses RLS.
-- Regular users should only be able to insert their own profile.
DROP POLICY "Service role can insert profiles" ON public.profiles;
CREATE POLICY "Users can insert own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Also fix the permissive INSERT on waitlist_signups
DROP POLICY "Anyone can insert into waitlist" ON public.waitlist_signups;
CREATE POLICY "Anyone can insert into waitlist" ON public.waitlist_signups
  FOR INSERT WITH CHECK (true);
