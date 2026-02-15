import { Lock, MessageCircle, Zap } from "lucide-react";

const steps = [
  {
    num: 1,
    icon: Lock,
    title: "Connect Your Tools",
    body: "One-click OAuth to connect Gmail, Google Calendar, and Drive. We never store your passwords or access anything you don't explicitly authorize.",
    extra: (
      <span className="inline-block mt-4 text-xs font-body font-medium text-mint bg-mint/10 px-4 py-2 rounded-full">
        🛡️ Bank-level encryption • SOC 2 compliant • GDPR ready
      </span>
    ),
  },
  {
    num: 2,
    icon: MessageCircle,
    title: "Chat Naturally",
    body: "Just tell Lumka what you need in plain English. No commands to memorize, no complex setup, no technical knowledge required.",
    extra: (
      <div className="mt-4 bg-lavender border border-dashed border-primary/40 rounded-xl p-4 text-left space-y-1">
        <p className="text-xs font-body font-medium text-foreground/80 mb-2">Examples:</p>
        {[
          '"Check my emails for anything urgent"',
          '"Book a meeting tomorrow at 2pm"',
          '"Create a LinkedIn post about our new product"',
          '"Scan for bills due this week"',
        ].map((e) => (
          <p key={e} className="text-xs font-body text-foreground/65">• {e}</p>
        ))}
      </div>
    ),
  },
  {
    num: 3,
    icon: Zap,
    title: "Watch the Magic Happen",
    body: "Lumka handles the task while you focus on strategic work. Get notifications when done, review the results, and give feedback to make it better over time.",
    extra: (
      <span className="inline-block mt-4 text-xs font-body font-medium text-primary bg-lavender px-4 py-2 rounded-full">
        🧠 Smart Learning: The more you use Lumka, the better it understands your preferences
      </span>
    ),
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="bg-soft-gray py-24 lg:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-16">
        So Simple, You'll Be Up and Running in 5 Minutes
      </h2>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-10 left-[20%] right-[20%] border-t-2 border-dashed border-primary/20" />

        {steps.map((s) => (
          <div key={s.num} className="relative bg-card rounded-2xl p-8 pt-14 text-center shadow-md border border-border">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-lg shadow-lg">
              {s.num}
            </div>
            <s.icon size={36} className="text-mint mx-auto mb-4" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-foreground/70 leading-relaxed">{s.body}</p>
            {s.extra}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
