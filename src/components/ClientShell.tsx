"use client";

import dynamic from "next/dynamic";
import { I18nProvider } from "@/i18n/provider";
import Header from "./Header";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import SmoothScroll from "./SmoothScroll";
import FloatingContact from "./FloatingContact";
import ScrollProgress from "./ScrollProgress";

// Lazy-load the persistent 3D scene (client only) so it never blocks SSR
const LivingScene = dynamic(() => import("./LivingScene"), {
  ssr: false,
  loading: () => null,
});

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <I18nProvider>
      <SmoothScroll>
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />

        {/* Persistent 3D scene — full-page background, scroll-driven */}
        <LivingScene />

        {/* Page content sits ON TOP of the 3D scene */}
        <div className="grain relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>

        {/* Sticky CTA — always within reach after the hero */}
        <FloatingContact />
      </SmoothScroll>
    </I18nProvider>
  );
}
