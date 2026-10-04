import { IMAGES } from "./images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <img
        src={IMAGES.newBrain.src}
        alt="AIB.core: the gold core of an AIB"
        width={IMAGES.newBrain.width}
        height={IMAGES.newBrain.height}
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] opacity-35 lg:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-16 sm:pt-24 sm:pb-28">
        <p className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-gold/70 bg-gold/15 text-[11px] sm:text-xs font-extrabold tracking-[0.16em] uppercase text-gold-light">
          In development — being built on AIB.core
        </p>
        <h1 className="headline text-white text-[2.2rem] min-[400px]:text-[2.6rem] sm:text-6xl lg:text-7xl mb-7 sm:mb-9 max-w-5xl">
          A TEACHER&rsquo;S AIB THAT KNOWS
          <span className="block gold-text">WHAT EVERY STUDENT ALREADY KNOWS.</span>
        </h1>
        <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl mb-9">
          AIBgin is an AIB for schools: an intelligent being that remembers what each student has already learned — and builds on it. Not a chatbot that starts from zero every lesson.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="mailto:info@aiblab.info?subject=AIBgin%20for%20our%20school"
            className="btn-gold inline-flex items-center justify-center px-7 py-4 rounded-xl font-extrabold text-base transition-all hover:-translate-y-0.5">
            Interested for your school? info@aiblab.info
          </a>
          <a href="#idea"
            className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-4 rounded-xl font-semibold hover:bg-white/[0.08] transition-all">
            See the idea
          </a>
        </div>
      </div>
    </section>
  );
}
