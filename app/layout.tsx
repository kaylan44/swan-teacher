import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/lib/LanguageContext";
import { SiteDataProvider } from "@/lib/SiteDataContext";
import { client } from "@/sanity/lib/client";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.swanlessons.com"),
  title: "Swan — French & English Teacher | Online Lessons",
  description:
    "Learn French or English online with Swan, a certified French teacher with FLE specialization. Fun, personalized lessons for all levels. Book a free 30-minute trial today!",
  keywords: [
    "French teacher",
    "English teacher",
    "online French lessons",
    "online English lessons",
    "learn French online",
    "learn English online",
    "cours de français en ligne",
    "cours d'anglais en ligne",
    "professeur FLE",
    "French tutor",
    "English tutor",
    "FLE",
    "French for beginners",
    "English for beginners",
    "free trial French lesson",
  ],
  alternates: {
    canonical: "https://www.swanlessons.com",
  },
  openGraph: {
    title: "Swan — French & English Teacher",
    description:
      "Certified French teacher offering personalized online lessons for all levels. Free 30-min trial!",
    url: "https://www.swanlessons.com",
    siteName: "Swan Lessons",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Swan — French & English Teacher | Online Lessons",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swan — French & English Teacher",
    description:
      "Certified French teacher offering personalized online lessons for all levels. Free 30-min trial!",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const important = await client.fetch(
    '*[_type == "importantData" && identifier == "site-info"][0]{contactEmail,whatsappNumber,price40,price60}',
    {},
    { next: { revalidate: 60 } }
  );

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased bg-white text-neutral-800`}
      >
        <SiteDataProvider initialData={important ?? null}>
          <LanguageProvider>{children}</LanguageProvider>
        </SiteDataProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Swan",
              jobTitle: "French & English Teacher",
              description:
                "Certified French teacher with FLE specialization offering personalized online lessons for all levels.",
              url: "https://www.swanlessons.com",
              offers: [
                {
                  "@type": "Offer",
                  name: "Online French or English lesson — 60 min",
                  price: "40",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Online French or English lesson — 40 min",
                  price: "28",
                  priceCurrency: "EUR",
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
