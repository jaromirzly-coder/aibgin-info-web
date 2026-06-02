const ecosystem = [
  { label: "aiblab.info", href: "https://aiblab.info", desc: "Hub" },
  { label: "aibgin.info", href: "https://aibgin.info", desc: "Schools" },
  { label: "aibguardian.info", href: "https://aibguardian.info", desc: "Safety" },
  { label: "aibfamily.cloud", href: "https://aibfamily.cloud", desc: "Families" },
];

const productLinks = [
  { label: "AIBgin Platform", href: "#features" },
  { label: "AIBguard Safety", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Request Demo", href: "#demo" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "GDPR Statement", href: "#" },
  { label: "EU AI Act Compliance", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1f3d] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-1 text-2xl font-extrabold mb-3">
              <span className="text-white">AIB</span>
              <span className="text-[#00b4d8]">gin</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Safe AI platform for schools, MATs, and child-serving institutions. EU AI Act compliant. Zero child accounts.
            </p>
            <p className="text-slate-500 text-xs mt-3">A product of AIBlab · SAY TO PAY s.r.o.</p>
            <p className="text-slate-500 text-xs">Czech Republic · EU</p>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h5>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-[#00b4d8] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Ecosystem</h5>
            <ul className="space-y-2.5">
              {ecosystem.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-[#00b4d8] transition-colors flex items-center gap-2"
                  >
                    {d.label}
                    <span className="text-slate-600 text-xs">({d.desc})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal & Compliance</h5>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-[#00b4d8] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 AIBgin · AIBlab · SAY TO PAY s.r.o. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:schools@aibgin.info" className="hover:text-[#00b4d8] transition-colors">
              schools@aibgin.info
            </a>
            <a
              href="https://app.aibgin.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00b4d8] transition-colors"
            >
              app.aibgin.cz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
