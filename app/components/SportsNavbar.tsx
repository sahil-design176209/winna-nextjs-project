import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import {
  NavIcons,
  SportsIcon,
  SportsMenuIcons,
  SVGIcons,
  ThemeIcons,
} from "./SvgIcons";
import SportsNavDropdown from "./Sportsnavdropdown";

// Types for navigation items
interface SportItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  route?: string;
  hasBadge?: boolean;
  isCustomText?: boolean;
  text?: string;
  hasSubBadge?: boolean;
}

export default function SportsNavbar() {
  const router = useRouter();
  const [isSportsMenuOpen, setIsSportsMenuOpen] = useState(false);

  const openSportsSearch = () => {
    setIsSportsMenuOpen(false);
    window.dispatchEvent(new Event("sports-search:open"));
  };

  const sportsItems: SportItem[] = [
    {
      id: "cricket",
      icon: <SportsMenuIcons.CricketIcon />,
      label: "Cricket",
      hasBadge: true,
      route: "/sport/sportNavEvent",
    },
    {
      id: "tennis",
      icon: <SportsMenuIcons.TennisIcon />,
      label: "Tennis",
      hasBadge: true,
      route: "/sport/sportNavEvent",
    },

    {
      id: "soccer",
      icon: <NavIcons.FootballIcon />,
      label: "Soccer",
      hasBadge: true,
      route: "/sport/sportNavEvent",
    },
    {
      id: "horse",
      icon: <SportsMenuIcons.HorseRacingIcon />,
      label: "Horse Racing",
      hasSubBadge: true,
      route: "/racing?type=horse",
    },
    {
      id: "greyhound",
      icon: <SportsMenuIcons.GreyhoundRacingIcon />,
      label: "greyhound",
      hasSubBadge: true,
      route: "/racing?type=greyhound",
      
    },

    {
      id: "election",
      icon: <SportsMenuIcons.ElectionIcon />,
      label: "elction",
      hasBadge: true,
      route: "/sport/sportNavEvent",
    },
    {
      id: "kabaddi",
      icon: <SportsMenuIcons.KabaddiIcon />,
      label: "kabaddi",
      hasBadge: true,
      route: "/sport/sportNavEvent",
    },
  ];

  return (
    <div className="layout-container h-14 flex items-center justify-between select-none px-4 font-sans relative w-full max-w-[1312px] mx-auto">
      {/* Left Row Scroll Container */}
      <div className="mr-2 flex min-w-0 flex-1 items-center space-x-3 py-2 lg:mr-4 lg:space-x-4">
        {/* Core Control Elements */}
        <div className="flex shrink-0 items-center space-x-4 text-gray-400 lg:space-x-5">
          <Link className="hover:text-white transition-colors" href="/">
            <NavIcons.HomeIcon />
          </Link>

          <Link className="hover:text-white transition-colors" href="/sport/live">
            <NavIcons.LiveIcon />
          </Link>

          <Link className="hover:text-white transition-colors" href="/sport/favourite">
            <NavIcons.StarIcon />
          </Link>

          <Link className="hover:text-white transition-colors" href="/sport/bet">
            <NavIcons.BetdIcon />
          </Link>
        </div>

        {/* Vertical Divider Line */}
        <div className="h-6 w-[1px] bg-body-level-5 shrink-0" />

        <div className="flex items-center space-x-[18px]">
          {sportsItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.route) {
                  router.push(item.route);
                }
              }}
              className={`items-center w-[32px] h-[32px] gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer ${
                index < 2 ? "flex" : "hidden lg:flex"
              }`}
            >
              <span className="w-[32px] h-[32px] flex items-center justify-center [&>svg]:!w-full [&>svg]:!h-full [&>svg]:block">
                {item.icon}
              </span>
            </button>
          ))}

          <button
            className="text-white cursor-pointer"
            aria-expanded={isSportsMenuOpen}
            onClick={() => setIsSportsMenuOpen(!isSportsMenuOpen)}
          >
            <span
              className={`block transition-transform duration-200 ${isSportsMenuOpen ? "rotate-180" : "rotate-0"
                }`}
            >
              <ThemeIcons.ChevronDownIcon />
            </span>
          </button>

          {isSportsMenuOpen && (
            <div className="absolute left-0 right-0 mx-auto top-[60px] mt-2 w-auto min-w-[360px] lg:left-1/2 lg:right-auto lg:-translate-x-1/2 lg:w-[100%] md:w-[100%] lg:max-w-[1264px] z-[9999] rounded-2xl bg-body-level-9 border border-body-level-9 shadow-2xl p-[24px] text-sm text-typography-secondary">
              <SportsNavDropdown />
            </div>
          )}
        </div>
      </div>

      {/* Global Right Action Element */}
      <div className="flex items-center text-gray-400 shrink-0 pl-2">
        <Link
          href="/sport/search"
          onClick={openSportsSearch}
          className="p-1 hover:text-white transition-colors"
          aria-label="Open sports search"
        >
          <ThemeIcons.SearchIcon />
        </Link>
      </div>
    </div>
  );
}
