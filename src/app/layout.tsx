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
  title: "DeepXlab — Groupe technologique multidisciplinaire",
  description:
    "DeepXlab conçoit, développe et opère des plateformes logicielles, des infrastructures matérielles et des systèmes de sécurité sur mesure. Six expertises intégrées. Boston · Port-au-Prince.",
  openGraph: {
    title: "DeepXlab — Groupe technologique multidisciplinaire",
    description: "Six expertises intégrées pour des organisations qui ne tolèrent pas les compromis.",
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
