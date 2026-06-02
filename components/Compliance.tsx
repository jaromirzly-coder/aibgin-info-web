const frameworks = [
  { name: "EU AI Act", detail: "Article 28b — High-risk AI in education", icon: "🇪🇺" },
  { name: "GDPR", detail: "No student PII collected. EU residency.", icon: "🔐" },
  { name: "UK GDPR", detail: "Aligned with ICO guidance for schools", icon: "🇬🇧" },
  { name: "NIST AI RMF", detail: "Govern, Map, Measure, Manage", icon: "📋" },
  { name: "ISO 42001", detail: "AI Management System standard", icon: "✅" },
  { name: "Keeping Children Safe in Education", detail: "UK statutory safeguarding guidance", icon: "👶" },
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-widest">Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a6b] mt-2 leading-tight">
              Every box ticked.<br />Before you even ask.
            </h2>
            <p className="text-slate-600 mt-5 leading-relaxed">
              AIBgin is built on the principle that schools should never have to choose between educational innovation and their statutory safeguarding duties.
            </p>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Our compliance framework covers EU and UK regulatory requirements, international AI standards, and child protection legislation — all documented, auditable, and available for inspection.
            </p>
            <div className="mt-8">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-[#1a3a6b] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#00b4d8] transition-colors"
              >
                Request compliance documentation →
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {frameworks.map((f) => (
              <div key={f.name} className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex gap-3 items-start">
                <span className="text-2xl shrink-0">{f.icon}</span>
                <div>
                  <div className="font-bold text-[#1a3a6b] text-sm">{f.name}</div>
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
