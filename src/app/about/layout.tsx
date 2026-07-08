import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — DeepXlab",
  description:
    "DeepXlab, entre Port-au-Prince et Boston, construit des solutions digitales et enseigne la robotique aux jeunes haïtiens. Nou bati ak, pa pou.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
