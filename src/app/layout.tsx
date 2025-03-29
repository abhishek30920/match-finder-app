import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Match Finder",
  description: "Find your perfect match with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 min-h-screen flex flex-col`}
      >
        {/* Semi-transparent blur overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
        
        <Navbar />
        
        {/* Main content centered */}
        <main className="relative flex-1 flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
