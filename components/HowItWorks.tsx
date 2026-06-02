const steps = [
  {
    n: "01",
    title: "Admin signs up",
    body: "The school administrator or IT lead creates a tenant account. No student data is ever collected at sign-up.",
  },
  {
    n: "02",
    title: "Configure your AI",
    body: "Choose age group, subject focus, and content guardrails. Upload your school branding in minutes.",
  },
  {
    n: "03",
    title: "Print the QR code",
    body: "A unique QR code is generated for each class or session. Students scan it — no login, no account, no app to install.",
  },
  {
    n: "04",
    title: "Students learn safely",
    body: "Every message is audited by AIBguard in real time. Harmful content is blocked before it reaches the student.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-[#00b4d8] text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a3a6b] mt-2">
            Live in 30 minutes. No IT required.
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            AIBgin is a fully managed platform. There is nothing to install, no infrastructure to maintain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#00b4d8]/40 to-transparent z-0" />
              )}
              <div className="relative z-10 bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                <div className="text-3xl font-extrabold text-[#00b4d8]/30 mb-3">{s.n}</div>
                <h3 className="font-bold text-[#1a3a6b] mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
