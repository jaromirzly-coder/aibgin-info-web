import { SITE } from "@/lib/site";
import { ECOSYSTEM } from "@/lib/links";
import CookieSettings from "./CookieSettings";

const H = "font-display text-[0.95rem] font-semibold text-ink mb-4";
const A = "text-[0.92rem] text-soft hover:text-primary-light transition-colors";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-rule">
      <div className="max-w-6xl mx-auto px-4 sm:px-7 pt-14 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr] gap-10 mb-10">
          <div className="min-w-0">
            <p className="font-display font-bold text-ink text-lg tracking-[0.04em] mb-3">{SITE.name}</p>
            <p className="text-soft text-[0.92rem] leading-relaxed">{SITE.tagline}</p>
            <p className="text-faint text-[0.88rem] leading-relaxed mt-3">Powered by AIB.core. Patent pending — over 100 patent claims, two applications filed in 2026.</p>
          </div>

          <nav aria-label="Pages" className="min-w-0">
            <h2 className={H}>{SITE.name}</h2>
            <ul className="space-y-2">
              {SITE.pages.map((p) => (
                <li key={p.href}><a href={p.href} className={A}>{p.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav aria-label="AIBlab ecosystem" className="min-w-0">
            <h2 className={H}>AIBlab ecosystem</h2>
            <ul className="space-y-2">
              {ECOSYSTEM.map((e) => (
                <li key={e.label}>
                  <a href={e.href} {...(e.href === "/" ? {} : { target: "_blank", rel: "noopener" })} className={A}>
                    {e.label} <span className="text-faint">— {e.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal" className="min-w-0">
            <h2 className={H}>Legal and help</h2>
            <ul className="space-y-2">
              <li><a href="/imprint" className={A}>Imprint</a></li>
              <li><a href="/privacy-policy" className={A}>Privacy Policy</a></li>
              <li><a href="/terms" className={A}>Terms</a></li>
              <li><CookieSettings className={`${A} text-left`} /></li>
              <li><a href="mailto:info@aiblab.info" className={A}>info@aiblab.info</a></li>
              <li><a href="mailto:support@aiblab.info" className={A}>support@aiblab.info</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-rule pt-5 text-[0.84rem] text-faint leading-relaxed">
          <p className="m-0">SAY TO PAY s.r.o. (AIBlab) · Company ID 086 94 222 · Ostrava, EU · on the market since 2019</p>
          <p className="m-0 mt-1">&copy; 2026 SAY TO PAY s.r.o.</p>
        </div>
      </div>
    </footer>
  );
}
