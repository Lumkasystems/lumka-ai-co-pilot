import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Will Lumka replace virtual assistants?",
    a: "Absolutely not! Lumka is designed to be your co-pilot, not your replacement. We handle the repetitive, time-consuming busywork (email scanning, data entry, calendar coordination) so YOU can focus on the high-value strategic work that requires human judgment, relationship building, and creative problem-solving.\n\nThink of it this way: Lumka makes you a better VA by giving you superpowers, not by taking your job.",
  },
  {
    q: "How is Lumka different from ChatGPT or other AI tools?",
    a: "While ChatGPT is a general-purpose chatbot that answers questions, Lumka is a specialized system that does actual work for VAs:\n\n\u2022 Action-Oriented: Lumka doesn't just give advice \u2014 it books meetings, organizes emails, creates documents.\n\u2022 5 Specialized Agents: Email Guardian, Calendar Concierge, Finance Watchdog, Content Studio, and Operations Lab.\n\u2022 Integrated: Directly connects to Gmail, Calendar, Drive \u2014 no copy-pasting.\n\u2022 Built for VAs: Every feature is designed specifically for VA workflows.\n\u2022 Learns Your Voice: Lumka learns your writing style and your CEO's voice.",
  },
  {
    q: "Is my data secure? What about privacy?",
    a: "Security is our top priority:\n\n\u2713 OAuth Only: We never see or store your passwords\n\u2713 Zero Training: We NEVER train our AI models on your private data\n\u2713 You Own Your Data: Export everything anytime, delete account anytime\n\nWe only access what you explicitly authorize.",
  },
  {
    q: "What if I only need one or two features?",
    a: "Start with our FREE plan, which includes Email Guardian and Calendar Concierge with 100 requests per month. That's enough to test whether Lumka fits your workflow.\n\nIf you need all 5 specialists but lighter usage, try Basic for $9.99/month. When you're ready for more power, upgrade to Pro for $49/month.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes! Cancel anytime with one click, no questions asked. Your data remains yours forever. When you cancel, you can export everything or delete it all \u2014 your choice.",
  },
  {
    q: "When will Lumka launch?",
    a: "March 2026 is our target launch date. By joining the waitlist now you get:\n\n\ud83c\udf81 50% off for life (founding member pricing)\n\ud83d\ude80 Early access before public launch\n\ud83d\udcac Direct input on features we build\n\ud83d\udcca Beta testing opportunities\n\ud83c\udfaf Priority onboarding and support",
  },
  {
    q: "Do I need technical skills to use Lumka?",
    a: 'Not at all! If you can use Gmail and Google Calendar, you can use Lumka. Setup is literally: 1) Click "Connect Google Account", 2) Authorize access, 3) Start chatting in plain English. No coding. No complex configurations.',
  },
  {
    q: 'What counts as a "request"?',
    a: 'Each time you send a message to Lumka counts as one request. For example: "Check my emails" = 1 request, "Book a meeting tomorrow at 2pm" = 1 request. Simple or complex \u2014 they all count the same. Most VAs use 60-70% of their monthly limit on average.',
  },
];

const FAQSection = () => (
  <section id="faq" className="bg-background py-24 lg:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-16">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-colors data-[state=open]:border-primary/50"
          >
            <AccordionTrigger className="font-display font-semibold text-base text-foreground hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm text-foreground/75 leading-relaxed whitespace-pre-line pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
