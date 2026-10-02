import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Compliance from "@/components/Compliance";
import AIBlabEcosystem from "@/components/AIBlabEcosystem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section className="py-24 bg-ink-950 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">What we are building</h2>
          <p className="text-slate-400 leading-relaxed mb-8">{"A being for schools that knows what a student already knows and builds on it. Every student has their own being; what is shared is only what people explicitly allow. Being built on AIB.core, the engine behind AIBEVA. Terms by agreement — support@aiblab.info."}</p>
        </div>
      </section>
      <TrustBar />
      <HowItWorks />
      <Features />
      <Compliance />
      <AIBlabEcosystem />
      <Footer />
    </main>
  );
}
