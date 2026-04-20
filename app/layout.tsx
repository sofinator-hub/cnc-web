import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 IMPORTA ESTO
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

        {/* 🔥 GLOBAL */}
        <Navbar />
        <Sidebar />

        {/* 🔥 CONTENIDO */}
        {children}

      </body>
    </html>
  );
}