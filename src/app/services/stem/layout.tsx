import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kits STEM & cours de robotique — DeepXlab",
  description:
    "Kits Arduino et ESP32 assemblés en interne, guides en créole et français, cours privés de robotique et ateliers pour écoles et familles en Haïti.",
};

export default function StemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
