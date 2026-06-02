const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    desc: "Perfect for a single school getting started with AI-assisted learning.",
    features: [
      "Up to 5 classrooms",
      "50,000 queries/month",
      "AIBguard safety audit",
      "Age-appropriate profiles",
      "QR code access",
      "1-year audit log",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    desc: "For schools scaling AI across departments with advanced safeguarding.",
    features: [
      "Up to 20 classrooms",
      "200,000 queries/month",
      "AIBguard + crisis detection",
      "Custom content guardrails",
      "Safeguarding lead escalation",
      "5-year audit log",
      "Priority support + onboarding",
    ],
    cta: "Request Demo",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "District",
    price: "$499",
    period: "/month",
    desc: "For MATs, school districts, and multi-site organisations.",
    features: [
      "Unlimited classrooms",
      "Unlimited queries",
      "All Growth features",
      "White-label branding",
      "SSO / LDAP integration",
      "Dedicated account manager",
      "SLA 99.9% uptime",
      "Custom data retention policy",
    ],
    cta: "Contact Sales",
    highlight: false,
    badge: "Enterprise",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a6b] mt-2">
            Transparent pricing. No surprises.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            All plans include AIBguard safety, EU data residency, and GDPR compliance. Billed monthly or annually (save 20%).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col border ${
                p.highlight
                  ? "border-[#00b4d8] shadow-xl ring-2 ring-[#00b4d8]/20 bg-white"
                  : "border-slate-100 bg-slate-50"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-extrabold text-[#1a3a6b]">{p.name}</h3>
                {p.badge && (
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    p.highlight ? "bg-[#00b4d8] text-white" : "bg-slate-200 text-slate-600"
                  }`}>
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="flex items-end gap-1 mt-3 mb-2">
                <span className="text-4xl font-extrabold text-[#1a3a6b]">{p.price}</span>
                <span className="text-slate-400 text-sm mb-1">{p.period}</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">{p.desc}</p>

              <ul className="space-y-2.5 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[#00b4d8] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${
                  p.highlight
                    ? "bg-[#1a3a6b] text-white hover:bg-[#00b4d8]"
                    : "bg-white border border-slate-200 text-[#1a3a6b] hover:border-[#00b4d8] hover:text-[#00b4d8]"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          All prices in USD. VAT may apply. Annual billing saves 20%. <a href="#demo" className="text-[#00b4d8] hover:underline">Need a custom quote?</a>
        </p>
      </div>
    </section>
  );
}
