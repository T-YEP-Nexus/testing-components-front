import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundBubbles from "@/components/Background/BackgroundBubbles";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus",
  description: "Nexus an project management tool for students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <BackgroundBubbles />
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
