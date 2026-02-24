import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rocket, Gift, Users, Calendar, CheckCircle, Twitter, Linkedin, Mail, LogOut, Copy, Check, Share2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import logoImg from "@/assets/lumka_logo_primary.svg";

const LAUNCH_DATE = new Date("2026-03-31");
const daysUntilLaunch = Math.max(0, Math.ceil((LAUNCH_DATE.getTime() - Date.now()) / (1000 * 60 * 60 * 24)));

interface Profile {
  first_name: string;
  last_name: string;
  email: string;
  referral_code: string;
  referral_count: number;
  waitlist_position: number | null;
  created_at: string;
}

const WaitlistDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [position, setPosition] = useState<number | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) {
        navigate("/signin");
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (data) {
        setProfile(data as Profile);
        // Get real-time position
        const { data: posData } = await supabase.rpc("get_waitlist_position", {
          user_uuid: session.user.id,
        });
        setPosition(posData as number | null);
      }
      setLoading(false);
    };

    loadProfile();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/signin");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-dark flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  if (!profile) return null;

  const displayPosition = position ?? profile.waitlist_position ?? 1;
  const totalWaitlist = Math.max(displayPosition + 100, 600);
  const topPercent = Math.round((displayPosition / totalWaitlist) * 100);
  const positionTier = displayPosition <= 500 ? "Top 500" : displayPosition <= 1000 ? "Top 1,000" : "Top 2,000";
  const referralLink = `${window.location.origin}?ref=${profile.referral_code}`;
  const userName = `${profile.first_name} ${profile.last_name}`.trim() || profile.email.split("@")[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      icon: Twitter,
      label: "Twitter / X",
      href: `https://twitter.com/intent/tweet?text=Just+joined+the+Lumka+waitlist!+AI+co-pilot+for+virtual+assistants.+Join+me:+${encodeURIComponent(referralLink)}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`,
    },
    {
      icon: Mail,
      label: "Email",
      href: `mailto:?subject=Check%20out%20Lumka&body=I%20just%20joined%20Lumka%20%E2%80%93%20an%20AI%20co-pilot%20for%20virtual%20assistants.%20Join%20the%20waitlist:%20${encodeURIComponent(referralLink)}`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-dark text-slate-dark-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-slate-dark/95 backdrop-blur border-b border-primary/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Lumka logo" className="h-9 object-contain brightness-0 invert" />
          </div>
          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-slate-dark-foreground/60 hidden sm:block">{profile.email}</span>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 font-body text-sm text-coral hover:text-coral/80 font-medium transition-colors"
            >
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Hero */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-6">
            <CheckCircle className="text-primary" size={18} />
            <span className="font-body text-sm text-primary font-semibold">You're officially on the list!</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-dark-foreground mb-4">
            Welcome to Lumka, {profile.first_name || userName}! 🎉
          </h1>
          <p className="font-body text-lg text-slate-dark-foreground/70 max-w-2xl mx-auto">
            You're among the <span className="text-coral font-bold">{positionTier}</span> VAs joining the AI revolution.
            Launching in <span className="text-accent font-bold">{daysUntilLaunch} days</span>!
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-background/5 border border-primary/10 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Users className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-body text-xs text-slate-dark-foreground/50 uppercase tracking-wider">Your Position</p>
                <p className="font-display text-3xl font-bold text-slate-dark-foreground">{positionTier}</p>
              </div>
            </div>
            <p className="font-body text-sm text-slate-dark-foreground/60">
              You're in the top <span className="text-primary font-semibold">{topPercent}%</span> of early adopters
            </p>
          </div>

          <div className="bg-gradient-to-br from-coral to-primary rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Gift className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/70 uppercase tracking-wider">Founding Member</p>
                  <p className="font-display text-3xl font-bold text-primary-foreground">50% OFF</p>
                </div>
              </div>
              <p className="font-body text-sm text-primary-foreground/90 font-medium">Lifetime discount locked in 🎁</p>
            </div>
          </div>

          <div className="bg-background/5 border border-accent/20 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Calendar className="text-accent" size={22} />
              </div>
              <div>
                <p className="font-body text-xs text-slate-dark-foreground/50 uppercase tracking-wider">Launching In</p>
                <p className="font-display text-3xl font-bold text-slate-dark-foreground">{daysUntilLaunch}d</p>
              </div>
            </div>
            <p className="font-body text-sm text-slate-dark-foreground/60">
              March 2026 — You'll get <span className="text-accent font-semibold">early access</span>
            </p>
          </div>
        </div>

        {/* Referral */}
        <div className="bg-background/5 border border-primary/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <Share2 size={20} className="text-coral" />
              <h2 className="font-display text-2xl font-bold text-slate-dark-foreground">Move Up the List Faster</h2>
            </div>
            <p className="font-body text-slate-dark-foreground/60 max-w-lg mx-auto">
              Refer other VAs and jump ahead. For every <span className="text-coral font-semibold">3 referrals</span>, you move up 50 positions!
            </p>
            {profile.referral_count > 0 && (
              <p className="font-body text-mint font-semibold mt-2">
                🎉 You have {profile.referral_count} referral{profile.referral_count !== 1 ? "s" : ""}!
                {profile.referral_count >= 3 && ` You've jumped ${Math.floor(profile.referral_count / 3) * 50} positions!`}
              </p>
            )}
          </div>

          <div className="max-w-2xl mx-auto space-y-5">
            <div>
              <label className="block font-body text-sm font-medium text-slate-dark-foreground/70 mb-2">Your Referral Link</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-background/10 border border-primary/20 rounded-lg px-4 py-3 font-body text-sm text-slate-dark-foreground focus:outline-none"
                />
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-coral to-primary text-primary-foreground px-5 py-3 rounded-lg font-body font-semibold text-sm hover:-translate-y-0.5 transition-transform shadow-md"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {shareLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-background/10 border border-primary/15 rounded-xl py-3 font-body text-sm text-slate-dark-foreground hover:border-coral transition-colors"
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-gradient-to-br from-background/5 to-primary/5 border border-primary/10 rounded-2xl p-8">
          <h3 className="font-display text-2xl font-bold text-slate-dark-foreground text-center mb-8">What Happens Next?</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { num: "1", color: "text-coral", bg: "bg-coral/10", title: "Stay Updated", desc: "We'll email you with development updates, beta invitations, and launch details." },
              { num: "2", color: "text-accent", bg: "bg-accent/10", title: "Beta Testing", desc: "Top waitlist members get invited to beta test Lumka before public launch." },
              { num: "3", color: "text-primary", bg: "bg-primary/10", title: "Early Access", desc: "Get exclusive access on launch day + your 50% lifetime discount activated." },
            ].map(({ num, color, bg, title, desc }) => (
              <div key={num} className="text-center">
                <div className={`w-14 h-14 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`font-display text-xl font-bold ${color}`}>{num}</span>
                </div>
                <h4 className="font-body font-bold text-slate-dark-foreground mb-2">{title}</h4>
                <p className="font-body text-sm text-slate-dark-foreground/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pb-6">
          <p className="font-body text-sm text-slate-dark-foreground/50 mb-3">Have questions? We're here to help.</p>
          <a href="mailto:lumkasystems@gmail.com" className="inline-flex items-center gap-2 font-body text-coral hover:text-coral/80 font-semibold transition-colors">
            <Mail size={18} /> lumkasystems@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default WaitlistDashboard;
