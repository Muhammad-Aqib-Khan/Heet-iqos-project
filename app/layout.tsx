import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/header/header";
import Footer from "./(components)/footer/footer";
import { CartProvider } from "./CartContext/cartcontext";
import FloatingButtons from "./(components)/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heetsiqosuae.store"),
  title: "IQOS HEETS Dubai | #1 Trusted Online HEETS Store in UAE",
  description:
    "Shop authentic IQOS HEETS & devices with fast delivery across the UAE. 24/7 online store, secure payments, and premium service.",
  keywords: [
    "IQOS HEETS Dubai",
    "Buy HEETS Dubai",
    "IQOS UAE",
    "HEETS UAE online",
    "IQOS ILUMA UAE",
    "TEREA Dubai",
    "HEETS delivery Dubai",
    "IQOS devices UAE",
    "HEETS sticks price UAE",
  ],
  alternates: {
    canonical: "https://heetsiqosuae.store",
  },
  openGraph: {
    type: "website",
    url: "https://heetsiqosuae.store",
    title: "IQOS HEETS Dubai | #1 Trusted Online HEETS Store in UAE",
    description:
      "Shop authentic IQOS HEETS & devices with fast delivery across the UAE. 24/7 online store, secure payments, and premium service.",
    siteName: "heetsiqosuae.store",
    images: [
      {
        url: "https://heetsiqosuae.store/og/og-default.jpg", // Make sure this image exists in /public/og/
        width: 1200,
        height: 630,
        alt: "IQOS HEETS in Dubai, UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQOS HEETS Dubai | Trusted HEETS Store in UAE",
    description:
      "Authentic IQOS HEETS & devices. Fast Dubai delivery. Shop UAE-wide.",
    images: ["https://heetsiqosuae.store/og/og-default.jpg"], // Absolute path
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      { rel: "mask-icon", url: "/favicon.svg", color: "#ec4899" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Header />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
        </CartProvider>
        <FloatingButtons />
      </body>
    </html>
  );
}
