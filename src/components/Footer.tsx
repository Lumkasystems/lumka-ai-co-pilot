import { Link } from "react-router-dom";
import logoImg from "@/assets/lumka_logo_primary.svg";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Demo Video", href: "https://youtube.com/@lumka_app" },
    { label: "Roadmap", href: "#" },
    { label: "What's New", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Instagram", href: "https://www.instagram.com/lumka_assistant" },
    { label: "Twitter / X", href: "https://x.com/lumkaassistant" },
    { label: "Facebook", href: "https://www.facebook.com/Lumka_Assistant" },
    { label: "YouTube", href: "https://youtube.com/@lumka_app" },
    { label: "TikTok", href: "https://www.tiktok.com/@lumka_assistant_" },
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
            <div className="mb-2">
              <img
                src={logoImg}
                alt="Lumka logo"
                className="h-9 object-contain brightness-0 invert"
              />
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
