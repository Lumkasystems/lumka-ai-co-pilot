import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">Last updated: February 10, 2026</p>

      <div className="space-y-8 font-body text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Current Status</h2>
          <p className="mb-3">Lumka is in pre-launch waitlist phase. These terms apply to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Website usage</li>
            <li>Waitlist signup</li>
            <li>Email communications</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Waitlist Terms</h2>
          <p className="mb-3">By joining the waitlist, you agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Receive email updates about Lumka</li>
            <li>Founding member pricing (50% off) if you join before launch</li>
            <li>No obligation to purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Website Use</h2>
          <p className="mb-2">You may:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Browse the website</li>
            <li>Sign up for waitlist</li>
            <li>Share our content</li>
          </ul>
          <p className="mb-2">You may NOT:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Scrape our website</li>
            <li>Use for illegal purposes</li>
            <li>Impersonate Lumka</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lumka name, logo, content: © 2026 Lumka Systems</li>
            <li>You may share with attribution</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Website provided "as is"</li>
            <li>No guarantees about launch date</li>
            <li>Features may change</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
          <p className="mb-2">We're not liable for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Website downtime</li>
            <li>Email delivery issues</li>
            <li>Changes to launch plans</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Changes to Terms</h2>
          <p>We may update these terms. Significant changes will be emailed.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Governing Law</h2>
          <p>These terms are governed by the laws of Kenya.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            <a href="mailto:legal@lumka.app" className="text-primary hover:underline">legal@lumka.app</a> or{" "}
            <a href="mailto:lumkasystems@gmail.com" className="text-primary hover:underline">lumkasystems@gmail.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Full Terms (When We Launch)</h2>
          <p>Full terms of service will be provided before you create an account.</p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsOfService;
