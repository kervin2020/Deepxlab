import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Divisions from "@/components/Divisions";
import Capabilities from "@/components/Capabilities";
import Sectors from "@/components/Sectors";
import Flywheel from "@/components/Flywheel";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Stats from "@/components/Stats";
import Manifesto from "@/components/Manifesto";
import Signature from "@/components/Signature";
import GlobalReach from "@/components/GlobalReach";
import Problem from "@/components/Problem";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Divisions />
        <Capabilities />
        <Sectors />
        <Flywheel />
        <Process />
        <Products />
        <Stats />
        <Manifesto />
        <Signature />
        <GlobalReach />
        <Problem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
