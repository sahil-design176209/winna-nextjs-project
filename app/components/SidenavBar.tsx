"use client";
import React, { useState } from "react";

type MainTab = "casino" | "sports";

interface SubItem {
  id: string;
  label: string;
}

interface AccordionItem {
  id: string;
  label: string;
  subItems?: SubItem[];
}

const SidenavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MainTab>("sports");

  const [expandedAccordions, setExpandedAccordions] = useState<string[]>([
    "all-sports",
  ]);

  const toggleAccordion = (id: string) => {
    setExpandedAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const sportsData: AccordionItem[] = [
    {
      id: "all-sports",
      label: "All Sports",
      subItems: [
        { id: "cricket", label: "Cricket" },
        { id: "tennis", label: "Tennis" },
        { id: "football", label: "Football" },
        { id: "cricket-casino", label: "Cricket Casino" },
        { id: "election", label: "Election" },
        { id: "kabaddi", label: "Kabaddi" },
      ],
    },
    {
      id: "racing",
      label: "Racing",
      subItems: [
        { id: "horse-racing", label: "Horse Racing" },
        { id: "greyhound", label: "Greyhound" },
      ],
    },
  ];

  return (
    <div className="w-[360px] h-full bg-[#121b26] text-white flex flex-col font-sans">
      <div className="p-4 flex items-center justify-between border-b border-white/5">
        <button className="text-[#7b8b9a] hover:text-white">
          <div className="w-5 h-5 bg-current rounded-sm opacity-70" />
        </button>

        <span className="text-xl font-bold tracking-wide italic text-[#f5a623]">
          Winna
        </span>

        <button className="text-[#7b8b9a] hover:text-white">
          <div className="w-5 h-5 bg-current rounded-sm opacity-70" />
        </button>
      </div>

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

      <div className="p-4 pt-2">
        <div className="flex bg-[#07131e] p-1 rounded-2xl gap-1">
          <button
            onClick={() => setActiveTab("casino")}
            className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200
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
            className={`flex flex-1 items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200
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

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {activeTab === "casino" ? (
          <div className="flex items-center gap-3 bg-[#0d1a26] rounded-xl px-4 py-3 border border-white/5 cursor-pointer text-[#f5a623]">
            <span className="text-sm">📡</span>
            <span className="text-sm font-medium">Casino</span>
          </div>
        ) : (
          <div className="space-y-3">
            {sportsData.map((group) => {
              const isExpanded = expandedAccordions.includes(group.id);

              return (
                <div key={group.id} className="rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(group.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors duration-150
                      ${
                        isExpanded
                          ? "bg-[#0d2236] text-[#f5a623]"
                          : "bg-[#0d1a26] text-white hover:bg-[#132436]"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm">🏀</span>
                      <span className="text-sm font-semibold tracking-wide">
                        {group.label}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] transform transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  {isExpanded && group.subItems && (
                    <div className="bg-[#121b26] pt-1">
                      {group.subItems.map((sub) => (
                        <div
                          key={sub.id}
                          className="flex items-center gap-4 px-5 py-3 hover:bg-white/5 cursor-pointer transition-colors group"
                        >
                          <span className="text-[#7b8b9a] group-hover:text-white text-xs opacity-70">
                            🔹
                          </span>
                          <span className="text-sm text-[#ccd6e0] font-medium group-hover:text-white">
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
      </div>

      <div className="p-4 border-t border-white/5 bg-[#121b26]">
        <button className="w-full flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09216] text-[#07131e] font-bold py-3 px-4 rounded-xl shadow-lg transition-colors text-sm">
          <span>🎧</span>
          Live Support
        </button>
      </div>
    </div>
  );
};

export default SidenavBar;
