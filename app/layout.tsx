import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plechodesign | Autolakovňa Pezinok",
  description: "Profesionálne lakovanie áut, opravy škrabancov a poškodeného laku a priemyselné lakovanie kovových výrobkov v Pezinku.",
  openGraph: {
    title: "Plechodesign | Autolakovňa Pezinok",
    description: "Profesionálne lakovanie áut a kovových výrobkov v Pezinku.",
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
