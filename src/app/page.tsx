"use client";

import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ServicesGrid from "@/components/ServicesGrid";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesGrid />
      <CaseStudies />
      <CTA />
    </>
  );
}
