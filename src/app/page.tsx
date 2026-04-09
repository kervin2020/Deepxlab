import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
import Flywheel from "@/components/Flywheel";
import Stats from "@/components/Stats";
import Signature from "@/components/Signature";
import GlobalReach from "@/components/GlobalReach";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain relative overflow-x-hidden">
      <div className="scanline" />
      <Header />
      <main>
        <Hero />
        <Divisions />
        <Flywheel />
        <Stats />
        <Signature />
        <GlobalReach />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
