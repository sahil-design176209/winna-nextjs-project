"use client"; // Required if you are using Next.js App Router (next/navigation)

import React, { useState } from "react";
import { NavIcons, SportsMenuIcons } from "./SvgIcons";
import { useRouter } from "next/navigation";

interface RacingData {
  name: string;
  count: number;
  icon?: React.ReactNode;
  route?: string;
  hasBadge?: boolean;
  isCustomText?: boolean;
  text?: string;
  hasSubBadge?: boolean;
}

const SportsNavDropdown = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Sports" | "Racing">("Sports");

  // Explicitly typing the arrays ensures 'route' is recognized dynamically during the loop
  const sportsData: RacingData[] = [
    { name: "Cricket", count: 26, icon: <SportsMenuIcons.CricketIcon /> },
    { name: "Tennis", count: 90, icon: <NavIcons.TennisIcon /> },
    { name: "Football", count: 11, icon: <NavIcons.FootballIcon /> },
    {
      name: "Cricket Casino",
      count: 0,
      icon: <NavIcons.LiveCasinoIcon />,
    },
    { name: "Election", count: 0, icon: <SportsMenuIcons.ElectionIcon /> },
    { name: "Kabaddi", count: 0, icon: <SportsMenuIcons.KabaddiIcon /> },
  ];

  const racingData: RacingData[] = [
    {
      name: "Horse Racing",
      count: 5,
      icon: <SportsMenuIcons.HorseRacingIcon />,
      hasSubBadge: true,
      route: "/racing?type=horse",
    },
    {
      name: "Greyhounds",
      count: 14,
      icon: <SportsMenuIcons.GreyhoundRacingIcon />,
      hasSubBadge: true,
      route: "/racing?type=greyhound",
    },
  ];

  const currentData = activeTab === "Sports" ? sportsData : racingData;

  return (
    <div className="w-full">
      {/* Container matching the card shape and color */}
      <div className="w-full max-w-7xl mx-auto rounded-[24px]">
        {/* Centered Top Nav Segment Links */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-body-level-1 p-1.5 rounded-xl">
            <button
              onClick={() => setActiveTab("Sports")}
              className={`min-w-[120px] md:min-w-[190px] flex-1 py-2 text-[14px] font-bold rounded-lg transition-all duration-150 ${
                activeTab === "Sports"
                  ? "bg-[#2C384E] text-white"
                  : "text-[#778599] hover:text-white"
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => setActiveTab("Racing")}
              className={`min-w-[120px] md:min-w-[190px] flex-1 py-2 text-[14px] font-bold rounded-lg transition-all duration-150 ${
                activeTab === "Racing"
                  ? "bg-[#2C384E] text-white"
                  : "text-[#778599] hover:text-white"
              }`}
            >
              Racing
            </button>
          </div>
        </div>

        {/* 5-Column Spaced Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-7 px-4">
          {currentData.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.route) {
                  router.push(item.route);
                }
              }}
              className="flex items-center justify-start transition-opacity hover:opacity-80 cursor-pointer select-none"
            >
              {/* Item Wrapper Pill Layout */}
              <div className="flex items-center space-x-2 text-[#9BA8BC]">
                {/* Icon Title Wrapper */}
                {item.icon && (
                  <span className="text-[15px] font-semibold tracking-wide text-[#9BA8BC]">
                    {item.icon}
                  </span>
                )}

                {/* Text Title */}
                <span className="text-[15px] font-semibold tracking-wide text-[#9BA8BC]">
                  {item.name}
                </span>

                {/* Embedded Pill Count Badge */}
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-[11px] font-bold bg-[#171F2C] text-[#718196] rounded-full min-w-[24px]">
                  {item.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsNavDropdown;
