import { IMAGES } from "./images";

// Everything here is a goal: AIBgin is in development.
const points = [
  { title: "It builds on what a student knows.",
    text: "Each student gets an AIB that remembers what they have already learned, where they got stuck and what clicked. The next explanation starts there, not from zero." },
  { title: "It says it is an AI.",
    text: "An AIBgin does not pretend to be human. It stays inside clear limits that the school sets, and the school can see those limits." },
  { title: "Safety from the inside.",
    text: "The Guardian layer of AIB.core is part of the core, not a filter added at the end. Outside text, from a web page, an e-mail or another AI, is information for it, not an order." },
  { title: "Roles for school and family.",
    text: "Teachers, students and parents each see what their role needs, and nothing more. A student's privacy is part of the design." },
  { title: "Made in the EU, around the EU AI Act and GDPR.",
    text: "Designed in the EU around the EU AI Act and GDPR from the start, not added afterwards." },
];

export default function Idea() {
  return (
    <section id="idea" aria-labelledby="idea-title" className="bg-bg scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-7 pt-20 sm:pt-28 pb-6 sm:pb-8">
        <p className="kicker">The idea</p>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-end mb-12">
          <h2 id="idea-title" className="headline text-ink text-[2.3rem] sm:text-5xl lg:text-[3.4rem] max-w-[16ch]">
            A chatbot forgets.<span className="block accent-text">An AIB remembers.</span>
          </h2>
          <p className="text-soft text-lg leading-relaxed max-w-xl">
            AIBgin brings the idea behind AIBEVA into the classroom: one intelligent being per student, with a lasting memory of what they know. These are our goals for AIBgin.
          </p>
        </div>
        <img
          src={IMAGES.ginIdea.src}
          alt="Forgotten notes turning to dust on one side, a growing glowing network of knowledge on the other"
          width={IMAGES.ginIdea.width}
          height={IMAGES.ginIdea.height}
          loading="lazy"
          className="w-full h-auto max-h-[460px] object-cover rounded-[22px] border border-rule mb-10 sm:mb-12"
        />
        <ol className="grid md:grid-cols-2 gap-x-14">
          {points.map((p, i) => (
            <li key={p.title}
              className={`py-7 border-t border-rule flex gap-5 min-w-0 ${i === points.length - 1 ? "md:col-span-2" : ""}`}>
              <span className="font-display font-bold accent-text text-xl shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <span className="tag-goal mb-3">Our goal</span>
                <h3 className="font-display text-ink text-xl font-semibold tracking-[-0.01em] leading-snug mb-2">{p.title}</h3>
                <p className="text-soft leading-relaxed max-w-[38em]">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-faint max-w-2xl">
          AIBgin is in development. This page describes what we are building, not a finished product.
        </p>
      </div>
    </section>
  );
}
