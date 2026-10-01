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
      <TrustBar />
      <HowItWorks />
      <Features />
      <Compliance />
      <AIBlabEcosystem />
      <Footer />
    </main>
  );
}
