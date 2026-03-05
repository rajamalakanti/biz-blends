import type { Metadata } from "next";
import { Cormorant_Infant, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Effect Hair Studio",
  description: "Book with Effect Hair Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantInfant.variable} ${inter.variable} font-sans antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
