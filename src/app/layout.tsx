import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Nikolajev Portfolio",
  description:
    "Max Nikolajev — Web Developer Portfolio. Frontend development, React, and modern web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#6e7f90] to-[#3a4c5c] flex flex-col justify-between items-center p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
