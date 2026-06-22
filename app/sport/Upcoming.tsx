"use client";

import { useState } from "react";
import { NavIcons } from "../components/SvgIcons";


export default function Upcoming() {
    const [activeTab, setActiveTab] = useState("Cricket");

    const tabs = [
        {
            name: "Cricket",
            icon: <NavIcons.CricketIcon />,
        },
        {
            name: "Tennis",
            icon: <NavIcons.TennisIcon />,
        },
      
    ];

    const matches = [
        {
            league: "Unofficial International Matches",
            time: "Today 01:00:00 PM",
            team1: "India U19 W",
            team2: "Sri Lanka U19 W",
            odd1: "1.17",
            odd2: "4.30",
        },
        {
            league: "Aura ODI Series 2026",
            time: "Saturday 01:30:00 PM",
            team1: "Australia",
            team2: "England",
            odd1: "--",
            odd2: "--",
        },
        {
            league: "t20 women's",
            time: "Tuesday 01:41:00 PM",
            team1: "India Women",
            team2: "Pakistan Women",
            odd1: "--",
            odd2: "--",
        },
        {
            league: "Maharaja T20 Trophy",
            time: "Today 02:30:00 PM",
            team1: "Mysore Warriors",
            team2: "Hubli Tigers",
            odd1: "--",
            odd2: "--",
        },
        {
            league: "Madhya Pradesh T20 League",
            time: "Today 03:00:00 PM",
            team1: "Royal Nimar Eagles",
            team2: "Bhopal Leopards",
            odd1: "--",
            odd2: "--",
        },
        {
            league: "Maharaja T20 Trophy",
            time: "Today 07:00:00 PM",
            team1: "Gulbarga Mystics",
            team2: "Coastal Kings Mangaluru",
            odd1: "--",
            odd2: "--",
        },
    ];

    return (
        <section className="w-full  py-6">
            {/* Heading */}
            <h3 className="flex items-center gap-2 text-white text-[20px] font-semibold mb-6">
                <span className="text-[#f5c542] text-xl"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="upcoming-icon" fill="#07f"><g id="Property1Upcoming"><g id="Union"><path d="M21.9177 16.9959C21.4434 19.8356 18.9745 22 16 22C12.6863 22 10 19.3137 10 16C10 13.0256 12.1644 10.5566 15.0042 10.0823C15.5489 9.9913 16 10.4478 16 11V16H21C21.5523 16 22.0087 16.4511 21.9177 16.9959Z"></path><path  d="M27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16ZM24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16Z"></path></g></g></svg></span>
          Upcoming
            </h3>

            {/* Tabs */}
            <div className="flex items-center gap-[10px] mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`h-[34px] px-3 rounded-lg text-sm font-semibold  flex items-center gap-1.5 whitespace-nowrap transition-all duration-300
              ${activeTab === tab.name
                                ? "bg-accent-blue  border-accent-blue text-white"
                                : "bg-body-level-7  border-body-level-7 text-white hover:bg-body-level-6 "
                            }`}
                    >
                        {tab.icon}
                        <span>{tab.name}</span>
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
                {matches.map((match, index) => (
                    <div
                        key={index}
                        className="bg-body-level-7 border-body-level-7 rounded-lg px-2 py-3"
                    >
                        <p className="text-cs-text-color text-[12px] font-semibold mb-2 px-2 ">
                            🔗 {match.league}
                        </p>

                        <p className="text-accent-blue  text-[12px] font-bold mb-3 px-2 ">
                            {match.time}
                        </p>

                        <div className="space-y-3  pt-2 ps-2 pb-3 ">
                            <div className="flex items-center gap-2 ">
                                <div className="w-7 h-7 rounded-full bg-accent-blue  flex items-center justify-center text-white">
                                    <NavIcons.CricketIcon />
                                </div>
                                <span className="text-white text-[14px] font-semibold">
                                    {match.team1}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 " >
                                <div className="w-7 h-7 rounded-full bg-accent-blue  flex items-center justify-center text-white">
                                    <NavIcons.CricketIcon />
                                </div>
                                <span className="text-white text-[14px] font-semibold">
                                    {match.team2}
                                </span>
                            </div>
                        </div>

                        <p className="text-cs-text-color  font-semibold text-[14px] mb-3 px-2 ">
                            Match Odds
                        </p>

                        <div className="grid grid-cols-2 gap-3 ">
                            <button className="h-[38px]  bg-body-level-9 rounded-lg px-4 flex items-center justify-between text-[12px] text-white font-semibold">
                                <span className="text-cs-text-color ">1</span>
                                <span>{match.odd1}</span>
                            </button>

                            <button className="h-[38px] bg-body-level-9 rounded-lg px-4 flex items-center justify-between  text-[12px] text-white font-semibold">
                                <span className="text-cs-text-color ">2</span>
                                <span>{match.odd2}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}