const steps = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Admin signs up",
    body: "The school admin creates a tenant account in minutes. No student data is collected at any point during setup.",
    color: "from-brand-indigo/20 to-transparent",
    border: "border-brand-indigo/30",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 9h2v2H9zM13 9h2v2h-2zM9 13h2v2H9zM13 13h2v2h-2z" fill="currentColor" opacity="0.6"/>
        <path d="M7 7h10M7 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Configure & brand",
    body: "Choose age group, subject focus, and content guardrails. Upload your school logo. Done in under 5 minutes.",
    color: "from-brand-violet/20 to-transparent",
    border: "border-brand-violet/30",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="17" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15.5 17h3M17 15.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Print the QR code",
    body: "A class-specific QR code is generated instantly. Students scan it — no app, no login, no account ever.",
    color: "from-brand-cyan/20 to-transparent",
    border: "border-brand-cyan/30",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Students learn safely",
    body: "Every AI response passes AIBguard before a student sees it. PASS, ALERT, or CRITICAL — logged and auditable.",
    color: "from-brand-emerald/20 to-transparent",
    border: "border-brand-emerald/30",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-ink-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-brand-indigo/40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-indigo uppercase tracking-[0.2em] mb-4">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Live in 30 minutes.<br/>
            <span className="gradient-text">No IT required.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            AIBgin is fully managed. Nothing to install, no infrastructure to maintain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className={`group relative glass rounded-2xl p-6 border ${s.border} hover:card-hover transition-all duration-300 hover:-translate-y-1`}>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-brand-indigo group-hover:text-brand-cyan transition-colors">
                    {s.icon}
                  </div>
                  <span className="text-3xl font-black text-white/10 font-mono">0{i+1}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
