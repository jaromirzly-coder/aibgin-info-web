import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import Testimonials from "@/components/Testimonials";
import Compliance from "@/components/Compliance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Compliance />
      <DemoForm />
      <Footer />
    </main>
  );
}
