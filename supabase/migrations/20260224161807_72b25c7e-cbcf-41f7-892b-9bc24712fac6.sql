
-- Create profiles table for waitlist users
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL DEFAULT '',
  last_name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL,
  referral_code TEXT NOT NULL UNIQUE,
  referred_by TEXT,
  referral_count INTEGER NOT NULL DEFAULT 0,
  waitlist_position INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Users can read their own profile
CREATE POLICY "Users can read own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Allow inserts from triggers (service role)
CREATE POLICY "Service role can insert profiles" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Function to generate a unique referral code
CREATE OR REPLACE FUNCTION public.generate_referral_code(user_name TEXT)
RETURNS TEXT
LANGUAGE plpgsql
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

-- Function to calculate waitlist position
CREATE OR REPLACE FUNCTION public.calculate_waitlist_position(user_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  pos INTEGER;
BEGIN
  SELECT COUNT(*) + 1 INTO pos
  FROM profiles p
  WHERE p.created_at < (SELECT created_at FROM profiles WHERE id = user_id)
    AND p.id != user_id;
  
  -- Adjust for referrals (every 3 referrals = -50 positions)
  pos := pos - (SELECT COALESCE(FLOOR(referral_count / 3) * 50, 0) FROM profiles WHERE id = user_id)::INTEGER;
  
  IF pos < 1 THEN pos := 1; END IF;
  
  RETURN pos;
END;
$$;

-- Trigger function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_first_name TEXT;
  user_last_name TEXT;
  user_full_name TEXT;
  ref_code TEXT;
  pos INTEGER;
  referrer_code TEXT;
BEGIN
  user_first_name := COALESCE(NEW.raw_user_meta_data->>'first_name', SPLIT_PART(COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email), ' ', 1));
  user_last_name := COALESCE(NEW.raw_user_meta_data->>'last_name', SPLIT_PART(COALESCE(NEW.raw_user_meta_data->>'full_name', ''), ' ', 2));
  user_full_name := COALESCE(user_first_name, '') || COALESCE(user_last_name, '');
  
  IF user_full_name = '' THEN
    user_full_name := SPLIT_PART(NEW.email, '@', 1);
  END IF;
  
  ref_code := public.generate_referral_code(user_full_name);
  referrer_code := NEW.raw_user_meta_data->>'referred_by';
  
  INSERT INTO public.profiles (id, first_name, last_name, email, referral_code, referred_by)
  VALUES (NEW.id, user_first_name, user_last_name, NEW.email, ref_code, referrer_code);
  
  -- Calculate and update position
  pos := (SELECT COUNT(*) FROM public.profiles);
  UPDATE public.profiles SET waitlist_position = pos WHERE id = NEW.id;
  
  -- If referred by someone, increment their referral count
  IF referrer_code IS NOT NULL AND referrer_code != '' THEN
    UPDATE public.profiles 
    SET referral_count = referral_count + 1 
    WHERE referral_code = referrer_code;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger on auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Allow reading profiles by referral code (for referral validation)
CREATE OR REPLACE FUNCTION public.get_waitlist_position(user_uuid UUID)
RETURNS INTEGER
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.calculate_waitlist_position(user_uuid);
$$;
