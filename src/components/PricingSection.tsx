import { Check } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    period: "/month",
    tagline: "Always Free",
    intro: "Perfect for trying Lumka:",
    features: ["100 requests per month (~3 per day)", "Email Guardian", "Calendar Concierge", "Community support", "All future updates"],
    bestFor: "Solo VAs testing Lumka or managing light workloads",
    cta: "Start Free Forever",
    ctaClass: "border-2 border-primary text-primary hover:bg-secondary",
    subtext: "No credit card required",
    border: "border-border",
    founding: null,
  },
  {
    name: "BASIC",
    price: "$9.99",
    period: "/month",
    intro: "Everything in Free, plus:",
    features: ["500 requests per month (~17 per day)", "All 5 AI specialists unlocked", "Email support (24hr response)", "Basic analytics dashboard", "Priority feature requests"],
    bestFor: "Part-time VAs or solo assistants with 1-2 clients",
    cta: "Start Basic Plan",
    ctaClass: "bg-accent text-accent-foreground hover:bg-accent/90",
    border: "border-accent",
    founding: "🎁 Founding members: $4.99/month (50% off for life)",
  },
  {
    name: "PRO",
    price: "$49",
    originalPrice: "$98",
    period: "/month",
    popular: true,
    intro: "Everything in Basic, plus:",
    features: ["3,000 requests per month (~100 per day)", "Priority email support (12hr response)", "Custom AI voice training", "Advanced analytics & insights", "API access for integrations", "Early access to new features"],
    bestFor: "Full-time VAs managing 3-5 executives or multiple clients",
    cta: "Join Waitlist – Get 50% Off",
    ctaClass: "bg-gradient-to-r from-coral to-destructive text-coral-foreground shadow-lg hover:-translate-y-0.5 transition-transform",
    border: "border-primary",
    founding: "🎁 Founding members: $24.50/month (50% off for life — save $294/year)",
    foundingClass: "bg-mint text-mint-foreground",
  },
  {
    name: "BUSINESS",
    price: "$199",
    originalPrice: "$398",
    period: "/month",
    intro: "Everything in Pro, plus:",
    features: ["12,000 requests per month (~400 per day)", "Up to 5 team member seats included", "Team collaboration features", "Priority support", "Custom integrations & workflows", "Dedicated account manager", "SLA guarantees (99.9% uptime)"],
    bestFor: "VA agencies, teams, or enterprise executive support",
    cta: "Join Waitlist – Get 50% Off",
    ctaClass: "bg-mint text-mint-foreground hover:bg-mint/90",
    border: "border-mint",
    founding: "🎁 Founding members: $99.50/month (50% off for life — save $1,194/year)",
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    tagline: "Tailored to your needs",
    intro: "Everything in Business, plus:",
    features: ["Unlimited requests (fair use policy)", "Unlimited team members", "Custom AI training on your company data", "On-premise deployment option", "Dedicated infrastructure", "24/7 priority support", "Quarterly business reviews"],
    bestFor: "Large VA agencies (10+ VAs) or corporate support teams",
    cta: "Contact Sales",
    ctaClass: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
    ctaLink: "mailto:lumkasystems@gmail.com?subject=Enterprise%20Plan%20Inquiry",
    border: "border-primary border-dashed",
    founding: null,
  },
];

const PricingSection = () => {
  const scrollTo = () => document.querySelector("#waitlist-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="bg-soft-gray py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <p className="uppercase text-xs font-display font-bold tracking-[2px] text-primary text-center mb-4">Pricing</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="font-body text-lg text-foreground/60 text-center mb-16">
          Start free. Upgrade when you're ready. Cancel anytime.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative bg-card rounded-2xl p-7 border-2 ${p.border} ${p.popular ? "lg:scale-105 shadow-xl z-10" : "shadow-sm"} flex flex-col`}
            >
              {p.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-coral to-destructive text-coral-foreground text-[11px] font-body font-bold tracking-wider px-5 py-1.5 rounded-full shadow-md">
                  MOST POPULAR ⭐
                </span>
              )}

              <h3 className="font-display font-bold text-xl text-foreground mb-2">{p.name}</h3>

              <div className="mb-1 flex items-end gap-2">
                {p.originalPrice && <span className="font-display text-lg text-foreground/30 line-through">{p.originalPrice}</span>}
                <span className={`font-display font-bold ${p.popular ? "text-4xl text-primary" : "text-3xl text-foreground"}`}>{p.price}</span>
                {p.period && <span className="font-body text-sm text-foreground/50">{p.period}</span>}
              </div>
              {p.tagline && <p className="font-body text-xs text-foreground/50 mb-3">{p.tagline}</p>}

              <hr className="border-border my-4" />

              <p className="font-body text-xs font-semibold text-foreground mb-3">{p.intro}</p>
              <ul className="space-y-2 flex-1 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-body text-foreground/75">
                    <Check size={14} className="text-mint mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              {p.bestFor && (
                <p className="font-body text-xs text-foreground/50 bg-soft-gray rounded-lg p-3 mb-4">Best for: {p.bestFor}</p>
              )}

              {p.ctaLink ? (
                <a href={p.ctaLink} className={`block text-center font-body font-semibold text-sm px-4 py-3 rounded-xl ${p.ctaClass}`}>{p.cta}</a>
              ) : (
                <button onClick={scrollTo} className={`w-full font-body font-semibold text-sm px-4 py-3 rounded-xl ${p.ctaClass}`}>{p.cta}</button>
              )}

              {p.subtext && <p className="font-body text-[11px] text-foreground/40 text-center mt-2">{p.subtext}</p>}

              {p.founding && (
                <p className={`font-body text-[11px] font-semibold text-center mt-3 px-3 py-2 rounded-full ${p.foundingClass || "bg-gradient-to-r from-coral to-destructive text-coral-foreground"}`}>
                  {p.founding}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* All plans include */}
        <div className="mt-16 bg-card rounded-2xl shadow-md p-8 max-w-3xl mx-auto border border-border">
          <h3 className="font-display font-semibold text-lg text-foreground mb-6">💡 What's included in every plan:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "No credit card required to start",
              "Cancel anytime, no questions asked",
              "30-day money-back guarantee",
              "Your data stays yours forever",
              "Free updates and improvements",
              "GDPR & SOC 2 compliant",
              "Bank-level security (AES-256 encryption)",
              "Priority support on paid plans",
            ].map((f) => (
              <p key={f} className="flex items-center gap-2 text-sm font-body text-foreground/75">
                <Check size={14} className="text-primary shrink-0" /> {f}
              </p>
            ))}
          </div>
          <p className="font-body text-xs text-foreground/50 text-center mt-6">
            🔒 Secure payment by Stripe &nbsp;|&nbsp; 📅 Monthly or Annual billing &nbsp;|&nbsp; 🌍 Multiple currencies supported
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
