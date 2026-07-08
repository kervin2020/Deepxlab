import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — DeepXlab",
  description:
    "Sites web, e-commerce et applications livrés par DeepXlab pour des clients en Haïti et dans la diaspora.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
