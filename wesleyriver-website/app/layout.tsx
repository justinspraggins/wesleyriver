import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wesley River",
  description: "Wesley booked his first audition, landing a recurring role as Tyler Jones on HBO's The Pitt with Noah Wyle, and went on to a leading role opposite James Franco in Foster.",
  keywords: ["Wesley River", "actor", "The Pitt", "Foster", "James Franco", "Noah Wyle", "child actor"],
  authors: [{ name: "Wesley River" }],
  creator: "Wesley River",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wesleyriver.com",
    siteName: "Wesley River",
    title: "Wesley River",
    description: "Wesley booked his first audition, landing a recurring role as Tyler Jones on HBO's The Pitt with Noah Wyle, and went on to a leading role opposite James Franco in Foster.",
    images: [
      {
        url: "/assets/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Wesley River - Actor",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Wesley River",
    description: "Wesley booked his first audition, landing a recurring role as Tyler Jones on HBO's The Pitt with Noah Wyle, and went on to a leading role opposite James Franco in Foster.",
    site: "@iamwesleyriver",
    creator: "@iamwesleyriver",
    images: ["/assets/banner.jpg"],
  },

  // Icons
  icons: {
    icon: [
      { url: "/assets/profile.png", type: "image/png" },
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180" },
      { url: "/assets/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/assets/apple-touch-icon-72x72.png", sizes: "72x72" },
    ],
  },

  // Additional meta
  robots: {
    index: true,
    follow: true,
  },

  // Theme color for mobile browsers
  themeColor: "#fafafa",

  // Viewport
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
