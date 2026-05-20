import type { Metadata } from "next";
import "./globals.css";
import { ASSETS } from "@/lib/constants";
import { Providers } from "@/components/Providers";
import { telegraf, ppTelegraf } from "@/lib/fonts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Acheter ou vendre votre propriété à Gatineau | Équipe Stéphane Bisson",
  description:
    "Courtier immobilier à Gatineau — accompagnement pour l'achat ou la vente de votre propriété en Outaouais. Évaluation gratuite et conseils d'experts.",
  icons: {
    icon: ASSETS.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${telegraf.variable} ${ppTelegraf.variable}`}
    >
      <body className={`${telegraf.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
