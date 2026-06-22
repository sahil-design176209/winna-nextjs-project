"use client";

import { useState } from "react";
import { NavIcons } from "../components/SvgIcons";


export default function Popular() {
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
    {
      name: "Football",
      icon: <NavIcons.FootballIcon />,
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
        <span className="text-[#f5c542] text-xl">	<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="#F5C542"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M18.8 9.73684C18.8 10.7537 18.2326 11.641 17.3904 12.1129L20.1822 15.8272C20.5377 16.3001 21.2239 16.3627 21.6591 15.9619L26.2786 11.707C25.9151 11.3301 25.6923 10.8221 25.6923 10.2632C25.6923 9.10052 26.6566 8.15796 27.8461 8.15796C29.0356 8.15796 30 9.10052 30 10.2632C30 11.4259 29.0356 12.3685 27.8461 12.3685C27.7679 12.3685 27.6907 12.3644 27.6147 12.3565L26.8677 19.1099C26.8117 19.6166 26.3835 20 25.8738 20H6.12146C5.61379 20 5.18667 19.6196 5.12813 19.1153L4.34403 12.3604C4.28136 12.3657 4.21793 12.3685 4.15385 12.3685C2.96431 12.3685 2 11.4259 2 10.2632C2 9.10052 2.96431 8.15796 4.15385 8.15796C5.34338 8.15796 6.30769 9.10052 6.30769 10.2632C6.30769 10.832 6.07693 11.3481 5.70192 11.7269L10.3413 15.9678C10.7769 16.3659 11.4608 16.3023 11.8154 15.8305L14.6096 12.113C13.7674 11.6411 13.2 10.7538 13.2 9.73684C13.2 8.22533 14.4536 7 16 7C17.5463 7 18.8 8.22533 18.8 9.73684Z" />

					<path d="M6.5 23C5.67157 23 5 23.6716 5 24.5C5 25.3284 5.67157 26 6.5 26H25.5C26.3284 26 27 25.3284 27 24.5C27 23.6716 26.3284 23 25.5 23H6.5Z" />
				</svg></span>
        Popular
      </h3>

      {/* Tabs */}
      <div className="flex items-center gap-[10px] mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`h-[34px] px-3 rounded-lg text-sm font-semibold  flex items-center gap-1.5 whitespace-nowrap transition-all duration-300
              ${
                activeTab === tab.name
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