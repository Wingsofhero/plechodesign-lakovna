import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://plechodesign-lakovna.vercel.app"),
  title: "PlechoDesign | Autolakovňa Pezinok",
  description: "Profesionálne lakovanie áut, opravy škrabancov a poškodeného laku a priemyselné lakovanie kovových výrobkov v Pezinku.",
  openGraph: {
    title: "PlechoDesign | Autolakovňa Pezinok",
    description: "Profesionálne lakovanie áut a kovových výrobkov v Pezinku.",
    locale: "sk_SK",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PlechoDesign – Autolakovňa Pezinok" }],
  },
  twitter: { card: "summary_large_image", title: "PlechoDesign | Autolakovňa Pezinok", description: "Profesionálne lakovanie áut a kovových výrobkov v Pezinku.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "PlechoDesign",
    url: "https://plechodesign-lakovna.vercel.app",
    telephone: "+421949189314",
    address: { "@type": "PostalAddress", streetAddress: "Viničnianska cesta 23", addressLocality: "Pezinok", addressCountry: "SK" },
    areaServed: "Pezinok a okolie",
    hasMap: "https://maps.app.goo.gl/i9bEoH8htcNDRVp47?g_st=iw",
  };
  return <html lang="sk"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />{children}</body></html>;
}
