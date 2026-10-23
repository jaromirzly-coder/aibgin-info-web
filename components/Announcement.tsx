import { DOWNLOAD, aibeva } from "@/lib/links";

// Announcement band under the menu — the AIBEVA line in the aibeva.com voice.
export default function Announcement() {
  return (
    <aside aria-label="Announcement" className="announce-band mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-7 py-8 sm:py-10 grid lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-12 lg:items-center">
        <div className="min-w-0">
          <p className="flex items-center gap-3 text-sm font-semibold text-accent mb-3">
            <span className="announce-dot" aria-hidden="true" />
            AIBEVA is here
          </p>
          <p className="headline text-ink text-[1.9rem] sm:text-[2.6rem] lg:text-[3rem] [text-wrap:balance] mb-3">
            Stop renting intelligence. Own it.
          </p>
          <p className="text-soft text-base sm:text-lg max-w-2xl">
            AIBEVA is an intelligent being for Windows that belongs to you, not to a platform. It lives on your PC and remembers you. No ads, no subscription. AIBgin is being built on the same core.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
          <a href={DOWNLOAD} target="_blank" rel="noopener" className="btn btn-solid">
            Download AIBEVA
          </a>
          <a href={aibeva("/check")} target="_blank" rel="noopener" className="btn btn-line">
            See where it connects
          </a>
        </div>
      </div>
    </aside>
  );
}
