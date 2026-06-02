export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-[#1a3a6b] via-[#1e4a80] to-[#00b4d8] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse"></span>
            EU AI Act Compliant · GDPR Ready · Zero Child Accounts
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Safe AI for Schools,<br />
            <span className="text-[#90e0ef]">Built for Trust.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-4">
            AIBgin is the AI chatbot platform designed for schools, MATs, and child-serving institutions.
            Every response is audited in real time by AIBguard. No child ever needs to register — access is via QR code.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 text-sm text-white/70">
            <span>✓ Works in 30 minutes</span>
            <span>✓ No IT infrastructure required</span>
            <span>✓ EU data residency</span>
            <span>✓ Article 28b compliant</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              className="bg-white text-[#1a3a6b] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#90e0ef] transition-colors shadow-lg text-center"
            >
              Request a Free Demo
            </a>
            <a
              href="#pricing"
              className="border border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors text-center"
            >
              See Pricing →
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl">
          {[
            { value: "0", label: "Child registrations required" },
            { value: "5", label: "Layers of protection" },
            { value: "<1s", label: "Safety audit latency" },
            { value: "EU", label: "Data residency, always" },
          ].map((s) => (
            <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-4">
              <div className="text-3xl font-extrabold text-[#90e0ef]">{s.value}</div>
              <div className="text-xs text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
