"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SportsMenuIcons, ThemeIcons } from "../components/SvgIcons";
import greyHound from "../../public/images/greyHound.png";
import horsey from "../../public/images/horsey.png";
import Image from "next/image";

export default function SportRacingTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeSport =
    searchParams.get("type") === "greyhound" ? "greyhound" : "horse";

  const setActiveSport = (sportType: "horse" | "greyhound") => {
    router.push(`/racing?type=${sportType}`);
  };

  const handleGoToAllRunners = () => {
    router.push(`/events?type=${activeSport}`);
  };

  const greyhoundRunners = [
    { id: 1, name: "1. No Spark Left", time: "02:27 PM" },
    { id: 2, name: "2. Go Forward Kenny", time: "02:27 PM" },
    { id: 3, name: "3. Midnight Arrow", time: "02:27 PM" },
    { id: 4, name: "4. Rusty Cortez", time: "02:27 PM" },
    { id: 5, name: "5. Hello How Low", time: "02:27 PM" },
  ];

  const horseRunners = [
    { id: 1, name: "1. Thunder Gallop", time: "03:15 PM" },
    { id: 2, name: "2. Majestic Blaze", time: "03:15 PM" },
    { id: 3, name: "3. Golden Mane", time: "03:15 PM" },
    { id: 4, name: "4. Velvet Shadow", time: "03:15 PM" },
    { id: 5, name: "5. Desert Storm", time: "03:15 PM" },
  ];

  const currentRunners =
    activeSport === "greyhound" ? greyhoundRunners : horseRunners;
  const currentTitle =
    activeSport === "greyhound" ? "Greyhound Racing" : "Horse Racing";
  const currentSvg =
    activeSport === "greyhound" ? (
      <SportsMenuIcons.GreyhoundRacingIcon />
    ) : (
      <SportsMenuIcons.HorseRacingIcon />
    );
  const currentTrack = activeSport === "greyhound" ? "Richmond" : "Flemington";

  // Dynamic Background Assignment
  const currentBackgroundImage =
    activeSport === "greyhound" ? greyHound : horsey;

  return (
    <div className="min-h-screen text-white font-sans relative isolate">
      <div className="flex items-center gap-2 mb-4">
        <span>{currentSvg}</span>
        <h1 className="text-2xl font-bold tracking-wide">{currentTitle}</h1>
      </div>

      {/* Dynamic image as per event */}
      <div className="absolute top-[-15px] left-1/2 z-[-1] w-full max-w-[60%] -translate-x-1/2 h-auto bg-top bg-no-repeat opacity-20 transition-opacity duration-1000 ease-in">
        <Image
          src={currentBackgroundImage}
          alt={`${currentTitle} background`}
          className="aspect-video w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setActiveSport("greyhound")}
          className={`flex items-center gap-2 font-bold px-4 py-1.5 rounded-lg text-sm transition ${
            activeSport === "greyhound"
              ? "bg-accent-blue text-white"
              : "bg-[#1b263b] text-zinc-300 hover:bg-accent-blue"
          }`}
        >
          <span>
            <SportsMenuIcons.GreyhoundRacingIcon />
          </span>
          Greyhound Racing
        </button>

        <button
          onClick={() => setActiveSport("horse")}
          className={`flex items-center gap-2 font-bold px-4 py-1.5 rounded-lg text-sm transition ${
            activeSport === "horse"
              ? "bg-accent-blue text-white"
              : "bg-[#1b263b] text-zinc-300 hover:bg-accent-blue"
          }`}
        >
          <span>
            <SportsMenuIcons.HorseRacingIcon />
          </span>
          Horse Racing
        </button>
      </div>

      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <button className="flex items-center gap-2 bg-accent-blue text-white font-bold px-4 py-1.5 rounded-md text-14">
          Today
          <span className="bg-accent-blue-hover text-white px-1.5 py-0.5 rounded-full text-[10px] font-black">
            1
          </span>
        </button>
        <button className="flex items-center gap-2 bg-[#131c2e] text-white font-semibold px-4 py-1.5 rounded-md text-14 border border-zinc-800/80">
          Tomorrow
          <span className="bg-body-level-4 text-zinc-400 px-1.5 py-0.5 rounded-full text-[10px]">
            0
          </span>
        </button>
        <button className="flex items-center gap-2 bg-[#131c2e] text-white font-semibold px-4 py-1.5 rounded-md text-14 border border-zinc-800/80">
          Upcoming
          <span className="bg-body-level-4 text-zinc-400 px-1.5 py-0.5 rounded-full text-[10px]">
            0
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <svg
          className="w-4 h-4 text-zinc-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
        <h2 className="text-lg font-bold tracking-wide">{currentTrack}</h2>
      </div>

      <div className="max-w-sm bg-body-level-1 border border-body-level-2 rounded-xl p-2 shadow-xl backdrop-blur-md">
        <div className="flex justify-between items-center text-[11px] font-semibold text-zinc-400 tracking-wider mb-3 px-1">
          <span>Runner</span>
          <span>Time</span>
        </div>

        <div className="space-y-2 mb-4">
          {currentRunners.map((runner) => (
            <div
              key={runner.id}
              className="flex justify-between items-center rounded-lg hover:border-zinc-700 transition duration-150 mb-5"
            >
              <span className="text-xs font-semibold text-zinc-200">
                {runner.name}
              </span>
              <span className="bg-[#1b263b] hover:bg-body-level-2 text-white text-[11px] font-bold px-3 py-4.5 rounded-md min-w-[85px] text-center">
                {runner.time}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleGoToAllRunners}
          className="w-full bg-body-level-2 text-white rounded-lg py-2.5 text-center text-[10px] font-bold tracking-wider transition uppercase flex items-center justify-center gap-1.5"
        >
          Go To All Runners
          <span className="text-[8px] text-white opacity-75 rotate-270">
            <ThemeIcons.ChevronDownIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
