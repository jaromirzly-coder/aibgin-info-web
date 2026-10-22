import { AIBLAB } from "@/lib/links";
import { IMAGES } from "./images";

export default function Schools() {
  return (
    <section id="schools" aria-labelledby="schools-title" className="bg-bg scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-7 pb-20 sm:pb-28">
        <div className="bg-tint rounded-[28px] p-6 sm:p-10 lg:p-14 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <img
            src={IMAGES.ginSchool.src}
            alt="A teacher's desk at dusk with a glowing network rising from the exercise books"
            width={IMAGES.ginSchool.width}
            height={IMAGES.ginSchool.height}
            loading="lazy"
            className="lg:col-span-2 w-full h-auto max-h-[440px] object-cover rounded-[20px]"
          />
          <div className="min-w-0">
            <p className="kicker">For your school</p>
            <h2 id="schools-title" className="headline text-ink text-[2.3rem] sm:text-5xl mb-6">
              Interested<span className="block accent-text">for your school?</span>
            </h2>
            <p className="text-soft text-lg leading-relaxed m-0">
              We are building AIBgin on AIB.core. If you want to hear more, or tell us what your school needs, write to us. A person reads every message.
            </p>
          </div>
          <div className="min-w-0 flex flex-col gap-3">
            <a href="mailto:info@aiblab.info?subject=AIBgin%20for%20our%20school" className="btn btn-solid text-lg min-h-[56px]">
              info@aiblab.info
            </a>
            <a href={AIBLAB} target="_blank" rel="noopener" className="btn btn-line">
              About AIBlab ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
