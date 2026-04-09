import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeepXlab — Nous construisons ce qui n'existe pas encore.",
  description:
    "DeepXlab est un groupe technologique intégré né des Caraïbes. 6 divisions spécialisées : Éducation STEM, Solutions Entreprises, Sécurité, Design, Médias, R&D.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0B0B0D] text-[#F2F0EA] font-sans selection:bg-[#00FF94] selection:text-black">
        {children}
      </body>
    </html>
  );
}
