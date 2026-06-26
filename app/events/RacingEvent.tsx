"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ThemeIcons, SportsMenuIcons } from "../components/SvgIcons";

const RacingEvent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeSport =
    searchParams.get("type") === "greyhound" ? "greyhound" : "horse";

  const handleTabClick = (sportType: "horse" | "greyhound") => {
    router.push(`/racing?type=${sportType}`);
  };

  const greyhoundRunners = [
    { id: 1, name: "1. No Spark Left", odd: "1.4" },
    { id: 2, name: "2. Go Forward Kenny", odd: "1.4" },
    { id: 3, name: "3. Midnight Arrow", odd: "2.04" },
  ];

  const horseRunners = [
    { id: 1, name: "Zimbabwe", odd: "1.4" },
    { id: 2, name: "Bangladesh", odd: "1.4" },
    { id: 3, name: "The Draw", odd: "2.04" },
  ];

  const currentRunners =
    activeSport === "greyhound" ? greyhoundRunners : horseRunners;
  const currentTrackHeading =
    activeSport === "greyhound" ? "r1 515m greyhound mdn" : "r1 1400m mdn";
  const avatarText = activeSport === "greyhound" ? "GR" : "ZI";
  const mainTitleText =
    activeSport === "greyhound" ? "Richmond Dogs" : "ZIMBABWE";

  return (
    <div className="mb-[30px] text-white font-sans">
      <div className="flex items-center gap-3 mb-5 ">
        <button
          type="button"
          onClick={() => handleTabClick("horse")}
          className={`flex items-center gap-2 font-semibold px-4 py-2 rounded-lg text-[14px] transition ${
            activeSport === "horse"
              ? "bg-accent-blue text-white"
              : "bg-body-level-3  hover:bg-[#22304a]"
          }`}
        >
          <span>
            <SportsMenuIcons.HorseRacingIcon />
          </span>
          Horse Racing
        </button>

        <button
          type="button"
          onClick={() => handleTabClick("greyhound")}
          className={`flex items-center gap-2 font-semibold px-4 py-2 rounded-lg text-[14px] transition ${
            activeSport === "greyhound"
              ? "bg-accent-blue text-white"
              : "bg-body-level-3  hover:bg-[#22304a]"
          }`}
        >
          <span>
            <SportsMenuIcons.GreyhoundRacingIcon />
          </span>
          Greyhound Racing
        </button>
      </div>

      {/* Top Main Countdown Card */}
      <div className="rounded-[8px] bg-body-level-7 mb-5">
        <div className="px-3 py-4 flex items-center gap-2 text-sm text-cs-text-color">
          <span className="text-[12px]">Sunday</span>
          <span className="text-[12px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="#ffffff4d"
              className="-rotate-90"
            >
              <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
            </svg>
          </span>
          <span className="text-[12px]">01:00:00 PM</span>
        </div>

        <div className="flex items-center justify-between px-4 pt-0 pb-[40px]">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue text-white text-[12px] font-bold">
              {avatarText}
            </div>
            <h3 className="text-xl text-white text-[16px] font-bold uppercase">
              {mainTitleText}
            </h3>
          </div>

          {/* Countdown */}
          <div className="hidden md:flex gap-5 items-center">
            {[
              { value: "2", label: "Days" },
              { value: "23", label: "Hours" },
              { value: "59", label: "Minutes" },
              { value: "43", label: "Seconds" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center flex justify-center flex-col items-center"
              >
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-body-level-9 text-white text-[15px] my-2">
                  {item.value}
                </div>
                <p className="mt-1 text-[10px] text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-body-level-9 rounded-md p-2 flex items-center justify-between ">
        <div className="game-title-heading text-[12px] flex items-center justify-center gap-2 m-0 race-event-heading text-zinc-300">
          <span>{currentTrackHeading}</span>
          <ThemeIcons.InfoIcon />
        </div>
        <div className="inplay-right d-flex align-items-center">
          <div className="inplay-content d-flex align-items-center me-2">
            <span className="text-12 text-zinc-400">
              Race start Time : 26 Jun 2026 15:55:00 PM
            </span>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="space-y-2">
          {currentRunners.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-lg bg-body-level-9 px-2 py-2"
            >
              <div className="start-tag">
                <span className="truncate text-[12px] font-bold text-typography-gray">
                  {item.name}
                </span>
              </div>
              <div className="end-tag ">
                <div className="flex items-center justify-between gap-2">
                  <div className="px-[10px] py-[16px] rounded-md w-[300px] w-[300px] max-[991px]:w-[200px] max-[620px]:w-[100px] width-full bg-body-level-3 flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-white">
                      {item.odd}
                    </span>
                    <span className="text-[12px] font-semibold text-white">
                      {item.odd}
                    </span>
                  </div>
                  <div className="px-[10px] py-[16px] rounded-md w-[300px] w-[300px] max-[991px]:w-[200px] max-[620px]:w-[100px] width-full bg-body-level-3 flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-white">
                      {item.odd}
                    </span>
                    <span className="text-[12px] font-semibold text-white">
                      {item.odd}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RacingEvent;
