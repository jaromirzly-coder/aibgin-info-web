import Navbar from "@/components/Navbar";
import SummerBanner from "@/components/SummerBanner";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import Testimonials from "@/components/Testimonials";
import Compliance from "@/components/Compliance";
import AIB1Section from "@/components/AIB1Section";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <SummerBanner />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Compliance />
      <DemoForm />
      <AIB1Section />
      <Footer />
    </main>
  );
}
