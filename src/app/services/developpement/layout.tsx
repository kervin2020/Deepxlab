import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement web & mobile — DeepXlab",
  description:
    "Sites vitrine, e-commerce avec paiement local (MonCash, Natcash), plateformes métier et apps mobiles pour Haïti et la diaspora. À partir de 1 500 USD.",
};

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return children;
}
