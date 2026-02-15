import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Lumka
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-foreground/70 hover:text-primary font-body text-sm font-medium transition-colors">
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.lumka.io/login" className="text-primary font-body text-sm font-medium hover:underline">Sign In</a>
          <button onClick={() => scrollTo("#waitlist-form")} className="bg-gradient-to-r from-coral to-destructive text-coral-foreground font-body text-sm font-semibold px-6 py-2.5 rounded-lg hover:-translate-y-0.5 transition-transform shadow-md">
            Join Waitlist
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6 space-y-4">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left text-foreground/80 font-body text-base py-2">
              {l.label}
            </button>
          ))}
          <a href="https://app.lumka.io/login" className="block text-primary font-body text-base py-2">Sign In</a>
          <button onClick={() => scrollTo("#waitlist-form")} className="w-full bg-gradient-to-r from-coral to-destructive text-coral-foreground font-body font-semibold px-6 py-3 rounded-lg">
            Join Waitlist
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
