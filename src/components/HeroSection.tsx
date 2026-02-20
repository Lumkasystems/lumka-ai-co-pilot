import { Check, Mail, CalendarDays, FileText } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-lavender to-background pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-3">
            <p className="uppercase text-xs font-display font-semibold tracking-[1.5px] text-primary mb-6">
              Launching March 2026 • Built for Virtual Assistants
            </p>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Stop Drowning in Tasks.{" "}
              <span className="bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">
                Start Leading with AI.
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl mb-10">
              Lumka automates the repetitive work so virtual assistants can focus on what actually matters — strategic support for their CEOs.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollTo("#waitlist-form")}
                className="bg-gradient-to-r from-coral to-destructive text-coral-foreground font-body font-semibold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:-translate-y-0.5 transition-transform"
              >
                Join Waitlist – Free Early Access
              </button>
              <a
                href="https://youtube.com/@lumka_app?si=XHvklaOipy-XbeCu"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary font-body font-semibold text-base md:text-lg px-8 py-4 rounded-xl hover:bg-secondary transition-colors"
              >
                Watch 2-Min Demo →
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-body text-foreground/60">
              {["Launching March 2026", "500+ VAs on waitlist", "Saves 15+ hrs/week", "Works with Gmail, Calendar, Drive"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check size={14} className="text-mint" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Visual column — product mockup */}
          <div className="lg:col-span-2 relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-6 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-mint/60" />
                <span className="ml-2 text-xs font-body text-muted-foreground">Lumka Chat</span>
              </div>

              <div className="space-y-4">
                <div className="bg-secondary rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm font-body text-foreground/80">Check my emails for anything urgent</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3 ml-auto max-w-[85%]">
                  <p className="text-sm font-body text-foreground/80">
                    Found 3 urgent emails: invoice due tomorrow, client meeting reschedule, CEO's flight update. Want me to draft responses?
                  </p>
                </div>
                <div className="bg-secondary rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm font-body text-foreground/80">Yes, draft responses for all three</p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-4 top-8 bg-card shadow-lg rounded-lg p-3 border border-border flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span className="text-xs font-body font-medium">3 urgent emails</span>
              </div>
              <div className="absolute -left-4 bottom-16 bg-card shadow-lg rounded-lg p-3 border border-border flex items-center gap-2">
                <CalendarDays size={16} className="text-mint" />
                <span className="text-xs font-body font-medium">Meeting booked</span>
              </div>
              <div className="absolute -right-2 bottom-4 bg-card shadow-lg rounded-lg p-3 border border-border flex items-center gap-2">
                <FileText size={16} className="text-coral" />
                <span className="text-xs font-body font-medium">Report ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
