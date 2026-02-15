import { Mail, Clock, BarChart3 } from "lucide-react";

const problems = [
  {
    icon: Mail,
    title: "Email Overload",
    body: "You scan 100+ emails daily searching for urgent items. Manual flagging. Endless sorting. Drafting the same responses over and over. Your inbox controls you, not the other way around.\n\nSound familiar?",
  },
  {
    icon: Clock,
    title: "Calendar Tetris",
    body: "Checking availability across three timezones. Manually detecting conflicts. Sending confirmation emails. Rescheduling when someone cancels. You spend more time managing calendars than actual strategic work.\n\nThere has to be a better way.",
  },
  {
    icon: BarChart3,
    title: "Repetitive Admin Hell",
    body: "Copy-pasting data into weekly reports. Transcribing meeting recordings. Creating social media posts. Cleaning messy spreadsheets. You became a VA to support leaders, not to be a human task robot.\n\nYou deserve better tools.",
  },
];

const ProblemSection = () => (
  <section className="bg-slate-dark py-24 lg:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-slate-dark-foreground text-center max-w-3xl mx-auto mb-16">
        Being a Virtual Assistant Shouldn't Mean Being Overwhelmed
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p) => (
          <div key={p.title} className="text-center md:text-left">
            <p.icon size={48} className="text-mint mx-auto md:mx-0 mb-6" />
            <h3 className="font-display font-semibold text-2xl text-slate-dark-foreground mb-4">{p.title}</h3>
            <p className="font-body text-base text-slate-dark-foreground/80 leading-relaxed whitespace-pre-line">{p.body}</p>
          </div>
        ))}
      </div>

      <p className="font-display font-medium text-xl md:text-2xl text-mint italic text-center mt-16 max-w-2xl mx-auto">
        "Your time is too valuable to waste on work a computer could do in seconds."
      </p>
    </div>
  </section>
);

export default ProblemSection;
