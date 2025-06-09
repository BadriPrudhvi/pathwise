import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pathwise - Build Your Personalized Learning Journey",
  description: "Let AI help you master any skill – one goal at a time. Create personalized learning paths with real-time progress tracking and AI-powered feedback.",
  keywords: ["learning", "AI", "education", "personalized learning", "skill development"],
  authors: [{ name: "Pathwise Team" }],
  openGraph: {
    title: "Pathwise - Build Your Personalized Learning Journey",
    description: "Let AI help you master any skill – one goal at a time. Create personalized learning paths with real-time progress tracking and AI-powered feedback.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathwise - Build Your Personalized Learning Journey",
    description: "Let AI help you master any skill – one goal at a time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
