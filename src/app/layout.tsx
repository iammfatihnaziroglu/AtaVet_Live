import type { Metadata } from "next";
import { Geist, Geist_Mono, Pathway_Gothic_One  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VerticalPetNav from "@/components/VerticalPetNav";
import HorizontalPetNav from "@/components/HorizontalPetNav";

const pathway = Pathway_Gothic_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pathway', 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AtaVet | Isparta Veteriner Kliniği",
  description: "AtaVet, Isparta'nın güvenilir veteriner kliniği. Kedi, köpek ve diğer evcil hayvanlarınızın sağlığı için profesyonel veteriner hizmetleri sunuyoruz.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${pathway.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen pt-16 animate-fade-in">{children}</main>
        <VerticalPetNav />
        <HorizontalPetNav />
        <Footer />
      </body>
    </html>
  );
}
