import { aibeva, AIBLAB, DOWNLOAD } from "@/lib/links";
import { IMAGES } from "./images";

// "Meet AIBEVA" call to action — shared by every AIBlab site; headline and intro differ per site.
export default function GetAibeva({
  kicker = "See it working",
  title,
  accent,
  intro,
  adultsNote = false,
}: {
  kicker?: string;
  title: string;
  accent: string;
  intro: string;
  adultsNote?: boolean;
}) {
  return (
    <section id="aibeva" aria-labelledby="aibeva-title" className="relative overflow-hidden bg-bg border-y border-rule scroll-mt-16">
      <img
        src={IMAGES.ginAibeva.src}
        alt="Your AIB lives on your own computer"
        width={IMAGES.ginAibeva.width}
        height={IMAGES.ginAibeva.height}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/40 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-7 py-20 sm:py-28">
        <p className="kicker">{kicker}</p>
        <h2 id="aibeva-title" className="headline text-ink text-[2.3rem] sm:text-5xl lg:text-[3.6rem] mb-6 max-w-3xl">
          {title}<span className="block accent-text">{accent}</span>
        </h2>
        <p className="text-soft text-lg sm:text-xl leading-relaxed max-w-2xl mb-8">{intro}</p>
        <ul className="grid sm:grid-cols-3 gap-3 max-w-3xl mb-9 text-[15px] font-semibold text-ink">
          {["Its own identity", "A memory you can see, on your PC", "No ads · no subscription"].map((t) => (
            <li key={t} className="rounded-[18px] border border-rule bg-surface/90 px-4 py-3">{t}</li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={DOWNLOAD} target="_blank" rel="noopener" className="btn btn-solid">
            Download AIBEVA
          </a>
          <a href={aibeva()} target="_blank" rel="noopener" className="btn btn-line bg-bg/40">
            Meet AIBEVA ↗
          </a>
          <a href={AIBLAB} target="_blank" rel="noopener" className="btn btn-line bg-bg/40">
            AIBlab ↗
          </a>
        </div>
        <p className="mt-6 text-sm text-faint max-w-2xl">
          AIBEVA, Level S2 · Windows 10/11, 64-bit · signed installer.{adultsNote ? " AIBEVA is for adults (18+)." : ""} AIBEVA is an artificial intelligence system: when you use it, you are interacting with an AI, not a human being.
        </p>
      </div>
    </section>
  );
}
