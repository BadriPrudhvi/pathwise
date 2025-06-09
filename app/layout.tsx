import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://pathwise.ai'),
  title: "Pathwise - AI-Powered Personalized Learning Platform",
  description: "Master any skill with AI-powered personalized learning paths. Get goal scoping, skill assessment, adaptive curriculum, and real-time progress tracking. Start your learning journey today.",
  keywords: [
    "AI learning platform",
    "personalized education",
    "skill development",
    "adaptive learning",
    "goal-based learning",
    "curriculum builder",
    "progress tracking",
    "online education",
    "skill assessment",
    "learning paths"
  ],
  authors: [{ name: "Pathwise Team" }],
  creator: "Pathwise",
  publisher: "Pathwise",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pathwise.ai",
    siteName: "Pathwise",
    title: "Pathwise - AI-Powered Personalized Learning Platform",
    description: "Master any skill with AI-powered personalized learning paths. Get goal scoping, skill assessment, adaptive curriculum, and real-time progress tracking.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pathwise - AI-Powered Personalized Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathwise - AI-Powered Personalized Learning Platform",
    description: "Master any skill with AI-powered personalized learning paths. Start your learning journey today.",
    images: ["/og-image.jpg"],
    creator: "@pathwise_ai",
  },
  alternates: {
    canonical: "https://pathwise.ai",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
