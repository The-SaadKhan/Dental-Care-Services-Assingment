import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlueTeeth - Professional Dental Care at Your Home",
  description: "Get certified dentists at your doorstep. Safe, hygienic, and affordable home dental care services across Delhi NCR by BlueTeeth.",
  keywords: "home dental care, dentist at home, dental checkup home, tooth extraction home, Delhi NCR dentist, BlueTeeth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
