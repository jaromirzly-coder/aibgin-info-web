const features = [
  {
    icon: "🔒",
    title: "AIBguard Safety Layer",
    body: "Every AI response passes through a dual-model audit pipeline (Claude Sonnet + Haiku) before reaching the student. Fail-closed: if the audit errors, the response is blocked.",
    tag: "Core Safety",
  },
  {
    icon: "📱",
    title: "Zero Registration for Students",
    body: "Students never create accounts, share emails, or install anything. A QR code on the classroom board is all they need. No COPPA or GDPR exposure from student data.",
    tag: "Privacy",
  },
  {
    icon: "🚨",
    title: "Crisis Detection & Escalation",
    body: "Real-time detection of distress signals, safeguarding concerns, and self-harm language. Immediate escalation path to designated safeguarding leads and emergency services.",
    tag: "Safeguarding",
  },
  {
    icon: "🎓",
    title: "Age-Appropriate Profiles",
    body: "Separate content profiles for KS1, KS2, KS3/4, and post-16. Each profile has tuned guardrails appropriate to the developmental stage and curriculum context.",
    tag: "EdTech",
  },
  {
    icon: "🗄️",
    title: "5-Year Audit Log",
    body: "Every interaction is logged with timestamp, session ID, and AIBguard verdict. Stored in EU (eu-central-1). Available for Ofsted, GDPR subject access requests, and safeguarding reviews.",
    tag: "Compliance",
  },
  {
    icon: "🔑",
    title: "Per-Tenant Encryption",
    body: "Each school's conversation data is encrypted with a unique AES-256 key. Your data is never commingled with another institution's data.",
    tag: "Security",
  },
  {
    icon: "🌐",
    title: "EU Data Residency",
    body: "All data is stored and processed within the EU. No data transfer to the US or third countries. Fully GDPR Article 46 compliant.",
    tag: "GDPR",
  },
  {
    icon: "⚡",
    title: "10,000 Queries / Month per Class",
    body: "Generous included quotas cover typical classroom use. Usage dashboards give admins full visibility. Rollover unused queries to the next month.",
    tag: "Platform",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-widest">Platform Features</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a6b] mt-2">
            Safety is not a feature. It's the foundation.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Every component of AIBgin is designed around child protection and institutional compliance — not retrofitted afterwards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{f.icon}</div>
              <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-wider mb-2">{f.tag}</div>
              <h3 className="font-bold text-[#1a3a6b] mb-2 text-sm">{f.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
