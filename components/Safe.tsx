import { IMAGES } from "./images";
import { aibeva } from "@/lib/links";

export type LayerName = "IDENTITY" | "CHARACTER" | "GUARDIAN" | "MEMORY" | "GROWTH" | "VAULT" | "NETWORK";

// What the person sees in each layer of AIB.core (in AIBEVA today; a goal for AIBgin).
const layers: { name: LayerName; label: string; sub?: string; text: string }[] = [
  { name: "IDENTITY", label: "Identity", sub: "AIBSN",
    text: "An identity you can check in the AIBSN registry: a code with its name and country. It is clear which being it is and whose it is, and the registration can be revoked." },
  { name: "CHARACTER", label: "Character",
    text: "It says it is an AI. It does not pretend to be human. It serves its person." },
  { name: "GUARDIAN", label: "Guardian", sub: "AIBguardian",
    text: "Safety is a layer of the core, not an add-on. Under every answer: “checked by”, “on this computer”. The check runs with you, not on someone else’s server." },
  { name: "MEMORY", label: "Memory",
    text: "One panel shows everything it remembers about you. Strike a line out, or say “forget it”, and it stops using it. No hidden memory." },
  { name: "GROWTH", label: "Growth",
    text: "It grows in ten levels, from S1 Remembering to S10 Thinking. AIBEVA today is Level S2. At every level the same rules hold." },
  { name: "VAULT", label: "Vault",
    text: "Keys stay on your PC. Each provider has its own “may leave” switch and “Forget key”. Back up, restore and move to a new PC: still the same being." },
  { name: "NETWORK", label: "Network",
    text: "Its network is closed. Every way out has a switch, and you hold it. The list of every place it can connect to is public." },
];

export default function Safe({ highlight, intro }: { highlight?: LayerName; intro?: string }) {
  return (
    <section id="safe" aria-labelledby="safe-title" className="bg-bg scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-7 py-20 sm:py-28">
        <p className="kicker">Safety you can check</p>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-end mb-12">
          <h2 id="safe-title" className="headline text-ink text-[2.3rem] sm:text-5xl lg:text-[3.4rem] max-w-[16ch]">
            Seven layers.<span className="block accent-text">One rule.</span>
          </h2>
          <p className="text-soft text-lg leading-relaxed max-w-xl">
            {intro ?? "Your AIB answers to you. Seven layers make sure of it."}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-8 lg:gap-10 items-start">
          <div className="lg:sticky lg:top-24 min-w-0">
            <img
              src={IMAGES.ginLayers.src}
              alt="Seven glowing rings of AIB.core around an open book"
              width={IMAGES.ginLayers.width}
              height={IMAGES.ginLayers.height}
              loading="lazy"
              className="block w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] mx-auto h-auto [mask-image:radial-gradient(circle,black_45%,transparent_70%)] [-webkit-mask-image:radial-gradient(circle,black_45%,transparent_70%)]"
            />
          </div>
          <ol className="grid md:grid-cols-2 gap-4 min-w-0">
            {layers.map((l, i) => {
              const hot = l.name === highlight;
              return (
                <li key={l.name}
                  className={`rounded-[20px] p-6 sm:p-7 flex flex-col min-w-0 ${hot ? "bg-tint border border-accent/70" : "bg-surface border border-rule"} ${i === layers.length - 1 ? "md:col-span-2" : ""}`}>
                  <span className={`font-display font-bold text-base mb-3 ${hot ? "accent-text" : "text-faint"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-ink text-[1.35rem] font-semibold tracking-[-0.015em] mb-2">
                    {l.label}{l.sub && <span className="block text-sm font-normal tracking-normal text-faint mt-0.5">{l.sub}</span>}
                  </h3>
                  <p className="leading-relaxed text-[15px] text-soft">{l.text}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-6 card px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <span className="tag-goal self-start sm:self-auto shrink-0">Today vs. goal</span>
          <p className="text-soft text-sm sm:text-base leading-relaxed m-0">
            These seven layers work in AIBEVA today. For AIBgin they are our goal. Signed installer and signed updates · no ads · no usage statistics, no crash reports.
          </p>
        </div>
        <p className="mt-4 text-sm text-faint">
          Powered by AIB.core: Identity · Character · Guardian · Memory · Growth · Vault · Network.{" "}
          <a href={aibeva("/aib-core")} target="_blank" rel="noopener" className="text-primary-light underline underline-offset-2 hover:text-ink">The seven layers in detail ↗</a>
        </p>
      </div>
    </section>
  );
}
