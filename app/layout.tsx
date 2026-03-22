import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DigiTech Agency",
    template: "%s | DigiTech Agency",
  },
  description: "Agence digitale: branding, web et croissance",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DigiTech Agency",
    title: "DigiTech Agency",
    description: "Agence digitale: branding, web et croissance",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiTech Agency",
    description: "Agence digitale: branding, web et croissance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/realisations", label: "Realisations" },
    { href: "/#process", label: "Process" },
    { href: "/#contact", label: "Contact" },
  ];

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "DigiTech Agency",
        url: siteUrl,
        logo: `${siteUrl}/logodigi.svg`,
        description: "Agence digitale: branding, web et croissance",
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "DigiTech Agency",
        description: "Agence digitale: branding, web et croissance",
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "fr-FR",
      },
    ],
  };

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationJsonLd} />
        <Header navLinks={navLinks} />
        {children}
      </body>
    </html>
  );
}
