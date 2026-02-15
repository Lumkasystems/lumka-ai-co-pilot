import { X, Check } from "lucide-react";

const rows = [
  { task: "Email management", without: "30 min/day manually scanning", withL: "Instant alerts for urgent emails", saved: "2.5 hrs/week" },
  { task: "Social media posts", without: "1 hour creating + scheduling", withL: "AI creates multi-platform posts in 2 min", saved: "4 hrs/week" },
  { task: "Calendar booking", without: "15 min per meeting (conflicts, confirmations)", withL: "Auto-books with conflict detection", saved: "3 hrs/week" },
  { task: "Meeting transcription", without: "2 hours manual transcription per meeting", withL: "Audio to text in 5 minutes", saved: "7 hrs/week" },
  { task: "Market research", without: "3-4 hours of manual research", withL: "15-minute AI briefing", saved: "3 hrs/week" },
  { task: "Data entry/cleaning", without: "2 hours/week of manual work", withL: "Automated validation and cleaning", saved: "2 hrs/week" },
  { task: "Bill tracking", without: "Manual scanning, often miss deadlines", withL: "Proactive alerts before due dates", saved: "1 hr/week" },
];

const ComparisonSection = () => (
  <section className="bg-background py-24 lg:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-16">
        The Lumka Difference: Before vs. After
      </h2>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <th className="px-6 py-4 font-display font-semibold text-sm rounded-tl-xl">Task</th>
              <th className="px-6 py-4 font-display font-semibold text-sm">Without Lumka</th>
              <th className="px-6 py-4 font-display font-semibold text-sm">With Lumka</th>
              <th className="px-6 py-4 font-display font-semibold text-sm rounded-tr-xl">Time Saved</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.task} className={i % 2 === 0 ? "bg-card" : "bg-soft-gray"}>
                <td className="px-6 py-4 font-body text-sm font-medium text-foreground">{r.task}</td>
                <td className="px-6 py-4 font-body text-sm text-foreground/75 flex items-center gap-2">
                  <X size={14} className="text-destructive shrink-0" /> {r.without}
                </td>
                <td className="px-6 py-4 font-body text-sm text-foreground/75">
                  <span className="inline-flex items-center gap-2"><Check size={14} className="text-mint shrink-0" /> {r.withL}</span>
                </td>
                <td className="px-6 py-4 font-body text-sm font-bold text-mint">{r.saved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {rows.map((r) => (
          <div key={r.task} className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display font-semibold text-base text-foreground mb-3">{r.task}</h4>
            <p className="flex items-start gap-2 text-sm font-body text-foreground/70 mb-2">
              <X size={14} className="text-destructive shrink-0 mt-0.5" /> {r.without}
            </p>
            <p className="flex items-start gap-2 text-sm font-body text-foreground/70 mb-2">
              <Check size={14} className="text-mint shrink-0 mt-0.5" /> {r.withL}
            </p>
            <p className="font-body text-sm font-bold text-mint">{r.saved}</p>
          </div>
        ))}
      </div>

      {/* Summary box */}
      <div className="mt-12 bg-gradient-to-r from-primary to-accent rounded-2xl p-10 text-center max-w-xl mx-auto">
        <p className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-3">Total time saved: 22.5 hours per week</p>
        <p className="font-body text-base text-primary-foreground/85">
          That's 90 hours back in your life every month. What would you do with an extra 90 hours?
        </p>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
