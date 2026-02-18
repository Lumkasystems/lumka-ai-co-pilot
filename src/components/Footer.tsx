import { Link } from "react-router-dom";
import logoImg from "@/assets/logo_lumka.png";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo Video", href: "https://youtube.com/watch?v=demo" },
    { label: "Roadmap", href: "#" },
    { label: "What's New", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Press Kit", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const Footer = () => {
  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-dark text-slate-dark-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img
                src={logoImg}
                alt="Lumka logo"
                className="h-8 w-8 object-contain opacity-80"
                style={{ filter: "brightness(10)" }}
              />
              <p className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lumka</p>
            </div>
            <p className="font-body text-sm text-slate-dark-foreground/60 mb-4">Your AI Co-Pilot for VA Work</p>
            <p className="font-body text-xs text-slate-dark-foreground/50 leading-relaxed mb-6">
              Empowering virtual assistants with AI automation. Save 15+ hours per week on repetitive tasks and focus on what actually matters.
            </p>
            <p className="font-body text-xs text-slate-dark-foreground/40">© 2026 Lumka Systems. All rights reserved.</p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-slate-dark-foreground mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("#") ? (
                      <button onClick={() => scrollTo(l.href)} className="font-body text-sm text-slate-dark-foreground/60 hover:text-slate-dark-foreground transition">
                        {l.label}
                      </button>
                    ) : l.href.startsWith("/") ? (
                      <Link to={l.href} className="font-body text-sm text-slate-dark-foreground/60 hover:text-slate-dark-foreground transition">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-body text-sm text-slate-dark-foreground/60 hover:text-slate-dark-foreground transition">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
