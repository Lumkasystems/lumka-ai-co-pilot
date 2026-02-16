import { useEffect } from "react";
import { Check, Mail, Calendar, DollarSign, FileText, Settings, ArrowRight } from "lucide-react";

const agents = [
  { icon: Mail, name: "Email Guardian", desc: "Scans, prioritizes, and drafts responses. Handles 100+ emails daily so you don't have to." },
  { icon: Calendar, name: "Calendar Concierge", desc: "Auto-detects conflicts, suggests optimal times across timezones, sends confirmations." },
  { icon: DollarSign, name: "Finance Watchdog", desc: "Tracks invoices, flags overdue bills, generates expense reports automatically." },
  { icon: FileText, name: "Content Studio", desc: "Creates social posts, blog drafts, newsletters—matching your client's brand voice." },
  { icon: Settings, name: "Operations Lab", desc: "Automates data entry, transcribes meetings, cleans spreadsheets, builds reports." },
];

const pricingRows = [
  { feature: "Monthly Requests", free: "100", basic: "500", pro: "3,000", biz: "12,000" },
  { feature: "AI Specialists", free: "2", basic: "All 5", pro: "All 5", biz: "All 5" },
  { feature: "Custom Voice Training", free: "—", basic: "—", pro: "✓", biz: "✓" },
  { feature: "Team Seats", free: "1", basic: "1", pro: "1", biz: "5" },
  { feature: "API Access", free: "—", basic: "—", pro: "✓", biz: "✓" },
  { feature: "Support", free: "Community", basic: "Email (24hr)", pro: "Priority (12hr)", biz: "Dedicated Manager" },
];

const painPoints = [
  "Scanning 100+ emails daily for urgent items",
  "Managing calendars across multiple timezones",
  "Copy-pasting data into weekly reports",
  "Transcribing meeting recordings manually",
  "Creating repetitive social media content",
  "Cleaning messy spreadsheets by hand",
];

