import { IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <img
        src={IMAGES.ginHero.src}
        alt="An empty classroom at dusk with a glowing AIB core linked to every desk"
        width={IMAGES.ginHero.width}
        height={IMAGES.ginHero.height}
        className="absolute inset-0 w-full h-full object-cover object-[60%_center] opacity-30 lg:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(55%_70%_at_85%_30%,rgba(77,139,255,0.22),transparent_70%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-7 pt-14 pb-16 sm:pt-24 sm:pb-28">
        <p className="inline-flex items-center gap-2 mb-7 px-3 py-1 rounded-full bg-accent text-accent-ink text-sm font-semibold">
          In development · built on AIB.core
        </p>
        <h1 className="headline text-ink text-[2.6rem] min-[400px]:text-[2.9rem] sm:text-6xl lg:text-[4.6rem] leading-[0.98] tracking-[-0.04em] mb-7 sm:mb-9 max-w-4xl [text-wrap:balance]">
          <span className="block">An AIB for every student.</span>
          <span className="block accent-text [text-wrap:balance]">One that starts where they are.</span>
        </h1>
        <p className="text-soft text-lg sm:text-xl leading-relaxed max-w-2xl mb-4">
          AIBgin is an AIB for schools. Our goal is an intelligent being for each student that remembers what they have already learned and builds on it. Not a chatbot that starts from zero every lesson.
        </p>
        <p className="text-soft text-lg sm:text-xl leading-relaxed max-w-2xl mb-9">
          AI that belongs to the school and its people, not to a platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="mailto:info@aiblab.info?subject=AIBgin%20for%20our%20school" className="btn btn-solid">
            Interested for your school? info@aiblab.info
          </a>
          <a href="#idea" className="btn btn-line">
            See the idea
          </a>
        </div>
      </div>
    </section>
  );
}
