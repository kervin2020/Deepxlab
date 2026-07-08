import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — DeepXlab",
  description:
    "Deux frères, un à Port-au-Prince, l'autre à Boston. DeepXlab construit des solutions digitales et enseigne la robotique aux jeunes haïtiens. Nou bati ak, pa pou.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
