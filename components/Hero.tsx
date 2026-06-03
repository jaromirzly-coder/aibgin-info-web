export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink-950 noise pt-16">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-hero-mesh pointer-events-none" />
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "72px 72px"
      }} />
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-brand-indigo/[0.18] rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-brand-cyan/[0.12] rounded-full blur-[120px] pointer-events-none animate-pulse-slow animate-delay-400" />
      <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-brand-violet/[0.10] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">FERPA · COPPA · KCSiE · EU AI Act</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 animate-fade-up animate-delay-100">
              <span className="text-white">Safe AI Chatbot Platform for K-12 Schools &amp; Districts</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-6 animate-fade-up animate-delay-200 max-w-xl">
              AIBgin puts real-time AI safety between every student and every response.
              No child accounts. No IT setup. Live in 30 minutes.
            </p>

            {/* Inline trust pills */}
            <div className="flex flex-wrap gap-2 mb-10 animate-fade-up animate-delay-200">
              {[
                "Zero student accounts",
                "30-min setup",
                "EU data residency",
                "Article 28b ready",
              ].map((t) => (
                <span key={t}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-white/[0.05] border border-white/[0.09] px-3 py-1.5 rounded-full">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up animate-delay-300">
              <a href="#demo"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-all shadow-glow-indigo hover:-translate-y-0.5">
                Request a Free Demo
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#pricing"
                className="inline-flex items-center justify-center gap-2 glass text-slate-300 hover:text-white px-8 py-4 rounded-2xl font-semibold text-base hover:bg-white/[0.08] transition-all">
                See Pricing
              </a>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-4 gap-3 animate-fade-up animate-delay-400">
              {[
                { v: "0",    l: "Child accounts", s: "QR only" },
                { v: "5",    l: "Safety layers",  s: "AIBguard" },
                { v: "<1s",  l: "Audit latency",  s: "per reply" },
                { v: "EU",   l: "Data residency", s: "always" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-3 text-center hover:bg-white/[0.07] transition-colors">
                  <div className="text-xl font-extrabold gradient-text">{s.v}</div>
                  <div className="text-[10px] font-semibold text-white/70 mt-0.5 leading-tight">{s.l}</div>
                  <div className="text-[9px] text-slate-600 mt-0.5">{s.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product mockup image */}
          <div className="hidden lg:block animate-fade-up animate-delay-300">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <img src="/hero-dashboard.png" alt="AIBgin school dashboard showing real-time AIBguard safety audit for K-12 classroom AI chatbot" width="1200" height="900" className="w-full h-auto" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-brand-emerald/20 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-brand-emerald/15 rounded-xl flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L13 4V9C13 11.8 10.3 13.8 7 14.5C3.7 13.8 1 11.8 1 9V4L7 1Z" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1"/>
                    <path d="M4.5 7l2 2 3-3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AIBguard Active</div>
                  <div className="text-[10px] text-slate-500">All 5 layers running</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
