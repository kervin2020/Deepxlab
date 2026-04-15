"use client";

import { I18nProvider } from "@/i18n/provider";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <div className="grain relative overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
