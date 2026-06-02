"use client";
import { useState } from "react";

const links = [
  { label: "Safety", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-1">
          <span className="text-xl font-extrabold text-[#1a3a6b]">AIB</span>
          <span className="text-xl font-extrabold text-[#00b4d8]">gin</span>
          <span className="ml-2 text-xs font-semibold bg-[#e8f4fd] text-[#1a3a6b] px-2 py-0.5 rounded-full border border-[#00b4d8]/30">
            for Schools
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[#00b4d8] transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.aibgin.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#1a3a6b] hover:text-[#00b4d8] transition-colors"
          >
            Sign in
          </a>
          <a
            href="#demo"
            className="bg-[#1a3a6b] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00b4d8] transition-colors"
          >
            Request Demo →
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#demo" onClick={() => setOpen(false)} className="bg-[#1a3a6b] text-white px-4 py-2 rounded-lg text-center mt-2">
            Request Demo →
          </a>
        </div>
      )}
    </nav>
  );
}
