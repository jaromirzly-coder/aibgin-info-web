"use client";
import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", institution: "", role: "", size: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) { e.preventDefault(); setSubmitted(true); }

  return (
    <section id="demo" className="py-24 bg-ink-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-indigo/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left copy */}
          <div className="pt-4">
            <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-[0.2em] mb-4">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Request a free demo.<br/>
              <span className="gradient-text">No sales pressure.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              We'll walk your team through AIBgin, show the AIBguard audit live, and answer every compliance question you have.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                { icon: "🎯", text: "30-min live walkthrough with your team" },
                { icon: "📋", text: "Full compliance documentation pack" },
                { icon: "🆓", text: "Free 30-day trial — up to 2 classrooms" },
                { icon: "🤝", text: "Dedicated onboarding for District plans" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="text-lg leading-none mt-0.5">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="glass rounded-2xl p-5">
              <div className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">Or reach us directly</div>
              <a href="mailto:schools@aibgin.info"
                className="flex items-center gap-2 text-brand-cyan hover:text-white transition-colors text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.25"/>
                  <path d="M1 5l7 5 7-5" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                </svg>
                schools@aibgin.info
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass-light rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-brand-emerald/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-brand-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request received!</h3>
                <p className="text-slate-400 text-sm">We'll be in touch within one business day to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-5">Book your demo</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name",  label: "Full name",   placeholder: "Jane Smith",        type: "text" },
                    { name: "email", label: "Work email",  placeholder: "jane@school.edu",   type: "email" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">{f.label} *</label>
                      <input required type={f.type} name={f.name} value={(form as any)[f.name]} onChange={handleChange}
                        placeholder={f.placeholder}
                        className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-indigo/60 focus:bg-white/[0.08] transition-all"/>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">Institution name *</label>
                  <input required name="institution" value={form.institution} onChange={handleChange}
                    placeholder="Greenfield Academy"
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-indigo/60 transition-all"/>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "role", label: "Your role",
                      options: ["Headteacher / Principal", "Deputy Head", "IT Manager", "Safeguarding Lead", "MAT / District Leadership", "Teacher"],
                    },
                    {
                      name: "size", label: "Institution size",
                      options: ["1 school (<300 students)", "1 school (300–1000)", "1 school (1000+)", "2–5 schools (MAT)", "6+ schools (District)"],
                    },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold text-slate-400 mb-1.5">{f.label}</label>
                      <select name={f.name} value={(form as any)[f.name]} onChange={handleChange}
                        className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-3.5 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-indigo/60 transition-all appearance-none">
                        <option value="" className="bg-ink-900">Select…</option>
                        {f.options.map((o) => <option key={o} value={o} className="bg-ink-900">{o}</option>)}
                      </select>
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5">Anything specific to cover?</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="e.g. GDPR compliance, Ofsted readiness, safeguarding integration…"
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-brand-indigo/60 transition-all resize-none"/>
                </div>

                <button type="submit"
                  className="w-full bg-gradient-to-r from-brand-indigo to-brand-cyan text-white py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-glow-indigo">
                  Request Free Demo →
                </button>
                <p className="text-[11px] text-slate-600 text-center">No spam. Reply within 1 business day.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
