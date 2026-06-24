import { HamIcon } from "lucide-react";
import React from "react";
import { HamBurgerIcon, SportsMenuIcons, SVGIcons } from "./SvgIcons";

interface NavItem {
  id: string;
  label: string;

  icon: React.ReactNode;
}

const BottomNavigation: React.FC = () => {
  const navItems: NavItem[] = [
    { id: "menu", label: "Menu", icon: <HamBurgerIcon /> },
    { id: "casino", label: "Casino", icon: <SVGIcons.CasinoIcon /> },
    { id: "sports", label: "Sports", icon: <SportsMenuIcons.FootballIcon /> },
    { id: "vip", label: "VIP", icon: <SVGIcons.VIP /> },
    { id: "chat", label: "Chat", icon: <SVGIcons.ChatIcon /> },
  ];

  const activeTab = "sports";

  return (
    <nav className="fixed backdrop-blur-[14px] bottom-0 left-0 z-[9999] flex h-[72px] w-full items-center justify-around  bg-body-level-2  rounded-2xl px-2 lg:hidden">
      {navItems.map((item) => {
        const isActive = item.id === activeTab;

        return (
          <button
            key={item.id}
            className={`flex  flex-1 flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors duration-200 outline-none
              ${isActive ? "text-[#f5a623]" : "text-[#7b8b9a] hover:text-[#f5a623]"}`}
          >
            {/* Icon Wrapper */}
            <div className="flex h-[32px] w-[32px] items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current">
              {item.icon}
            </div>

            {/* Label */}
            <span className="text-12 font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
