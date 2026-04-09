import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
      <body className="min-h-full bg-[#0A0A0B] text-[#E8E8E3] font-sans selection:bg-[#00FF94] selection:text-black">
        {children}
      </body>
    </html>
  );
}