const Brochure = () => {
  useEffect(() => {
    document.title = "Lumka Brochure — AI Co-Pilot for Virtual Assistants";
  }, []);

  return (
    <div className="brochure-root bg-white text-gray-900 min-h-screen">
      {/* Print button - hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="bg-gradient-to-r from-[#1a1145] to-[#6c3ce0] text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
        >
          Download as PDF ↓
        </button>
        <a href="/" className="bg-gray-100 text-gray-700 font-medium px-5 py-3 rounded-xl hover:bg-gray-200 transition">
          ← Back
        </a>
      </div>

      {/* PAGE 1: Cover */}
      <section className="brochure-page flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#0f0a2e] via-[#1a1145] to-[#2d1b69] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 40%, #c9a84c 0%, transparent 50%), radial-gradient(circle at 70% 60%, #6c3ce0 0%, transparent 50%)" }} />
        <div className="relative z-10 px-8">
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#e8d490] flex items-center justify-center shadow-2xl">
            <span className="text-[#1a1145] font-bold text-3xl">L</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Lumka
          </h1>
          <p className="text-xl md:text-2xl font-medium text-[#c9a84c] mb-3">
            AI Co-Pilot for Virtual Assistants
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-md mx-auto mb-10">
            Save 15+ Hours Per Week on Repetitive Tasks
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            <span>lumka.app</span>
            <span>•</span>
            <span>Launching March 2026</span>
          </div>
        </div>
      </section>

      {/* PAGE 2: The Problem */}
      <section className="brochure-page flex flex-col justify-center px-10 md:px-20 bg-[#faf9f7]">
        <p className="text-xs font-bold tracking-[3px] text-[#6c3ce0] uppercase mb-4">The Problem</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1145] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
          Virtual Assistants Are Overwhelmed
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
          The average VA spends <strong className="text-[#1a1145]">15+ hours per week</strong> on repetitive tasks that could be automated.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {painPoints.map((p) => (
            <div key={p} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <span className="text-red-400 mt-0.5 text-lg">✗</span>
              <span className="text-sm text-gray-700">{p}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1a1145] to-[#2d1b69] text-white rounded-2xl p-6 max-w-lg">
          <p className="text-sm italic text-white/90">
            "Your time is too valuable to waste on work a computer could do in seconds."
          </p>
        </div>
      </section>

      {/* PAGE 3: The Solution */}
      <section className="brochure-page flex flex-col justify-center px-10 md:px-20">
        <p className="text-xs font-bold tracking-[3px] text-[#6c3ce0] uppercase mb-4">The Solution</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1145] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
          5 AI Specialists, One Platform
        </h2>
        <p className="text-base text-gray-500 mb-8">Each agent is purpose-built for the tasks VAs handle every day.</p>

        <div className="space-y-4">
          {agents.map((a, i) => (
            <div key={a.name} className="flex items-start gap-4 bg-[#faf9f7] rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6c3ce0] to-[#1a1145] flex items-center justify-center shrink-0">
                <a.icon size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1145] mb-1">{a.name}</h3>
                <p className="text-sm text-gray-600">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAGE 4: Features & Benefits */}
      <section className="brochure-page flex flex-col justify-center px-10 md:px-20 bg-[#faf9f7]">
        <p className="text-xs font-bold tracking-[3px] text-[#6c3ce0] uppercase mb-4">Features & Benefits</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1145] mb-8" style={{ fontFamily: "Outfit, sans-serif" }}>
          The ROI Is Clear
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            { num: "15-20 hrs", label: "Saved per week", sub: "on repetitive tasks" },
            { num: "$800+", label: "Monthly savings", sub: "in operational costs" },
            { num: "10x", label: "More clients", sub: "without more hours" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <p className="text-3xl font-bold text-[#6c3ce0] mb-1">{s.num}</p>
              <p className="text-sm font-semibold text-[#1a1145]">{s.label}</p>
              <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#c9a84c]/10 to-[#c9a84c]/5 border border-[#c9a84c]/30 rounded-2xl p-6">
          <h3 className="font-bold text-[#1a1145] mb-3">💡 Quick ROI Calculation</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            If you bill at <strong>$25/hr</strong> and save <strong>15 hours/week</strong>, that's <strong>$375/week</strong> or <strong>$1,500/month</strong> in reclaimed billable time — all for as little as <strong>$49/month</strong> with Lumka Pro. That's a <strong>30x return</strong>.
          </p>
        </div>
      </section>

      {/* PAGE 5: Pricing */}
      <section className="brochure-page flex flex-col justify-center px-10 md:px-20">
        <p className="text-xs font-bold tracking-[3px] text-[#6c3ce0] uppercase mb-4">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1145] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
          Simple, Transparent Pricing
        </h2>
        <p className="text-sm text-gray-500 mb-6">Start free. Upgrade when ready. Cancel anytime.</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1a1145] text-white">
                <th className="text-left p-3 rounded-tl-lg">Feature</th>
                <th className="p-3 text-center">Free<br /><span className="text-xs font-normal text-white/70">$0</span></th>
                <th className="p-3 text-center">Basic<br /><span className="text-xs font-normal text-white/70">$9.99/mo</span></th>
                <th className="p-3 text-center bg-[#6c3ce0]">Pro ⭐<br /><span className="text-xs font-normal text-white/70">$49/mo</span></th>
                <th className="p-3 text-center rounded-tr-lg">Business<br /><span className="text-xs font-normal text-white/70">$199/mo</span></th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((r, i) => (
                <tr key={r.feature} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-medium text-[#1a1145]">{r.feature}</td>
                  <td className="p-3 text-center text-gray-600">{r.free}</td>
                  <td className="p-3 text-center text-gray-600">{r.basic}</td>
                  <td className="p-3 text-center text-gray-600 bg-[#6c3ce0]/5">{r.pro}</td>
                  <td className="p-3 text-center text-gray-600">{r.biz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-[#c9a84c] to-[#e8d490] text-[#1a1145] rounded-xl p-5 text-center">
          <p className="font-bold text-lg mb-1">🎁 Founding Member Discount</p>
          <p className="text-sm">Join the waitlist now and lock in <strong>50% off for life</strong> on any paid plan.</p>
        </div>
      </section>

      {/* PAGE 6: How It Works */}
      <section className="brochure-page flex flex-col justify-center px-10 md:px-20 bg-[#faf9f7]">
        <p className="text-xs font-bold tracking-[3px] text-[#6c3ce0] uppercase mb-4">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1145] mb-10" style={{ fontFamily: "Outfit, sans-serif" }}>
          Up & Running in 5 Minutes
        </h2>

        <div className="space-y-8">
          {[
            { num: "1", title: "Connect Your Tools", desc: "One-click OAuth to connect Gmail, Google Calendar, and Drive. Bank-level encryption, SOC 2 compliant, GDPR ready." },
            { num: "2", title: "Chat Naturally", desc: "Tell Lumka what you need in plain English. No commands to memorize, no complex setup, no technical knowledge required." },
            { num: "3", title: "Watch the Magic", desc: "Lumka handles the task while you focus on strategic work. The more you use it, the better it understands your preferences." },
          ].map((s) => (
            <div key={s.num} className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6c3ce0] to-[#1a1145] flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-lg">
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1a1145] mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <p className="text-xs font-semibold text-gray-400 mb-2">Example commands:</p>
          <div className="space-y-1">
            {['"Check my emails for anything urgent"', '"Book a meeting tomorrow at 2pm EST"', '"Create a LinkedIn post about our launch"', '"Scan for bills due this week"'].map((e) => (
              <p key={e} className="text-sm text-gray-600 flex items-center gap-2"><ArrowRight size={12} className="text-[#6c3ce0] shrink-0" /> {e}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 7: CTA */}
      <section className="brochure-page flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-[#0f0a2e] via-[#1a1145] to-[#2d1b69] relative overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ background: "radial-gradient(circle at 50% 50%, #c9a84c 0%, transparent 60%)" }} />
        <div className="relative z-10 px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
            Join 500+ Virtual Assistants
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-md mx-auto">
            on the waitlist for the future of VA work.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-sm mx-auto mb-8 border border-white/20">
            <p className="text-sm text-white/70 mb-3">Visit us at</p>
            <p className="text-2xl font-bold text-[#c9a84c] mb-4">lumka.app</p>
            <div className="w-32 h-32 mx-auto bg-white rounded-xl flex items-center justify-center mb-3">
              {/* QR code placeholder */}
              <div className="text-center">
                <div className="grid grid-cols-5 gap-0.5 w-20 h-20 mx-auto">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`w-full aspect-square rounded-[1px] ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,8,12,16,18].includes(i) ? "bg-[#1a1145]" : "bg-transparent"}`} />
                  ))}
                </div>
                <p className="text-[8px] text-gray-500 mt-1">Scan to visit</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-sm text-white/70">
            <p>📧 lumkasystems@gmail.com</p>
            <p>🌐 lumka.app</p>
            <p>📅 Launching March 2026</p>
          </div>

          <p className="mt-8 text-xs text-white/40">© 2026 Lumka Systems. All rights reserved.</p>
        </div>
      </section>

      {/* Print styles */}
      <style>{`
        .brochure-page {
          min-height: 100vh;
          position: relative;
        }
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .brochure-page {
            page-break-after: always;
            min-height: 100vh;
            height: 100vh;
            overflow: hidden;
          }
          .brochure-page:last-of-type { page-break-after: auto; }
        }
      `}</style>
    </div>
  );
};

export default Brochure;
