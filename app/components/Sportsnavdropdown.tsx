import React, { useState } from "react";

const SportsNavDropdown = () => {
  const [activeTab, setActiveTab] = useState("Sports");

  const sportsData = [
    { name: "Cricket", count: 26 },
    { name: "Tennis", count: 90 },
    { name: "Football", count: 11 },
    { name: "Cricket Casino", count: 0 },
    { name: "Election", count: 0 },
    { name: "Kabaddi", count: 0 },
  ];

  const racingData = [
    { name: "Horse Racing", count: 5 },
    { name: "Greyhounds", count: 14 },
  ];

  const currentData = activeTab === "Sports" ? sportsData : racingData;

  return (
    <div className="w-full ">
      {/* Container matching the card shape and color in image_1b597a.png */}
      <div className="w-full max-w-7xl mx-auto rounded-[24px]  ">
        {/* Centered Top Nav Segment Links */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-body-level-2 p-1.5 rounded-xl min-w-[402px]">
            <button
              onClick={() => setActiveTab("Sports")}
              className={`flex-1 py-2 text-[14px] font-bold rounded-lg transition-all duration-150 ${
                activeTab === "Sports"
                  ? "bg-[#2C384E] text-white "
                  : "text-[#778599] hover:text-white"
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => setActiveTab("Racing")}
              className={`flex-1 py-2 text-[14px] font-bold rounded-lg transition-all duration-150 ${
                activeTab === "Racing"
                  ? "bg-[#2C384E] text-white "
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
              className="flex items-center justify-start transition-opacity hover:opacity-80 cursor-pointer select-none"
            >
              {/* Item Wrapper Pill Layout */}
              <div className="flex items-center space-x-2 text-[#9BA8BC]">
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
