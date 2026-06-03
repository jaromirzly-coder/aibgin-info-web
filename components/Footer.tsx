const ecosystem = [
  { label: "aiblab.info",      href: "https://aiblab.info",      desc: "Hub" },
  { label: "aibgin.info",      href: "https://aibgin.info",      desc: "Schools" },
  { label: "aibguardian.info", href: "https://aibguardian.info", desc: "Safety" },
  { label: "aibfamily.cloud",  href: "https://aibfamily.cloud",  desc: "Families" },
];

const productLinks = [
  { label: "How It Works",    href: "#how-it-works" },
  { label: "AIBguard Safety", href: "#features" },
  { label: "Pricing",         href: "#pricing" },
  { label: "Compliance",      href: "#compliance" },
  { label: "Request Demo",    href: "#demo" },
];

const legalLinks = [
  { label: "Privacy Policy",      href: "/privacy-policy" },
  { label: "Terms of Service",    href: "/terms" },
  { label: "GDPR Statement",      href: "/gdpr" },
  { label: "EU AI Act Compliance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-cyan flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" stroke="white" strokeWidth="1.5"/>
                  <circle cx="7" cy="7" r="1.5" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                AIB<span className="gradient-text">gin</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Safe AI platform for schools, MATs, and child-serving institutions. EU AI Act compliant. Zero child accounts.
            </p>
            <p className="text-slate-600 text-xs">AIBlab · SAY TO PAY s.r.o.</p>
            <p className="text-slate-600 text-xs">Czech Republic · EU</p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Product</h5>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Ecosystem</h5>
            <ul className="space-y-3">
              {ecosystem.map((d) => (
                <li key={d.label}>
                  <a href={d.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                    {d.label}
                    <span className="text-slate-700 text-[10px] font-medium border border-white/[0.06] px-1.5 py-0.5 rounded-full">
                      {d.desc}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 mb-5 uppercase tracking-[0.15em]">Legal</h5>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-500 hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 AIBgin · AIBlab · SAY TO PAY s.r.o. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="mailto:info@aibgin.info" className="hover:text-brand-cyan transition-colors">info@aibgin.info</a>
            <a href="mailto:support@aibgin.info" className="hover:text-brand-cyan transition-colors">support@aibgin.info</a>
            <a href="#waitlist" className="hover:text-brand-cyan transition-colors">Join Waitlist →</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
