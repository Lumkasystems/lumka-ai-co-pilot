import { Check, Mail, CalendarDays, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-lavender to-background pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="uppercase text-xs font-display font-semibold tracking-[1.5px] text-primary mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Launching April 2026 • Built for Virtual Assistants
            </motion.p>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6">
              Stop Drowning in Tasks.{" "}
              <span className="bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">
                Start Leading with AI.
              </span>
            </h1>

            <p className="font-body text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl mb-10">
              Lumka automates the repetitive work so virtual assistants can focus on what actually matters — strategic support for their CEOs.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
              <motion.button
                onClick={() => scrollTo("#waitlist-form")}
                className="group bg-gradient-to-r from-coral to-destructive text-coral-foreground font-body font-semibold text-base md:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist – Free Early Access
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-body text-foreground/60">
              {["Launching April 2026", "500+ VAs on waitlist", "Saves 15+ hrs/week", "Works with Gmail, Calendar, Drive"].map((t, i) => (
                <motion.span
                  key={t}
                  className="flex items-center gap-1.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Check size={14} className="text-mint" /> {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Visual column — product mockup */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="bg-card rounded-2xl shadow-2xl border border-border p-5 sm:p-6 relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-coral/60" />
                <div className="w-3 h-3 rounded-full bg-mint/60" />
                <span className="ml-2 text-xs font-body text-muted-foreground">Lumka Chat</span>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="bg-secondary rounded-lg p-3 max-w-[80%]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm font-body text-foreground/80">Check my emails for anything urgent</p>
                </motion.div>
                <motion.div
                  className="bg-primary/10 rounded-lg p-3 ml-auto max-w-[85%]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <p className="text-sm font-body text-foreground/80">
                    Found 3 urgent emails: invoice due tomorrow, client meeting reschedule, CEO's flight update. Want me to draft responses?
                  </p>
                </motion.div>
                <motion.div
                  className="bg-secondary rounded-lg p-3 max-w-[70%]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <p className="text-sm font-body text-foreground/80">Yes, draft responses for all three</p>
                </motion.div>
              </div>

              {/* Floating cards */}
              <motion.div
                className="absolute -right-2 sm:-right-4 top-8 bg-card shadow-lg rounded-lg p-2.5 sm:p-3 border border-border flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, type: "spring", stiffness: 200 }}
              >
                <Mail size={16} className="text-primary" />
                <span className="text-xs font-body font-medium">3 urgent emails</span>
              </motion.div>
              <motion.div
                className="absolute -left-2 sm:-left-4 bottom-16 bg-card shadow-lg rounded-lg p-2.5 sm:p-3 border border-border flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
              >
                <CalendarDays size={16} className="text-mint" />
                <span className="text-xs font-body font-medium">Meeting booked</span>
              </motion.div>
              <motion.div
                className="absolute -right-1 sm:-right-2 bottom-4 bg-card shadow-lg rounded-lg p-2.5 sm:p-3 border border-border flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
              >
                <FileText size={16} className="text-coral" />
                <span className="text-xs font-body font-medium">Report ready</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
