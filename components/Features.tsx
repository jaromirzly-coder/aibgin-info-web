const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v5c0 4.85 3.25 9.39 8 10.5C16.75 20.39 20 15.85 20 11V6l-9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AIBguard Safety Layer",
    body: "Dual-model audit (Claude Sonnet + Haiku) on every response. Fail-closed: any error = block, not pass.",
    tag: "Core Safety",
    accent: "brand-indigo",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="5" y="2" width="9" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 6h3M8 9h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="15" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13.5 16h3M15 14.5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Zero Student Accounts",
    body: "Students never create accounts, share emails, or install anything. A QR code on the board is all they need.",
    tag: "Privacy",
    accent: "brand-cyan",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 3v5h-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: "Real-Time Crisis Detection",
    body: "Purpose-trained detection of self-harm signals, grooming patterns, and distress. Immediate escalation path.",
    tag: "Safeguarding",
    accent: "brand-pink",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 4h14v10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 18h6M11 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 8h6M8 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Age-Appropriate Profiles",
    body: "Separate guardrail profiles for KS1, KS2, KS3/4, and Post-16. Each tuned to the developmental stage.",
    tag: "EdTech",
    accent: "brand-violet",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 5h16M3 10h16M3 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M17.5 16h1M18 15.5v1" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: "5-Year Audit Log",
    body: "Every interaction logged with AIBguard verdict and reason code. Stored EU-only. Available for Ofsted inspection.",
    tag: "Compliance",
    accent: "brand-emerald",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="16" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: "Per-Tenant Encryption",
    body: "Each school's data encrypted with a unique AES-256 key. Your data is never commingled with another institution.",
    tag: "Security",
    accent: "brand-indigo",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 11h2M17 11h2M11 3v2M11 17v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "EU Data Residency",
    body: "All data stored and processed within the EU. No US transfers. Fully GDPR Article 46 compliant.",
    tag: "GDPR",
    accent: "brand-cyan",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M13 2L3 14h9l-3 7 10-12h-9l3-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "10,000 Queries / Month",
    body: "Generous included quotas cover typical classroom use. Full usage dashboard. No throttling mid-lesson.",
    tag: "Platform",
    accent: "brand-violet",
  },
];

const accentMap: Record<string, string> = {
  "brand-indigo": "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/20",
  "brand-cyan":   "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
  "brand-pink":   "text-brand-pink bg-brand-pink/10 border-brand-pink/20",
  "brand-violet": "text-brand-violet bg-brand-violet/10 border-brand-violet/20",
  "brand-emerald":"text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20",
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-ink-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-indigo/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-[0.2em] mb-4">Platform Features</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Safety is not a feature.<br/>
            <span className="gradient-text">It's the foundation.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every component of AIBgin is designed around child protection and institutional compliance — not retrofitted afterwards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title}
              className="group glass rounded-2xl p-5 hover:-translate-y-1 hover:bg-white/[0.07] transition-all duration-300 cursor-default">
              <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-4 ${accentMap[f.accent]}`}>
                {f.tag}
              </div>
              <div className="text-brand-indigo group-hover:text-brand-cyan transition-colors mb-3">
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
