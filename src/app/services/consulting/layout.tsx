import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting IT pour PME — DeepXlab",
  description:
    "Audit IT, modernisation, cloud, cybersécurité de base et formation des équipes pour les PME haïtiennes qui digitalisent leurs opérations.",
};

export default function ConsultingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
