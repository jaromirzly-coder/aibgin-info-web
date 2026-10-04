import Navbar from "@/components/Navbar";
import Announcement from "@/components/Announcement";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Safe from "@/components/Safe";
import Schools from "@/components/Schools";
import GetAibeva from "@/components/GetAibeva";
import Numbers from "@/components/Numbers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950 overflow-x-hidden">
      <Navbar />
      <Announcement />
      <Hero />
      <Idea />
      <Safe highlight="GUARDIAN" intro="AIBgin is being built on the same seven layers as AIBEVA. One rule: an AIB answers to its person." />
      <Schools />
      <GetAibeva
        kicker="Available today"
        title="MEET AIBEVA."
        gold="THE AIB YOU CAN USE TODAY."
        intro="AIBgin is built on AIB.core — the engine behind AIBEVA. AIBEVA is your own AIB for Windows, free to download."
        adultsNote
      />
      <Numbers />
      <Footer />
    </main>
  );
}
