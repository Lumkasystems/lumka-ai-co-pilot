import { Check, Mail, CalendarDays, DollarSign, Palette, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Mail,
    title: "Email Guardian",
    description: "Never miss another urgent email. Lumka scans your inbox 24/7, instantly alerts you about critical messages, and even drafts responses in your voice.",
    items: [
      "Auto-detects urgent emails based on content and sender",
      "Sends instant alerts to your phone",
      "Drafts responses matching your writing style",
      "Organizes inbox with smart labels",
      "Summarizes long email threads",
    ],
    tagline: "Your inbox, finally under control.",
  },
  {
    icon: CalendarDays,
    title: "Calendar Concierge",
    description: "Stop playing calendar Tetris. Lumka checks availability, detects conflicts, books meetings, and even reminds you about birthdays — all automatically.",
    items: [
      "Checks availability in real-time",
      "Detects scheduling conflicts before they happen",
      "Books meetings with automatic confirmations",
      "Remembers birthdays with gift suggestions",
      "Plans complete travel itineraries",
    ],
    tagline: "Scheduling made effortless.",
  },
  {
    icon: DollarSign,
    title: "Finance Watchdog",
    description: "Never miss a payment deadline again. Lumka scans for bills and invoices, tracks due dates, and alerts you before deadlines.",
    items: [
      "Scans Gmail for bills, invoices, tax notices",
      "Extracts amounts, due dates, vendors automatically",
      "Sends proactive alerts before deadlines",
      "Organizes receipts in Drive",
      "Tracks expenses across currencies",
    ],
    tagline: "Financial deadlines handled.",
  },
  {
    icon: Palette,
    title: "Content Studio",
    description: "Your personal content strategist. Creates social posts, generates reports, humanizes AI drafts, transcribes meetings, and manages email campaigns.",
    items: [
      "Creates multi-platform social media posts",
      "Generates EOD and weekly reports automatically",
      "Humanizes AI content to match CEO's voice",
      "Transcribes meetings with action items",
      "Sets up email campaigns and tracks metrics",
    ],
    tagline: "Content creation on autopilot.",
  },
  {
    icon: FlaskConical,
    title: "Operations Lab",
    description: "Deep research and data work in minutes, not hours. Market analysis, spreadsheet cleaning, Drive organization, and CV screening — all automated.",
    items: [
      "Conducts comprehensive market research",
      "Cleans and validates spreadsheet data",
      "Organizes Google Drive automatically",
      "Screens job candidates with scoring",
      "Generates executive briefings",
    ],
    tagline: "Research and ops at AI speed.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-background py-24 lg:py-28">
    <div className="container mx-auto px-4">
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-center max-w-2xl mx-auto mb-4">
        Meet Lumka: Your AI-Powered Second Brain
      </h2>
      <p className="font-body text-lg text-foreground/60 text-center max-w-xl mx-auto mb-16">
        5 specialized AI agents working together to handle your repetitive work — so you can focus on the strategic support that only humans can provide.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
          >
            <f.icon size={48} className="text-primary mb-6" />
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">{f.title}</h3>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-5">{f.description}</p>
            <ul className="space-y-2 mb-5">
              {f.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-body text-foreground/70">
                  <Check size={14} className="text-mint mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body text-sm font-medium text-primary italic">{f.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
