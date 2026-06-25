"use client";
import React, { useState } from "react";
import {
  CasinoIcons,
  NavIcons,
  SearchIcon,
  SportsMenuIcons,
  SVGIcons,
  ThemeIcons,
} from "./SvgIcons";
import Image from "next/image";
import winnaLogo from "../../public/images/logo-winna.svg";

type MainTab = "casino" | "sports";

interface SubItem {
  id: string;
  label: string;
  icon?: string;
}

interface AccordionItem {
  id: string;
  label: string;
  icon: string;
  subItems?: SubItem[];
}

interface SidenavBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SidenavBar: React.FC<SidenavBarProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<MainTab>("sports");

  // FIXED: Changed from string[] to string | null to implement single-collapse logic
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    "all-sports",
  );

  const toggleAccordion = (id: string) => {
    // If clicked item is already open, close it; otherwise open it and close the rest
    setExpandedAccordion((prev) => (prev === id ? null : id));
  };

  interface AccordionItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    subItems: any[] | any;
  }

  const sportsData: AccordionItem[] = [
    {
      id: "all-sports",
      label: "All Sports",
      icon: <NavIcons.FootballIcon />,
      subItems: [
        {
          id: "cricket",
          label: "Cricket",
          icon: <SportsMenuIcons.CricketIcon />,
        },
        { id: "tennis", label: "Tennis", icon: <NavIcons.TennisIcon /> },
        { id: "football", label: "Football", icon: <NavIcons.FootballIcon /> },
        {
          id: "cricket-casino",
          label: "Cricket Casino",
          icon: <NavIcons.LiveCasinoIcon />,
        },
        {
          id: "election",
          label: "Election",
          icon: <SportsMenuIcons.ElectionIcon />,
        },
        {
          id: "kabaddi",
          label: "Kabaddi",
          icon: <SportsMenuIcons.KabaddiIcon />,
        },
      ],
    },
    {
      id: "racing",
      label: "Racing",
      icon: <SportsMenuIcons.RacingIcon />,
      subItems: [
        {
          id: "horse-racing",
          label: "Horse Racing",
          icon: <SportsMenuIcons.HorseRacingIcon />,
        },
        {
          id: "greyhound",
          label: "Greyhound",
          icon: <SportsMenuIcons.GreyhoundRacingIcon />,
        },
      ],
    },
  ];

  return (
    <>
      {/* Dark Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-[10000] transition-opacity duration-300 lg:hidden"
        />
      )}

      {/* Full screen modal container */}
      <div
        className={`fixed bottom-0 left-0 right-0 w-full h-screen bg-[#121b26] text-white flex flex-col font-sans z-[10001] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* FIXED HEADER AND CONTROLS SECTION */}
        <div className="flex-none">
          {/* Top Header Bar */}
          <div className="p-4 flex items-center justify-between border-b border-white/5">
            <button
              className="flex h-[24px] w-[24px] items-center justify-center [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current"
              onClick={onClose}
            >
              <SVGIcons.SpadeIcon />
            </button>

            <button className="text-xl font-bold tracking-wide italic text-accent-blue cursor-pointer hover:opacity-80 active:scale-95 transition-transform outline-none">
              <Image src={winnaLogo} alt="logo" />
            </button>

            <button className="flex h-[24px] w-[24px] items-center justify-center ">
              <CasinoIcons.BlackjackIcon />
            </button>
          </div>

          {/* Search Box Wrapper */}
          <div className="p-4 pb-1">
            <div className="relative flex items-center bg-[#07131e] rounded-xl px-3 py-2.5 border border-white/5 focus-within:border-white/10">
              <span className="text-gray-500 mr-2">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search Game"
                className="w-full bg-transparent text-md text-gray-300 placeholder-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Segment Toggle Buttons */}
          <div className="p-4 pt-2">
            <div className="flex bg-[#07131e] p-1 rounded-full gap-1">
              <button
                onClick={() => setActiveTab("casino")}
                className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-full  font-semibold transition-all duration-200 outline-none
                  ${
                    activeTab === "casino"
                      ? "bg-[#1d2b3a] text-accent-blue shadow-md"
                      : "text-[#7b8b9a] hover:text-gray-300"
                  }`}
              >
                <span
                  className={
                    activeTab === "casino"
                      ? "text-accent-blue"
                      : "text-gray-500"
                  }
                >
                  <SVGIcons.CasinoIcon />
                </span>
                <span className="text-15">Casino</span>
              </button>

              <button
                onClick={() => setActiveTab("sports")}
                className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold transition-all duration-200 outline-none
                  ${
                    activeTab === "sports"
                      ? "bg-[#1d2b3a] text-accent-blue shadow-md"
                      : "text-[#7b8b9a] hover:text-gray-300"
                  }`}
              >
                <span
                  className={
                    activeTab === "sports"
                      ? "text-accent-blue"
                      : "text-gray-500"
                  }
                >
                  <SportsMenuIcons.CricketIcon />
                </span>
                <span className="text-15">Sports</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
          {activeTab === "casino" ? (
            <div className="flex items-center gap-3  rounded-xl px-4 py-3  cursor-pointer text-accent-blue">
              <span className="text-sm">
                <NavIcons.LiveCasinoIcon />
              </span>
              <span className="text-sm font-medium">Casino</span>
            </div>
          ) : (
            <div className="space-y-3">
              {sportsData.map((group) => {
                // FIXED: Direct check against the single active string ID value
                const isExpanded = expandedAccordion === group.id;

                return (
                  <div key={group.id} className="rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(group.id)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 transition-colors duration-150 outline-none
                        ${
                          isExpanded
                            ? "bg-[#0d2236] text-accent-blue "
                            : "bg-[#0d1a26] text-white hover:bg-[#132436]"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#7b8b9a] group-hover:text-white text-sm transition-colors opacity-80">
                          {group.icon}
                        </span>
                        <span className="text-14 font-semibold tracking-wide">
                          {group.label}
                        </span>
                      </div>

                      {/* Round background accent container matching layout images */}
                      <div className="w-6 h-6 flex items-center justify-center bg-black/20 rounded-md">
                        <span
                          className={`text-[9px] block transform transition-transform duration-200 ${
                            isExpanded
                              ? "rotate-180 text-accent-blue"
                              : "text-gray-400"
                          }`}
                        >
                          <ThemeIcons.ChevronDownIcon />
                        </span>
                      </div>
                    </button>

                    {isExpanded && group.subItems && (
                      <div className="bg-[#121b26] pt-1">
                        {group.subItems.map(
                          (sub: {
                            id: string | number;
                            label: string;
                            icon?: string;
                          }) => (
                            <div
                              key={sub.id}
                              className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 cursor-pointer transition-colors group"
                            >
                              <span className="text-[#7b8b9a] group-hover:text-white text-sm transition-colors opacity-80">
                                {sub.icon || "🔹"}
                              </span>
                              <span className="text-sm text-[#ccd6e0] font-medium group-hover:text-white transition-colors">
                                {sub.label}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex-none p-4 pb-[88px] bg-[#121b26]">
            <button className="w-full flex items-center justify-center gap-2 bg-accent-blue hover:bg-accent-blue-hover text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-colors text-15 outline-none">
              <span>
                <ThemeIcons.SupportIcon />
              </span>
              Live Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidenavBar;
