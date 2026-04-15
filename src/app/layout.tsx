import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

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
  title: "DeepXlab — Groupe technologique multidisciplinaire en solutions technologiques",
  description:
    "DeepXlab conçoit, développe et opère des plateformes logicielles, des infrastructures matérielles et des systèmes de sécurité sur mesure. Six expertises intégrées.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-[var(--accent)] selection:text-black">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
