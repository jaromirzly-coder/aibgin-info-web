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
              <span className="text-white">Safe AI for</span><br/>
              <span className="gradient-text">every classroom,</span><br/>
              <span className="text-white">trusted by</span>{" "}
              <span className="gradient-text">every admin.</span>
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

          {/* Right: product mockup placeholder */}
          <div className="hidden lg:block animate-fade-up animate-delay-300">
            {/* REPLACE WITH: /public/hero-dashboard.png · 1200×900 · AIBgin teacher dashboard screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.09] bg-gradient-to-br from-ink-800/80 to-ink-950/90 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              style={{ aspectRatio: "4/3" }}>
              {/* Fake browser chrome */}
              <div className="h-9 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-4 gap-2 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 mx-4 h-5 bg-white/[0.04] rounded-md border border-white/[0.06] flex items-center px-3">
                  <span className="text-[9px] text-slate-600 font-mono">app.aibgin.cz/dashboard</span>
                </div>
              </div>
              {/* Fake dashboard content */}
              <div className="p-4 space-y-3">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="h-5 w-36 bg-white/[0.05] rounded-md" />
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-pulse mr-1" />
                      <div className="h-2 w-8 bg-brand-emerald/30 rounded" />
                    </div>
                  </div>
                </div>
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-2">
                  {["bg-brand-indigo/10","bg-brand-cyan/10","bg-brand-emerald/10"].map((c,i) => (
                    <div key={i} className={`${c} rounded-xl p-3 border border-white/[0.05]`}>
                      <div className="h-6 w-8 bg-white/[0.1] rounded mb-2" />
                      <div className="h-2 w-14 bg-white/[0.07] rounded mb-1" />
                      <div className="h-1.5 w-10 bg-white/[0.04] rounded" />
                    </div>
                  ))}
                </div>
                {/* Table rows */}
                <div className="space-y-1.5">
                  {[85,70,60,45,90].map((w,i) => (
                    <div key={i} className="flex items-center gap-3 py-1.5 border-b border-white/[0.04]">
                      <div className="w-5 h-5 rounded bg-white/[0.06]" />
                      <div className="h-2 bg-white/[0.07] rounded flex-1" style={{width:`${w}%`}} />
                      <div className="w-12 h-4 bg-brand-emerald/10 rounded-full border border-brand-emerald/20" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Overlay placeholder label */}
              <div className="absolute inset-0 flex items-end justify-end p-3 pointer-events-none">
                <span className="text-[9px] font-mono text-white/15 bg-black/20 px-2 py-1 rounded">
                  hero-dashboard.png · 1200×900
                </span>
              </div>
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
