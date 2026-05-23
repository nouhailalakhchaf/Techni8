import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/layout/ClientShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TECHNIQ8 | Architectures Digitales & IA d'Exception",
    template: "%s | TECHNIQ8",
  },
  description:
    "Cabinet d'ingenierie numerique & IA haut de gamme. Architectures digitales, systemes critiques, transformation institutionnelle et infrastructures numeriques complexes.",
  keywords: [
    "ingenierie numerique",
    "IA",
    "architecture digitale",
    "systemes critiques",
    "transformation digitale",
    "consulting IA",
    "infrastructure numerique",
    "TECHNIQ8",
  ],
  authors: [{ name: "TECHNIQ8" }],
  creator: "TECHNIQ8",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://techniq8.com",
    siteName: "TECHNIQ8",
    title: "TECHNIQ8 | Architectures Digitales & IA d'Exception",
    description:
      "Cabinet d'ingenierie numerique & IA haut de gamme specialise dans les architectures digitales, l'IA et les systemes critiques.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TECHNIQ8 | Architectures Digitales & IA d'Exception",
    description:
      "Cabinet d'ingenierie numerique & IA haut de gamme.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TECHNIQ8",
              url: "https://techniq8.com",
              description:
                "Cabinet d'ingenierie numerique & IA haut de gamme specialise dans les architectures digitales, l'IA et les systemes critiques.",
              foundingDate: "2020",
              areaServed: "Worldwide",
              serviceType: [
                "Digital Architecture",
                "Artificial Intelligence",
                "Critical Systems",
                "Digital Transformation",
                "Strategic Consulting",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-deep text-light antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
