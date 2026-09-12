import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Bold serif for display headings — premium corporate feel.
const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Business Centre & Company Formation in Dubai`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "business center Dubai",
    "serviced offices Dubai",
    "coworking space Dubai",
    "virtual office Dubai",
    "business setup Dubai",
    "company formation Dubai",
    "mainland trade license",
    "PRO services Dubai",
  ],
  openGraph: {
    title: `${site.fullName} — Business Centre in Dubai`,
    description: site.description,
    url: site.url,
    siteName: site.fullName,
    type: "website",
    locale: "en_AE",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappFab />
        <StructuredData />
      </body>
    </html>
  );
}
