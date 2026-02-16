import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">Last updated: February 1, 2026</p>

      <div className="space-y-8 font-body text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Information We Collect</h2>

          <h3 className="font-display text-lg font-medium text-foreground mb-2">Waitlist Information</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Email address</li>
            <li>Name (optional)</li>
            <li>How you heard about us (optional)</li>
          </ul>

          <h3 className="font-display text-lg font-medium text-foreground mb-2">Website Usage</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time on site</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Send waitlist updates</li>
            <li>Notify you of launch</li>
            <li>Improve our website</li>
            <li>Comply with legal requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Data Storage</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email: Mailchimp/ConvertKit (encrypted)</li>
            <li>Analytics: Google Analytics</li>
            <li>Location: US servers</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your data</li>
            <li>Delete your data</li>
            <li>Unsubscribe anytime</li>
            <li>Request data export</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Data Retention</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Waitlist: Until launch + 90 days</li>
            <li>Analytics: 26 months (Google default)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Security</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>HTTPS encryption</li>
            <li>Secure email providers</li>
            <li>No payment data stored (yet)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Children's Privacy</h2>
          <p>Not intended for under 13. We don't knowingly collect children's data.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Changes to Policy</h2>
          <p>We'll email you if we make significant changes.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>Questions? Email us: <a href="mailto:lumkasystems@gmail.com" className="text-primary hover:underline">lumkasystems@gmail.com</a></p>
        </section>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
