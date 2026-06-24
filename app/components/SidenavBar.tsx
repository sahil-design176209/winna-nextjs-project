"use client";
import React, { useState } from "react";

type MainTab = "casino" | "sports";

interface SubItem {
  id: string;
  label: string;
  icon?: string; // Optional custom string/emoji placeholder for sub-items
}

interface AccordionItem {
  id: string;
  label: string;
  icon: string; // Dynamic icon for the main item header
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

  const sportsData: AccordionItem[] = [
    {
      id: "all-sports",
      label: "All Sports",
      icon: "⚽",
      subItems: [
        { id: "cricket", label: "Cricket", icon: "🏏" },
        { id: "tennis", label: "Tennis", icon: "🎾" },
        { id: "football", label: "Football", icon: "⚽" },
        { id: "cricket-casino", label: "Cricket Casino", icon: "🎰" },
        { id: "election", label: "Election", icon: "🗳️" },
        { id: "kabaddi", label: "Kabaddi", icon: "🏃" },
      ],
    },
    {
      id: "racing",
      label: "Racing",
      icon: "🏇",
      subItems: [
        { id: "horse-racing", label: "Horse Racing", icon: "🏇" },
        { id: "greyhound", label: "Greyhound", icon: "🐕" },
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
            <button className="text-[#7b8b9a] hover:text-white">
              {/* Optional Grid Menu Icon */}
              <div
                className="w-5 h-5 bg-current rounded-sm opacity-70"
                onClick={onClose}
              />
            </button>

            <button className="text-xl font-bold tracking-wide italic text-[#f5a623] cursor-pointer hover:opacity-80 active:scale-95 transition-transform outline-none">
              Winna
            </button>

            <button className="text-[#7b8b9a] hover:text-white">
              {/* Optional Crown Icon */}
              <div className="w-5 h-5 bg-current rounded-sm opacity-70" />
            </button>
          </div>

          {/* Search Box Wrapper */}
          <div className="p-4 pb-2">
            <div className="relative flex items-center bg-[#07131e] rounded-xl px-3 py-2.5 border border-white/5 focus-within:border-white/10">
              <span className="text-gray-500 mr-2">🔍</span>
              <input
                type="text"
                placeholder="Search Game"
                className="w-full bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none"
              />
            </div>
          </div>

          {/* Segment Toggle Buttons */}
          <div className="p-4 pt-2">
            <div className="flex bg-[#07131e] p-1 rounded-2xl gap-1">
              <button
                onClick={() => setActiveTab("casino")}
                className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 outline-none
                  ${
                    activeTab === "casino"
                      ? "bg-[#1d2b3a] text-[#f5a623] shadow-md"
                      : "text-[#7b8b9a] hover:text-gray-300"
                  }`}
              >
                <span
                  className={
                    activeTab === "casino" ? "text-[#f5a623]" : "text-gray-500"
                  }
                >
                  🎲
                </span>
                Casino
              </button>

              <button
                onClick={() => setActiveTab("sports")}
                className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 outline-none
                  ${
                    activeTab === "sports"
                      ? "bg-[#1d2b3a] text-[#f5a623] shadow-md"
                      : "text-[#7b8b9a] hover:text-gray-300"
                  }`}
              >
                <span
                  className={
                    activeTab === "sports" ? "text-[#f5a623]" : "text-gray-500"
                  }
                >
                  🏀
                </span>
                Sports
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
          {activeTab === "casino" ? (
            <div className="flex items-center gap-3 bg-[#0d2236] rounded-xl px-4 py-3 border border-white/5 cursor-pointer text-[#f5a623]">
              <span className="text-sm">📡</span>
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
                            ? "bg-[#0d2236] text-[#f5a623]"
                            : "bg-[#0d1a26] text-white hover:bg-[#132436]"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm">{group.icon}</span>
                        <span className="text-sm font-semibold tracking-wide">
                          {group.label}
                        </span>
                      </div>

                      {/* Round background accent container matching layout images */}
                      <div className="w-6 h-6 flex items-center justify-center bg-black/20 rounded-md">
                        <span
                          className={`text-[9px] block transform transition-transform duration-200 ${
                            isExpanded
                              ? "rotate-180 text-[#f5a623]"
                              : "text-gray-400"
                          }`}
                        >
                          ▼
                        </span>
                      </div>
                    </button>

                    {isExpanded && group.subItems && (
                      <div className="bg-[#121b26] pt-1">
                        {group.subItems.map((sub) => (
                          <div
                            key={sub.id}
                            className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 cursor-pointer transition-colors group"
                          >
                            {/* Render modern icon mappings side-by-side with label text */}
                            <span className="text-[#7b8b9a] group-hover:text-white text-sm transition-colors opacity-80">
                              {sub.icon || "🔹"}
                            </span>
                            <span className="text-sm text-[#ccd6e0] font-medium group-hover:text-white transition-colors">
                              {sub.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex-none p-4 pb-[88px] border-t border-white/5 bg-[#121b26]">
            <button className="w-full flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09216] text-[#07131e] font-bold py-3 px-4 rounded-xl shadow-lg transition-colors text-sm outline-none">
              <span>🎧</span>
              Live Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidenavBar;
