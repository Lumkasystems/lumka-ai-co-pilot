import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist-form" className="bg-gradient-to-br from-primary to-accent py-24 lg:py-32 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        {!submitted ? (
          <>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Ready to Stop Being Overwhelmed?
            </h2>
            <p className="font-body text-lg text-primary-foreground/85 mb-12 max-w-xl mx-auto">
              Join 500+ virtual assistants on the waitlist. Get early access + lifetime 50% discount.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto mb-8">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 h-14 px-6 rounded-xl sm:rounded-r-none text-foreground font-body text-base bg-card border-none outline-none"
              />
              <button
                type="submit"
                className="h-14 px-8 rounded-xl sm:rounded-l-none bg-gradient-to-r from-coral to-destructive text-coral-foreground font-body font-bold text-base hover:brightness-110 transition"
              >
                Join Waitlist
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-body text-primary-foreground/80 mb-8">
              {["No credit card required", "Unsubscribe anytime", "Early access guaranteed", "50% founding member discount"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check size={14} className="text-mint" /> {t}
                </span>
              ))}
            </div>

            <span className="inline-block bg-primary-foreground/15 px-6 py-3 rounded-lg font-body text-sm font-medium">
              🔥 87 people joined this week
            </span>
          </>
        ) : (
          <div className="bg-mint rounded-2xl p-10 max-w-lg mx-auto text-mint-foreground">
            <h3 className="font-display font-bold text-2xl mb-3">🎉 You're on the list!</h3>
            <p className="font-body text-base mb-3">
              Check your email for confirmation. We'll notify you when Lumka launches in March 2026.
            </p>
            <p className="font-body text-base font-semibold">Founding member discount: 50% off locked in for life</p>
          </div>
        )}

        {/* Alt CTAs */}
        <div className="mt-16">
          <p className="font-body text-sm text-primary-foreground/70 mb-6">Not ready yet? No problem!</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://youtube.com/watch?v=demo" target="_blank" rel="noopener noreferrer" className="border-2 border-primary-foreground text-primary-foreground font-body font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary-foreground/10 transition">
              Watch Demo Video
            </a>
            <a href="/lumka-brochure.pdf" className="border-2 border-primary-foreground text-primary-foreground font-body font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary-foreground/10 transition">
              Download Brochure
            </a>
          </div>

          <p className="font-body text-xs text-primary-foreground/60 mb-4">Or follow our journey:</p>
          <div className="flex justify-center gap-4">
            {[
              { label: "𝕏", href: "https://twitter.com/lumka_app" },
              { label: "in", href: "https://linkedin.com/company/lumka" },
              { label: "▶", href: "https://youtube.com/@lumka" },
              { label: "📷", href: "https://instagram.com/lumka_app" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground text-sm hover:bg-primary-foreground/30 transition">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
