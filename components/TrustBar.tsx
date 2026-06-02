const institutions = [
  "Primary Schools", "Secondary Schools", "Multi-Academy Trusts",
  "School Districts", "After-School Clubs", "Youth Centres",
  "Special Education", "Community Learning",
];

const logos = [
  { label: "EU AI Act", sub: "Article 28b" },
  { label: "GDPR",      sub: "Compliant" },
  { label: "ISO 42001", sub: "Aligned" },
  { label: "NIST AI",   sub: "RMF" },
  { label: "KCSiE",     sub: "UK" },
];

export default function TrustBar() {
  return (
    <div className="bg-ink-900 border-y border-white/[0.06]">
      {/* Compliance logos */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {logos.map((l) => (
          <div key={l.label} className="flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-brand-indigo/40 to-brand-cyan/40 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1l1 3h3l-2.5 1.8 1 3L5 7.2 2.5 8.8l1-3L1 4h3L5 1z" fill="#6366f1"/>
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-white leading-none">{l.label}</div>
              <div className="text-[10px] text-slate-500">{l.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Institution types */}
      <div className="border-t border-white/[0.04] py-4">
        <p className="text-center text-[10px] font-semibold text-slate-600 uppercase tracking-[0.15em] mb-3">
          Designed for every child-serving institution
        </p>
        <div className="flex flex-wrap justify-center gap-2 px-4">
          {institutions.map((inst) => (
            <span key={inst}
              className="text-[11px] font-medium text-slate-500 bg-white/[0.03] border border-white/[0.06] px-3 py-1 rounded-full">
              {inst}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
