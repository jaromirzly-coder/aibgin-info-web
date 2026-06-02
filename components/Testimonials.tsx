const testimonials = [
  {
    quote: "We were live in under 40 minutes. The QR code approach is genius — no permission slips, no IT tickets, no parent concerns about student accounts.",
    name: "Sarah T.",
    role: "Head of Digital Learning",
    org: "Primary School, UK",
  },
  {
    quote: "AIBguard gives our safeguarding lead complete peace of mind. Every conversation is logged, and the crisis detection has already flagged one situation we would have missed.",
    name: "James M.",
    role: "Deputy Headteacher",
    org: "Secondary School, UK",
  },
  {
    quote: "We rolled this out across 6 schools in our MAT. The District plan's white-labelling means students see our trust branding, not a third-party tool.",
    name: "Elena K.",
    role: "CEO",
    org: "Multi-Academy Trust",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f0f7ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-widest">Educators Say</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a6b] mt-2">
            Trusted by schools across Europe
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm flex flex-col gap-4">
              <svg className="w-8 h-8 text-[#00b4d8]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.quote}"</p>
              <div>
                <div className="font-bold text-[#1a3a6b] text-sm">{t.name}</div>
                <div className="text-xs text-slate-400">{t.role} · {t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
