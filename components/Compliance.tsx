const frameworks = [
  { name: "EU AI Act",     detail: "Article 28b — High-risk AI in education",   icon: "EU", color: "from-blue-600 to-indigo-600" },
  { name: "GDPR",          detail: "No student PII collected. EU residency.",    icon: "🔐", color: "from-brand-indigo to-brand-violet" },
  { name: "UK GDPR",       detail: "Aligned with ICO guidance for schools",      icon: "GB", color: "from-red-700 to-red-500" },
  { name: "NIST AI RMF",   detail: "Govern · Map · Measure · Manage",           icon: "US", color: "from-slate-600 to-slate-500" },
  { name: "ISO 42001",     detail: "AI Management System standard",              icon: "✓",  color: "from-brand-emerald to-teal-500" },
  { name: "KCSiE",         detail: "UK statutory safeguarding guidance",         icon: "👶", color: "from-brand-cyan to-sky-500" },
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-ink-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-xs font-bold text-brand-emerald uppercase tracking-[0.2em] mb-4">Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Every box ticked.<br/>
              <span className="gradient-text">Before you even ask.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              AIBgin is built on the principle that schools should never have to choose between educational innovation and their statutory safeguarding duties.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our compliance framework covers EU and UK regulatory requirements, international AI standards, and child protection legislation — all documented, auditable, and available for inspection.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["EU AI Act", "GDPR", "NIST AI RMF", "ISO 42001", "COPPA-aligned"].map((tag) => (
                <span key={tag}
                  className="text-xs font-semibold text-brand-indigo bg-brand-indigo/10 border border-brand-indigo/20 px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <a href="#demo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
              Request compliance documentation →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {frameworks.map((f) => (
              <div key={f.name} className="glass rounded-xl p-4 flex gap-3 items-start hover:bg-white/[0.07] transition-colors">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${f.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {f.icon}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{f.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{f.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
