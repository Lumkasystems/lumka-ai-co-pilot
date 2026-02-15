import { Link } from "react-router-dom";
import { ArrowLeft, Brain, Link2, Zap, Target, Eye } from "lucide-react";
import chatbotHero from "@/assets/chatbot-hero.png";
import vaMission from "@/assets/va-mission.png";
import visionFuture from "@/assets/vision-future.png";

const About = () => (
  <div className="bg-background min-h-screen">
    {/* Back nav */}
    <div className="container mx-auto px-4 pt-8">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </div>

    {/* Hero: About Lumka */}
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text - left */}
        <div className="flex-1 order-2 lg:order-1">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-4">About Lumka</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            The "Super" in Your<br />Virtual Assistance
          </h1>
          <p className="font-body text-lg text-foreground/75 leading-relaxed mb-6">
            As a Virtual Assistant, you are the backbone of your clients' success. But between managing endless emails, tracking complex schedules, and jumping between a dozen different apps, it's easy to feel like you're just keeping your head above water.
          </p>
          <p className="font-body text-lg text-foreground/75 leading-relaxed">
            Lumka was created to change that. Lumka isn't just a chatbot; it is a <span className="font-semibold text-primary">Super Assistant</span> designed to sit right beside you. It bridges the gap between "having a tool" and "having a partner." We built Lumka to handle the heavy cognitive load of your daily workflow, so you can focus on the high-level strategy your clients value most.
          </p>
        </div>
        {/* Image - right */}
        <div className="flex-shrink-0 order-1 lg:order-2">
          <img
            src={chatbotHero}
            alt="Lumka AI chatbot assistant"
            className="w-64 md:w-80 lg:w-96 rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>

    {/* Why VAs Choose Lumka */}
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Why VAs Choose Lumka
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Brain,
              title: "Total Recall Memory",
              desc: "Lumka acts as a second brain. It remembers every client preference, past conversation, and specific instruction across all your projects. No more digging through old threads to find that one detail.",
            },
            {
              icon: Link2,
              title: "Seamless Task Bridging",
              desc: "Lumka connects your favorite apps into one smooth flow. It can retrieve data, update files, and manage schedules across different platforms without you needing to lift a finger.",
            },
            {
              icon: Zap,
              title: "Proactive Support",
              desc: "While other tools wait for you to type, Lumka is built to anticipate. It organizes your data and prepares your day before you even log in.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:-translate-y-1 transition-transform"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-foreground/75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Mission */}
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-shrink-0">
          <img
            src={vaMission}
            alt="Connected productivity tools"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-mint/10 flex items-center justify-center">
              <Target className="text-mint" size={22} />
            </div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-mint">Our Mission</p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Eliminating the Mundane, Empowering the Strategic
          </h2>
          <p className="font-body text-lg text-foreground/75 leading-relaxed">
            We believe that Virtual Assistants are the architects of modern business. Our mission is to provide you with "Super" capabilities—eliminating the mundane, repetitive "click-work" and giving you back the most valuable resource of all: <span className="font-semibold text-primary">your time</span>.
          </p>
        </div>
      </div>
    </section>

    {/* Our Vision */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={visionFuture}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/95 to-slate-dark/80" />
      </div>
      <div className="relative container mx-auto px-4 py-24 text-center max-w-3xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
            <Eye className="text-accent" size={22} />
          </div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-accent">Our Vision</p>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-dark-foreground mb-8">
          Empowering the Architects of Efficiency
        </h2>
        <div className="space-y-6 font-body text-lg text-slate-dark-foreground/80 leading-relaxed text-left md:text-center">
          <p>
            We envision a world where being a Virtual Assistant isn't defined by the number of tabs you have open or the repetitive tasks that drain your energy.
          </p>
          <p className="font-semibold text-mint text-xl">
            Our vision is to transform the VA industry from "Support" to "Strategy."
          </p>
          <p>
            We see a future where every VA is equipped with a personal AI ecosystem—a "Super Assistant" like Lumka—that handles the digital grunt work. By removing the friction of data management and task switching, we aim to empower VAs to become indispensable strategic partners who have total control over their time and their growth.
          </p>
          <p className="italic text-slate-dark-foreground/60">
            At Lumka, we aren't just building a tool; we are building the future of work, where technology serves the person, not the other way around.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
          Ready to Become a Super VA?
        </h2>
        <Link
          to="/"
          onClick={() => setTimeout(() => document.querySelector("#waitlist-form")?.scrollIntoView({ behavior: "smooth" }), 100)}
          className="inline-block bg-gradient-to-r from-coral to-destructive text-coral-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:-translate-y-0.5 transition-transform shadow-lg"
        >
          Join the Waitlist
        </Link>
      </div>
    </section>
  </div>
);

export default About;
