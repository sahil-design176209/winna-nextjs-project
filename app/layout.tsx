"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
// Use an absolute alias path pointing directly to your new component
import Header from "@/app/components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
type ActiveMenuType = "profile" | "promotions" | null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>(null);
  const toggleMenu = (menuName: "profile" | "promotions") => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <Header
          isProfileMenuOpen={activeMenu === "profile"}
          onToggleProfile={() => toggleMenu("profile")}
        />
        <Navbar
          isPromotionMenuOpen={activeMenu === "promotions"}
          onTogglePromotions={() => toggleMenu("promotions")}
        />
        <main className="layout-container mx-auto  h-full w-full  text-white p-5 mb-[50px] mt-[60px] lg:p-0 lg:py-2">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
