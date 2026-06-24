"use client";
import React from "react";
import { HamBurgerIcon, SportsMenuIcons, SVGIcons } from "./SvgIcons";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavigationProps {
  onOpenSidebar: () => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  onOpenSidebar,
}) => {
  const navItems: NavItem[] = [
    { id: "menu", label: "Menu", icon: <HamBurgerIcon /> },
    { id: "casino", label: "Casino", icon: <SVGIcons.CasinoIcon /> },
    { id: "sports", label: "Sports", icon: <SportsMenuIcons.FootballIcon /> },
    { id: "vip", label: "VIP", icon: <SVGIcons.VIP /> },
    { id: "chat", label: "Chat", icon: <SVGIcons.ChatIcon /> },
  ];

  const activeTab = "sports";

  return (
    <nav className="fixed backdrop-blur-[14px] bottom-0 left-0 z-[10002] flex h-[72px] w-full items-center justify-around bg-body-level-2 rounded-t-2xl px-2 lg:hidden shadow-[0_-4px_24px_rgba(0,0,0,0.5)]">
      {navItems.map((item) => {
        const isActive = item.id === activeTab;

        const handleClick = () => {
          if (item.id === "menu") {
            onOpenSidebar();
          } else {
            console.log(`Navigating to ${item.id}`);
          }
        };

        return (
          <button
            key={item.id}
            onClick={handleClick}
            className={`flex flex-1 flex-col items-center justify-center gap-1 font-medium transition-colors duration-200 outline-none select-none
              ${isActive ? "text-[#f5a623]" : "text-[#7b8b9a] hover:text-[#f5a623]"}`}
          >
            <div className="flex h-[24px] w-[24px] items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current">
              {item.icon}
            </div>

            <span className="text-[11px] tracking-wide font-medium">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
