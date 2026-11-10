import type { Metadata } from "next";
import { Cormorant_Infant, IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import BarberAnnouncement from "@/components/callout";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Effect Hair Studio",
  description: "Book with Effect Hair Studio — precision grooming by Tim Medina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantInfant.variable} ${outfit.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <BarberAnnouncement />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
