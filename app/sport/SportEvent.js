"use client";

import { useState } from "react";
import { NavIcons } from "../components/SvgIcons";
import EventComponent from "../event/EventComponent"
import { useRouter } from "next/navigation";
export default function SportEvent() {
    const [activeTab, setActiveTab] = useState("Cricket");
    const router = useRouter();
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
        <section className="w-full ">


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
                        className="bg-body-level-7 border-body-level-7 rounded-lg px-2 py-3 cursor-pointer"
                        onClick={() => router.push(`/event`)}
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