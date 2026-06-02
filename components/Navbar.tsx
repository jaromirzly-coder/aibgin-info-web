"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Safety",       href: "#features" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Compliance",   href: "#compliance" },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-ink-900/90 backdrop-blur-xl border-b border-white/[0.06] shadow-xl" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-indigo to-brand-cyan flex items-center justify-center shadow-glow-indigo">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              <circle cx="8" cy="8" r="2" fill="white"/>
            </svg>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            AIB<span className="gradient-text">gin</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.aibgin.cz" target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2">
            Sign in
          </a>
          <a href="#demo"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow-indigo">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.5 4.5H13l-3.8 2.8 1.5 4.5L7 10l-3.7 2.8 1.5-4.5L1 5.5h4.5L7 1z" fill="white"/>
            </svg>
            Request Demo
          </a>
        </div>

        <button className="md:hidden p-2 text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-light mx-3 mb-3 rounded-2xl p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all">
              {l.label}
            </a>
          ))}
          <div className="border-t border-white/[0.08] mt-2 pt-2">
            <a href="#demo" onClick={() => setOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-brand-indigo to-brand-cyan text-white py-3 rounded-xl text-sm font-semibold">
              Request Demo →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
