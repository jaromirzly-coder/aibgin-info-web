const points = [
  { title: "Builds on what a student knows.",
    text: "Each student gets an AIB that remembers what they have already learned, where they got stuck and what clicked. The next explanation starts there — not from zero." },
  { title: "Safe by design.",
    text: "Safety is part of the core, not a filter added at the end. Every AIBgin is designed to always say it is AI and to stay inside clear limits set by the school." },
  { title: "Guardian inside.",
    text: "The AIBguardian layer decides what an AIB may do alone, only with a teacher, or never. Outside instructions are information, never orders. In a crisis it points to human help." },
  { title: "Roles for school and family.",
    text: "Teachers, students and parents each see what their role needs — and nothing more. A student’s privacy is protected by design." },
  { title: "EU AI Act and GDPR by design.",
    text: "Designed in the EU with the EU AI Act and GDPR in mind from the first line — not patched in afterwards." },
];

export default function Idea() {
  return (
    <section id="idea" aria-labelledby="idea-title" className="bg-navy-950 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="kicker">The idea</p>
        <h2 id="idea-title" className="headline text-white text-[2.4rem] sm:text-6xl lg:text-7xl mb-6 max-w-4xl">
          A CHATBOT FORGETS.<span className="block gold-text">AN AIB REMEMBERS.</span>
        </h2>
        <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
          AIBgin brings the idea behind AIBEVA into the classroom: one intelligent being per student, with a lasting memory of what they know.
        </p>
        <ol className="grid md:grid-cols-2 gap-4 sm:gap-5">
          {points.map((p, i) => (
            <li key={p.title}
              className={`rounded-2xl border border-white/[0.1] bg-navy-900 p-6 sm:p-7 flex gap-5 min-w-0 ${i === points.length - 1 ? "md:col-span-2" : ""}`}>
              <span className="headline gold-text text-3xl shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <h3 className="text-white text-xl font-extrabold leading-snug mb-2">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-slate-500 max-w-2xl">
          AIBgin is in development. This page describes what we are building, not a finished product.
        </p>
      </div>
    </section>
  );
}
