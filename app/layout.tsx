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

// pages or app directory RootLayout (Next.js)
export const metadata: Metadata = {
  title: "IQOS HEETS Dubai | #1 Trusted Online HEETS Store in UAE",
  description: "Buy authentic IQOS HEETS in Dubai and across the UAE from a trusted online store. Fast delivery and a wide range of HEETS and IQOS devices at affordable prices."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header/>
          {children}
          <Footer/>
        </CartProvider>

        <FloatingButtons />
      </body>
    </html>
  );
}
