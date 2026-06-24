"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

// Component Imports
import Header from "@/app/components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SidenavBar from "./components/SidenavBar";
import BottomNavigation from "./components/BottomNavigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

type ActiveMenuType = "profile" | "promotions" | null;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Existing state for dropdown menus
  const [activeMenu, setActiveMenu] = useState<ActiveMenuType>(null);

  // 1. FIXED: Added the missing state for your Sidenav Drawer!
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleMenu = (menuName: "profile" | "promotions") => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased min-h-screen flex flex-col relative bg-[#07131e]">
        <Header
          isProfileMenuOpen={activeMenu === "profile"}
          onToggleProfile={() => toggleMenu("profile")}
        />

        <Navbar
          isPromotionMenuOpen={activeMenu === "promotions"}
          onTogglePromotions={() => toggleMenu("promotions")}
        />

        {/* Added extra bottom padding (pb-24) to prevent bottom nav overlaying content on mobile */}
        <main className="layout-container mx-auto flex-grow h-full w-full text-white p-5 pb-24 mt-[60px] lg:p-0 lg:py-2 lg:pb-0">
          {children}
        </main>

        <Footer />

        {/* 2. FIXED: Wired up sidebar controls seamlessly */}
        <SidenavBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* 3. FIXED: Wired up bottom nav opener seamlessy */}
        <BottomNavigation onOpenSidebar={() => setIsSidebarOpen(true)} />
      </body>
    </html>
  );
}
