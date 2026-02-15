import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Finally! Someone built something specifically FOR virtual assistants, not just our bosses. I can't wait to stop being a human task robot.",
    name: "Sarah Martinez",
    title: "Executive Assistant, 8 years experience",
  },
  {
    quote: "The Content Studio alone would be worth $29/month. Getting all 5 AI specialists for $49 is incredible value. Sign me up!",
    name: "James Okonkwo",
    title: "Virtual Assistant & Social Media Manager",
  },
  {
    quote: "I spend 30+ hours a week on repetitive tasks. If Lumka can give me even half that time back, it'll change my life.",
    name: "Maria Chen",
    title: "Remote Executive Assistant",
  },
];

const stats = [
  { num: "15-20 hrs/week", label: "Average expected time savings" },
  { num: "$800/month", label: "Average expected cost savings" },
  { num: "127+", label: "Feature requests from waitlist" },
  { num: "March 2026", label: "Launch date" },
];

const TestimonialsSection = () => (
  <section className="bg-lavender py-24 lg:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
        Virtual Assistants Are Excited About Lumka
      </h2>
      <p className="font-body text-lg text-foreground/60 text-center mb-16">
        Join hundreds of VAs on the waitlist who can't wait to reclaim their time.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 shadow-md border-l-4 border-primary">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-coral text-coral" />)}
            </div>
            <p className="font-body text-sm text-foreground/80 italic leading-relaxed mb-6">"{t.quote}"</p>
            <p className="font-body text-sm font-bold text-foreground">{t.name}</p>
            <p className="font-body text-xs text-foreground/50">{t.title}</p>
          </div>
        ))}
      </div>

      {/* Stats banner */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-10">
        <p className="font-display font-semibold text-xl text-primary-foreground text-center mb-8">
          Join 500+ virtual assistants who are ready for the future of VA work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-bold text-2xl md:text-3xl text-primary-foreground">{s.num}</p>
              <p className="font-body text-xs text-primary-foreground/75 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
