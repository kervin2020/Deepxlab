"use client";

import Hero from "@/components/Hero";
import ExpertiseMarquee from "@/components/ExpertiseMarquee";
import ImpactStats from "@/components/ImpactStats";
import CinematicTagline from "@/components/CinematicTagline";
import Departments from "@/components/Departments";
import CinematicCases from "@/components/CinematicCases";
import Values from "@/components/Values";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <ExpertiseMarquee />
      <SectionReveal index="02"><ImpactStats /></SectionReveal>
      <SectionReveal index="03"><CinematicTagline /></SectionReveal>
      <SectionReveal index="04"><Departments /></SectionReveal>
      <SectionReveal index="05"><CinematicCases /></SectionReveal>
      <SectionReveal index="06"><Values /></SectionReveal>
      <SectionReveal index="07"><CTA /></SectionReveal>
      <SectionReveal><ContactForm /></SectionReveal>
    </>
  );
}
