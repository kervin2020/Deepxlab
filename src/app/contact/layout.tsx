import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — DeepXlab",
  description:
    "Parlez-nous de votre projet : site web, e-commerce, application, cours de robotique ou consulting IT. Réponse sous 24h ouvrées.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
