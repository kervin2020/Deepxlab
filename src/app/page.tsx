"use client";

import Hero from "@/components/Hero";
import ExpertiseMarquee from "@/components/ExpertiseMarquee";
import ImpactStats from "@/components/ImpactStats";
import CinematicTagline from "@/components/CinematicTagline";
import Departments from "@/components/Departments";
import CinematicCases from "@/components/CinematicCases";
import Founders from "@/components/Founders";
import Values from "@/components/Values";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertiseMarquee />
      <SectionReveal><ImpactStats /></SectionReveal>
      <SectionReveal><CinematicTagline /></SectionReveal>
      <SectionReveal><Departments /></SectionReveal>
      <SectionReveal><CinematicCases /></SectionReveal>
      <SectionReveal>
        <div id="team">
          <Founders />
        </div>
      </SectionReveal>
      <SectionReveal><Values /></SectionReveal>
      <SectionReveal><CTA /></SectionReveal>
      <SectionReveal><ContactForm /></SectionReveal>
    </>
  );
}
