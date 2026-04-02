import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

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
  title: "Swan — French & English Teacher | Online Lessons",
  description:
    "Learn French or English online with Swan, a certified French teacher with FLE specialization. Fun, personalized lessons for all levels. Book a free 30-minute trial today!",
  keywords: [
    "French teacher",
    "English teacher",
    "online French lessons",
    "learn French",
    "FLE",
    "French tutor",
    "English tutor",
    "online lessons",
  ],
  openGraph: {
    title: "Swan — French & English Teacher",
    description:
      "Certified French teacher offering personalized online lessons for all levels. Free 30-min trial!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased bg-white text-neutral-800`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
