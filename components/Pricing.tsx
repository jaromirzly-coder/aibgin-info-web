const summerFeatures = [
  "1 classroom or group",
  "20–35 children · 1 teacher",
  "10,000 queries/month",
  "AIBguard real-time audit",
  "QR code access — no student registration",
  "Crisis detection + Helpline 116 111",
  "Basic audit log",
  "Onboarding + safety configuration",
  "🏅 AIBgin Pilot School Certificate",
];

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    annualNote: "$39/mo billed annually",
    desc: "One school getting started with AI-assisted learning.",
    tag: null,
    classrooms: "Up to 5 classrooms",
    queries: "50,000 queries/month",
    features: [
      "AIBguard safety audit",
      "Age-appropriate profiles",
      "QR code access — no student accounts",
      "1-year audit log",
      "Email support",
      "EU data residency",
    ],
    cta: "Start Free Trial",
    ctaStyle: "glass border border-white/[0.12] text-white hover:bg-white/[0.08]",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    annualNote: "$119/mo billed annually",
    desc: "Schools scaling AI across departments with advanced safeguarding.",
    tag: "Most Popular",
    classrooms: "Up to 20 classrooms",
    queries: "200,000 queries/month",
    features: [
      "Everything in Starter",
      "AIBguard + crisis detection",
      "Safeguarding lead escalation",
      "Custom content guardrails",
      "5-year audit log",
      "Priority support + onboarding call",
    ],
    cta: "Request Demo",
    ctaStyle: "bg-gradient-to-r from-brand-indigo to-brand-cyan text-white hover:opacity-90 shadow-glow-indigo",
    highlight: true,
  },
  {
    name: "District",
    price: "$499",
    period: "/mo",
    annualNote: "$399/mo billed annually",
    desc: "MATs, school districts, and multi-site organisations.",
    tag: "Enterprise",
    classrooms: "Unlimited classrooms",
    queries: "Unlimited queries",
    features: [
      "Everything in Growth",
      "White-label branding",
      "SSO / LDAP integration",
      "Dedicated account manager",
      "SLA 99.9% uptime",
      "Custom data retention policy",
    ],
    cta: "Contact Sales",
    ctaStyle: "glass border border-brand-violet/40 text-brand-violet hover:bg-brand-violet/10",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-ink-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand-indigo uppercase tracking-[0.2em] mb-4">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Transparent pricing.<br/>
            <span className="gradient-text">No surprises.</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            All plans include AIBguard safety, EU data residency, and GDPR compliance.
          </p>

          {/* Annual toggle hint */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mt-6 text-sm">
            <span className="w-2 h-2 bg-brand-emerald rounded-full"></span>
            <span className="text-slate-300">Save <strong className="text-brand-emerald">20%</strong> with annual billing</span>
          </div>
        </div>

        {/* ── Summer Package ── */}
        <div className="relative mb-10 pt-4">
          <div className="absolute top-0 left-6 z-10">
            <span className="text-xs font-black px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 tracking-wide">
              🌞 SUMMER PACKAGE — LIMITED TIME
            </span>
          </div>
          <div className="rounded-2xl border-2 border-amber-400/50 bg-gradient-to-br from-amber-950/50 via-amber-900/20 to-yellow-950/30 p-7 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-amber-400/10 blur-[80px] pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-8 pt-3">
            {/* Name + price */}
            <div className="shrink-0 min-w-[180px]">
              <h3 className="text-xl font-black text-white mb-3">Summer Testing Program</h3>
              <div className="flex items-end gap-1.5">
                <span className="text-4xl font-black text-amber-300">$59</span>
                <span className="text-slate-400 text-sm mb-1.5">for 2 months</span>
              </div>
              <div className="text-xs text-amber-400/80 mt-1.5">July + August 2026 · No automatic renewal</div>
            </div>

            <div className="hidden md:block w-px self-stretch bg-amber-400/20" />

            {/* Features grid */}
            <ul className="flex-1 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {summerFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-6.5 6.5a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L6.5 10.086l5.793-5.793a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="shrink-0">
              <a
                href="mailto:hello@aibgin.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-950 font-black px-7 py-4 rounded-xl text-sm hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20 whitespace-nowrap"
              >
                Get Summer Package →
              </a>
              <p className="text-xs text-slate-600 mt-2 text-center">hello@aibgin.com</p>
            </div>
          </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
              p.highlight
                ? "bg-gradient-to-b from-brand-indigo/20 to-brand-cyan/5 border border-brand-indigo/50 shadow-glow-indigo"
                : "glass"
            }`}>
              {p.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-xs font-bold px-4 py-1.5 rounded-full ${
                    p.highlight ? "bg-gradient-to-r from-brand-indigo to-brand-cyan text-white" : "bg-brand-violet/20 border border-brand-violet/40 text-brand-violet"
                  }`}>{p.tag}</span>
                </div>
              )}

              <div className="mb-5 pt-2">
                <h3 className="text-base font-bold text-white mb-1">{p.name}</h3>
                <p className="text-xs text-slate-500">{p.desc}</p>
              </div>

              <div className="mb-1">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-slate-500 text-sm mb-1.5">{p.period}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">{p.annualNote}</div>
              </div>

              <div className="glass rounded-xl px-3 py-2 mb-5 mt-3 text-xs text-slate-400 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1l1.5 3.5H11l-3 2.2 1.2 3.6L6 8.4 2.8 10.3 4 6.7 1 4.5h3.5L6 1z" fill="#6366f1"/>
                </svg>
                {p.classrooms} · {p.queries}
              </div>

              <ul className="space-y-2.5 flex-1 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M13.707 4.293a1 1 0 010 1.414l-6.5 6.5a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L6.5 10.086l5.793-5.793a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#demo"
                className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${p.ctaStyle}`}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-600 mt-8">
          All prices in USD. VAT may apply.{" "}
          <a href="#demo" className="text-brand-indigo hover:underline">Need a custom quote for your district?</a>
        </p>
      </div>
    </section>
  );
}
