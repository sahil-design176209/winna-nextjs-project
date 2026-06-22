"use client";

import { useState } from "react";
import { NavIcons } from "../components/SvgIcons";


export default function LiveSport() {
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
               <svg width="32" height="32" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  className="text-red-500" ><path d="M12.9628 3.20912C12.6766 2.93029 12.2125 2.93029 11.9263 3.20912C11.6401 3.48794 11.6401 3.94001 11.9263 4.21883C12.436 4.71538 12.8404 5.30487 13.1163 5.95365C13.3921 6.60242 13.5341 7.29777 13.5341 8C13.5341 8.70223 13.3921 9.39758 13.1163 10.0464C12.8404 10.6951 12.436 11.2846 11.9263 11.7812C11.6401 12.06 11.6401 12.5121 11.9263 12.7909C12.2125 13.0697 12.6766 13.0697 12.9628 12.7909C13.6087 12.1617 14.121 11.4148 14.4706 10.5928C14.8201 9.77079 15 8.88975 15 8C15 7.11025 14.8201 6.22921 14.4706 5.40719C14.121 4.58517 13.6087 3.83827 12.9628 3.20912Z"></path><path d="M10.0422 5.11529C10.3284 4.83647 10.7925 4.83647 11.0787 5.11529C11.4708 5.49724 11.7818 5.95068 11.994 6.44972C12.2062 6.94876 12.3155 7.48363 12.3155 8.02379C12.3155 8.56395 12.2062 9.09881 11.994 9.59786C11.7818 10.0969 11.4708 10.5503 11.0787 10.9323C10.7925 11.2111 10.3284 11.2111 10.0422 10.9323C9.75595 10.6535 9.75595 10.2014 10.0422 9.92257C10.2982 9.67322 10.5012 9.37719 10.6397 9.0514C10.7783 8.72561 10.8496 8.37642 10.8496 8.02379C10.8496 7.67115 10.7783 7.32197 10.6397 6.99617C10.5012 6.67038 10.2982 6.37436 10.0422 6.12501C9.75595 5.84618 9.75595 5.39412 10.0422 5.11529Z"></path><path d="M8.05198 9.51147C8.90891 9.51147 9.60359 8.83477 9.60359 8.00002C9.60359 7.16526 8.90891 6.48856 8.05198 6.48856C7.19504 6.48856 6.50036 7.16526 6.50036 8.00002C6.50036 8.83477 7.19504 9.51147 8.05198 9.51147Z"></path><path d="M6.05604 5.11529C5.76981 4.83647 5.30574 4.83647 5.0195 5.11529C4.62741 5.49724 4.31638 5.95068 4.10418 6.44972C3.89198 6.94876 3.78276 7.48363 3.78276 8.02379C3.78276 8.56395 3.89198 9.09881 4.10418 9.59786C4.31638 10.0969 4.62741 10.5503 5.0195 10.9323C5.30574 11.2111 5.76981 11.2111 6.05604 10.9323C6.34228 10.6535 6.34228 10.2014 6.05604 9.92257C5.80007 9.67322 5.59702 9.37719 5.45848 9.0514C5.31995 8.72561 5.24865 8.37642 5.24865 8.02379C5.24865 7.67115 5.31995 7.32197 5.45848 6.99617C5.59702 6.67038 5.80007 6.37436 6.05604 6.12501C6.34228 5.84618 6.34228 5.39412 6.05604 5.11529Z"></path><path d="M3.03717 3.20912C3.3234 2.93029 3.78748 2.93029 4.07371 3.20912C4.35994 3.48794 4.35994 3.94001 4.07371 4.21883C3.56397 4.71538 3.15962 5.30487 2.88375 5.95365C2.60788 6.60242 2.46589 7.29777 2.46589 8C2.46589 8.70223 2.60788 9.39758 2.88375 10.0464C3.15962 10.6951 3.56397 11.2846 4.07371 11.7812C4.35994 12.06 4.35994 12.5121 4.07371 12.7909C3.78748 13.0697 3.3234 13.0697 3.03717 12.7909C2.39131 12.1617 1.87898 11.4148 1.52944 10.5928C1.1799 9.77078 1 8.88975 1 8C1 7.11025 1.1799 6.22921 1.52944 5.40719C1.87898 4.58517 2.39131 3.83827 3.03717 3.20912Z"></path></svg>
                Live
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