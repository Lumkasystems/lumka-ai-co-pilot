import { Link } from "react-router-dom";
import { ArrowLeft, Globe, Heart, Megaphone, BookOpen } from "lucide-react";

const values = [
  { icon: Globe, label: "Remote-first" },
  { icon: Heart, label: "Customer-obsessed" },
  { icon: Megaphone, label: "Building in public" },
  { icon: BookOpen, label: "Continuous learning" },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>

      <h1 className="font-display text-4xl font-bold text-foreground mb-4">Join the Lumka Team</h1>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-foreground mb-3">Our Mission</h2>
        <p className="font-body text-foreground/80 leading-relaxed">
          Empowering virtual assistants worldwide with AI automation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-foreground mb-3">Open Positions</h2>
        <div className="rounded-xl border border-border bg-muted/40 p-6 text-center">
          <p className="font-body text-muted-foreground">No open positions currently.</p>
          <p className="font-body text-sm text-muted-foreground/70 mt-1">Check back soon — we're growing!</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-foreground mb-3">Interested in the Future?</h2>
        <p className="font-body text-foreground/80 leading-relaxed">
          Email us at{" "}
          <a href="mailto:lumkasystems@gmail.com?subject=Future%20Opportunities%20at%20Lumka" className="text-primary hover:underline">
            lumkasystems@gmail.com
          </a>
        </p>
        <p className="font-body text-sm text-muted-foreground mt-1">
          Subject: "Future Opportunities at Lumka"
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-foreground mb-5">What We Value</h2>
        <div className="grid grid-cols-2 gap-4">
          {values.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <Icon size={20} className="text-primary shrink-0" />
              <span className="font-body text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Careers;
