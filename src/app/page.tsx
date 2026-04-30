"use client";

import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import CinematicTagline from "@/components/CinematicTagline";
import Departments from "@/components/Departments";
import CinematicCases from "@/components/CinematicCases";
import Values from "@/components/Values";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <CinematicTagline />
      <Departments />
      <CinematicCases />
      <Values />
      <CTA />
    </>
  );
}
