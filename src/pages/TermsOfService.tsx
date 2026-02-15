import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <h1 className="font-display text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
      <p className="font-body text-sm text-muted-foreground mb-10">Last updated: February 13, 2026</p>

      <div className="space-y-8 font-body text-foreground/80 leading-relaxed">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Current Status</h2>
          <p className="mb-3">Lumka is in pre-launch waitlist phase. By joining the waitlist, you agree to:</p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Receive email updates about our launch</li>
            <li>Understand this is a pre-launch product</li>
            <li>Founding member pricing (50% off) is guaranteed if you join waitlist</li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">When We Launch (March 2026)</h2>
          <p>We'll send you full Terms of Service before you create an account.</p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>Questions? Email us: <a href="mailto:lumkasystems@gmail.com" className="text-primary hover:underline">lumkasystems@gmail.com</a></p>
        </section>
      </div>
    </div>
  </div>
);

export default TermsOfService;
