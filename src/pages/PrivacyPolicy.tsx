import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">Last updated: February 2nd, 2026</p>

      <div className="space-y-8 font-body text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">What We Collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address (for waitlist only currently)</li>
            <li>Basic analytics (page views, button clicks)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">What We DON'T Collect Yet</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>No user accounts yet (we're in waitlist phase)</li>
            <li>No payment information yet</li>
            <li>No personal data beyond email</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Send you updates about Lumka launch</li>
            <li>Notify you when early access opens</li>
            <li>Track website performance</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Your Rights</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Unsubscribe anytime</li>
            <li>Request data deletion: <a href="mailto:lumkasystems@gmail.com" className="text-primary hover:underline">lumkasystems@gmail.com</a></li>
            <li>We'll never sell your email</li>
          </ul>
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
