export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950 noise pt-16">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-indigo/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-cyan/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow animate-delay-400" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">EU AI Act Compliant · GDPR Ready · Zero Child Accounts</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 animate-fade-up animate-delay-100">
            <span className="text-white">Safe AI for</span><br/>
            <span className="gradient-text">Schools, Built</span><br/>
            <span className="text-white">for Trust.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-5 animate-fade-up animate-delay-200">
            AIBgin is the AI chatbot platform for schools, MATs, and districts.
            Every response is audited by AIBguard in real time.
            No child ever needs an account — access via QR code.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-10 animate-fade-up animate-delay-200">
            {["Works in 30 min", "No IT required", "EU data residency", "Article 28b compliant"].map((t) => (
              <span key={t} className="text-xs font-medium text-slate-400 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-full">
                ✓ {t}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up animate-delay-300">
            <a href="#demo"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all shadow-glow-indigo hover:shadow-glow-cyan hover:-translate-y-0.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L11.5 6.5H17L12.5 10L14.5 16L9 12.5L3.5 16L5.5 10L1 6.5H6.5L9 1Z" fill="white"/>
              </svg>
              Request a Free Demo
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="#pricing"
              className="inline-flex items-center justify-center gap-2 glass text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/[0.08] transition-all">
              See Pricing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl animate-fade-up animate-delay-400">
            {[
              { value: "0",    label: "Child registrations",  sub: "QR code only" },
              { value: "5",    label: "Protection layers",    sub: "AIBguard" },
              { value: "< 1s", label: "Safety audit",         sub: "per response" },
              { value: "EU",   label: "Data residency",       sub: "always" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4 text-center hover:bg-white/[0.07] transition-colors">
                <div className="text-2xl font-extrabold gradient-text mb-0.5">{s.value}</div>
                <div className="text-xs font-semibold text-white/80">{s.label}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
