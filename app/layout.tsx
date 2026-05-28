import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
 
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MATEI CNC",
  description: "Servicios de corte CNC láser y fabricación industrial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* GOOGLE TAG */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MEY3C7X0VE"
          strategy="afterInteractive"
        />

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            // GOOGLE ANALYTICS
            gtag('config', 'G-MEY3C7X0VE');

            // GOOGLE ADS
            gtag('config', 'AW-924192746');
          `}
        </Script>

        {/* GLOBAL */}
        <Navbar />
        <Sidebar />

        {/* CONTENIDO */}
        {children}

      </body>
    </html>
  );
}