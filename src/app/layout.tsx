import type { Metadata } from "next";
import { Montagu_Slab, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { MantineProvider } from "@mantine/core";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

const MontaguSlab = Montagu_Slab({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: "My Dashboard",
  description: "Example dashboard with sidebar and header",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${montserrat.variable} ${MontaguSlab.variable} antialiased font-sans`}>
          <MantineProvider>
          <div className="flex h-screen flex-col">
            <Header />
            <div className="flex flex-1">
              <Sidebar />
              <main className="flex-1 p-6 overflow-auto font-[\'Montagu Slab\',serif]">
                {children}
              </main>
            </div>
          </div>
          </MantineProvider>
        </body>
    </html>
  );
}
