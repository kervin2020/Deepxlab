import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DeepXlab — Solutions digitales & éducation STEM pour Haïti",
  description:
    "DeepXlab — startup haïtienne basée à Port-au-Prince et Boston. Sites web, e-commerce, applications sur mesure, BCS (ERP propriétaire) et cours privés de robotique STEM. Nou bati ak, pa pou.",
  openGraph: {
    title: "DeepXlab — Solutions digitales & éducation STEM pour Haïti",
    description: "Two active expertises. An ecosystem under construction. Port-au-Prince × Boston.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&display=swap"
        />
      </head>
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-[var(--accent)] selection:text-white">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
