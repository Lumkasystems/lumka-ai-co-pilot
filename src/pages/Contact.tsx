import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Clock, HelpCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm mb-8 hover:underline">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Get in Touch</h1>
        <p className="font-body text-muted-foreground mb-12">We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-xl border border-mint/30 bg-mint/5 p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-mint" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="font-body text-muted-foreground">Thanks for reaching out. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-accent py-3 font-display font-semibold text-white hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={20} className="text-primary" />
                <h3 className="font-display font-semibold text-foreground">Email Directly</h3>
              </div>
              <a href="mailto:lumkasystems@gmail.com" className="font-body text-sm text-primary hover:underline">
                lumkasystems@gmail.com
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-mint" />
                <h3 className="font-display font-semibold text-foreground">Response Time</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground">We typically respond within <span className="font-semibold text-foreground">24 hours</span> on business days.</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle size={20} className="text-coral" />
                <h3 className="font-display font-semibold text-foreground">Have a Quick Question?</h3>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-3">Check our FAQ — your answer might already be there.</p>
              <Link to="/#faq" className="font-body text-sm text-primary hover:underline">
                View FAQ →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
