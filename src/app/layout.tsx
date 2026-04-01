import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
    template: "%s | ZiyadBooks",
    default: "ZiyadBooks - Toko Buku Anak & Islami Terlengkap",
  },
  description:
    "Temukan berbagai macam buku populer, edukasi anak, dan pre-order dengan harga terbaik dan diskon menarik di ZiyadBooks.",
  keywords: [
    "toko buku online",
    "buku anak",
    "buku islami",
    "ziyadbooks",
    "pre-order buku",
  ],
  openGraph: {
    title: "ZiyadBooks",
    description: "Toko Buku Anak & Islami Terlengkap",
    url: "https://ziyadbooks.com",
    siteName: "ZiyadBooks",
    images: [
      {
        url: "/assets/logo.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
