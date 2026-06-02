"use client";
import { useState } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", institution: "", role: "", size: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-[#1a3a6b] to-[#0f2a52] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-[#90e0ef] text-sm font-semibold uppercase tracking-widest">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 leading-tight">
              Request a free demo
            </h2>
            <p className="text-white/70 mt-4 leading-relaxed">
              We'll walk your team through the platform, show you the AIBguard audit in action, and answer any compliance questions you have. Live session, no sales pressure.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {[
                "30-minute live walkthrough with your team",
                "Full compliance documentation pack",
                "Trial access for up to 2 classrooms — free for 30 days",
                "Dedicated onboarding for District plans",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#00b4d8] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 text-sm text-white/50">
              Or email us directly: <a href="mailto:schools@aibgin.info" className="text-[#90e0ef] hover:underline">schools@aibgin.info</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-800">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#1a3a6b] mb-2">Request received!</h3>
                <p className="text-slate-500 text-sm">We'll be in touch within one business day to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Full name *</label>
                    <input
                      required name="name" value={form.name} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#00b4d8]"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Work email *</label>
                    <input
                      required type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#00b4d8]"
                      placeholder="jane@school.edu"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Institution name *</label>
                  <input
                    required name="institution" value={form.institution} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#00b4d8]"
                    placeholder="Greenfield Primary School"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Your role</label>
                    <select
                      name="role" value={form.role} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#00b4d8] bg-white"
                    >
                      <option value="">Select role</option>
                      <option>Headteacher / Principal</option>
                      <option>Deputy Head</option>
                      <option>IT Manager</option>
                      <option>Safeguarding Lead</option>
                      <option>MAT / District Leadership</option>
                      <option>Teacher</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Institution size</label>
                    <select
                      name="size" value={form.size} onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#00b4d8] bg-white"
                    >
                      <option value="">Select size</option>
                      <option>1 school (&lt;300 students)</option>
                      <option>1 school (300–1000 students)</option>
                      <option>1 school (1000+ students)</option>
                      <option>2–5 schools (MAT / group)</option>
                      <option>6+ schools (MAT / district)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Anything specific you'd like to cover?</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#00b4d8] resize-none"
                    placeholder="e.g. GDPR compliance questions, Ofsted readiness, safeguarding integration..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a3a6b] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#00b4d8] transition-colors"
                >
                  Request Free Demo →
                </button>
                <p className="text-xs text-slate-400 text-center">
                  No spam. No sales calls unless requested. We'll reply within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
