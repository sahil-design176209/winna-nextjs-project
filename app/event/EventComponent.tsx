"use client";

import { useState } from "react";
import Betslip from "../components/common/Betslip";

import { ChevronUp, ChevronDown } from "lucide-react";
export default function EventComponent() {
  const [activeTab, setActiveTab] = useState("all");
  const [matchOddsOpen, setMatchOddsOpen] = useState(true);
  const [bookmakerOpen, setBookmakerOpen] = useState(true);
  const [tossOpen, setTossOpen] = useState(true);
  const [allOpen, setAllOpen] = useState(true);
  const [showMatchOdds, setShowMatchOdds] = useState(true);
  const [showBookmaker, setShowBookmaker] = useState(true);
  const [showToss, setShowToss] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedBet, setSelectedBet] = useState<{
    team: string;
    odd: string;
  } | null>(null);

  const handleBetClick = (item: { team: string; odd: string }) => {
    setSelectedBet(item);
    setIsCollapsed(false); // Opens the betslip when a bet is clicked
  };

  return (
    <>
      <section className="w-full space-y-5">
        {/* Match Header */}
        <div className="rounded-[8px] bg-body-level-7 ">
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

          <div className="flex items-center justify-between px-4 pe-4 pt-0 pb-[40px]">
            {/* Team 1 */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue text-white  text-[12px]">
                ZI
              </div>
              <h3 className="text-xl  text-white text-[16px]">ZIMBABWE</h3>
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
                  <div className="flex h-[28px]  w-[28px] items-center justify-center rounded-full bg-body-level-9 text-white  text-[15px] my-2">
                    {item.value}
                  </div>
                  <p className="mt-1 text-[10px] text-white">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Team 2 */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-blue text-white  text-[12px]">
                BA
              </div>
              <h3 className="text-xl font-semibold text-white text-[16px]">
                BANGLADESH
              </h3>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-4 py-2 text-[14px] font-semibold ${
                activeTab === "all"
                  ? "bg-body-level-7 text-white"
                  : "text-typography-dark-gray"
              }`}
            >
              All{" "}
              <span className="ml-1 text-[12px] bg-body-level-4 rounded-full text-typography-gray px-1.5 py-0">
                3
              </span>
            </button>

            <button
              onClick={() => setActiveTab("market")}
              className={`text-[14px] ${
                activeTab === "market" ? "text-white" : "text-typography-gray"
              }`}
            >
              Market{" "}
              <span className="text-[12px] bg-gray-800 text-typography-gray rounded-full px-1.5 py-0">
                1
              </span>
            </button>

            <button
              onClick={() => setActiveTab("odds")}
              className={`text-[14px] ${
                activeTab === "odds" ? "text-white" : "text-typography-gray"
              }`}
            >
              Odds{" "}
              <span className="text-[12px] bg-gray-800 text-typography-gray rounded-full px-1.5 py-0">
                2
              </span>
            </button>
          </div>
          <div className="flex items-center flex-col">
            <span
              onClick={() => {
                const newState = !allOpen;

                setAllOpen(newState);
                setShowMatchOdds(newState);
                setShowBookmaker(newState);
                setShowToss(newState);
              }}
              className="bg-body-level-9 h-[32px] w-[32px] flex items-center flex-col rounded-[8px] justify-center me-4 cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="#ffffff4d"
                className={`transition-transform ${allOpen ? "rotate-180" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                />
              </svg>

              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                fill="#ffffff4d"
                className={`transition-transform ${allOpen ? "rotate-180" : ""}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                />
              </svg>
            </span>
          </div>
        </div>
        {showMatchOdds && (
          <div className="rounded-xl bg-body-level-7 p-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-white flex gap-2 items-center">
                <span className="bg-body-level-9 h-[32px] w-[32px] flex items-center justify-center rounded-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="12"
                    viewBox="0 0 16 16"
                    className="size-4"
                    fill="#ffffff4d"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"
                    ></path>
                  </svg>
                </span>{" "}
                Match Odds
              </h3>

              <button
                className="rounded-lg bg-body-level-8 p-2"
                onClick={() => setMatchOddsOpen(!matchOddsOpen)}
              >
                <span className="bg-body-level-9 h-[32px] w-[32px] flex items-center justify-center rounded-[8px]">
                  {matchOddsOpen ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#ffffff4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#ffffff4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                      ></path>
                    </svg>
                  )}{" "}
                </span>
              </button>
            </div>

            {matchOddsOpen && (
              <div className="space-y-2">
                {[
                  { team: "Zimbabwe", odd: "1.4" },
                  { team: "Bangladesh", odd: "1.4" },
                  { team: "The Draw", odd: "2.04" },
                ].map((item) => (
                  <div
                    key={item.team}
                    onClick={() => handleBetClick(item)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 h-[30px] transition-colors ${
                      selectedBet?.team === item.team &&
                      selectedBet?.odd === item.odd
                        ? "bg-accent-blue !text-white" // Your active/selected background color
                        : "bg-body-level-9 !text-typography-gray" // Your default background color
                    }`}
                  >
                    <span className="text-[inherit] text-[12px] font-bold">
                      {item.team}
                    </span>
                    <span className="font-semibold text-white text-[12px]">
                      {item.odd}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {showBookmaker && (
          <div className="rounded-xl bg-body-level-7 p-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px]font-semibold text-white  flex gap-2 items-center">
                <span className="bg-body-level-9 h-[32px] w-[32px] flex items-center justify-center rounded-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="12"
                    viewBox="0 0 16 16"
                    className="size-4"
                    fill="#ffffff4d"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"
                    ></path>
                  </svg>
                </span>{" "}
                Bookmaker 0%Comm
              </h3>

              <button
                className="rounded-lg bg-body-level-8 p-2"
                onClick={() => setBookmakerOpen(!bookmakerOpen)}
              >
                <span className="bg-body-level-9 h-[32px] w-[32px] flex items-center justify-center rounded-[8px]">
                  {bookmakerOpen ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#ffffff4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#ffffff4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                      ></path>
                    </svg>
                  )}{" "}
                </span>
              </button>
            </div>

            {bookmakerOpen && (
              <div className="space-y-2">
                {[
                  { team: "Zimbabwe", odd: "1.4" },
                  { team: "Bangladesh", odd: "1.4" },
                  { team: "The Draw", odd: "2.04" },
                ].map((item) => (
                  <div
                    key={item.team}
                    onClick={() => handleBetClick(item)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 h-[30px] transition-colors ${
                      selectedBet?.team === item.team &&
                      selectedBet?.odd === item.odd
                        ? "bg-accent-blue !text-white " // Your active/selected background color
                        : "bg-body-level-9 !text-typography-gray" // Your default background color
                    }`}
                  >
                    <span className="text-[inherit] text-[12px] font-bold">
                      {item.team}
                    </span>
                    <span className="font-semibold text-white text-[12px]">
                      {item.odd}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        {showToss && (
          <div className="rounded-xl bg-body-level-7 p-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[14px] font-semibold text-white flex gap-2 items-center">
                <span className="bg-body-level-9 h-[32px] w-[32px] flex items-center justify-center rounded-[8px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="12"
                    viewBox="0 0 16 16"
                    className="size-4"
                    fill="#ffffff4d"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.15393 1.50488C7.67563 1.22874 7.06404 1.39262 6.7879 1.87091C6.51176 2.3492 6.67563 2.96079 7.15393 3.23693L7.9117 3.67443L4.87043 7.69206L3.7879 7.06706C3.30961 6.79092 2.69802 6.95479 2.42188 7.43309C2.14573 7.91138 2.30961 8.52297 2.7879 8.79911L3.65393 9.29911L5.38611 10.2992C5.38611 10.2992 4.30649 11.8037 3.88611 12.8973C3.44299 14.05 3.25214 15.9953 3.25214 15.9953C3.25214 15.9953 4.84144 14.8574 5.61816 13.8973C6.35502 12.9864 7.11816 11.2992 7.11816 11.2992L8.85008 12.2991L9.7161 12.7991C10.1944 13.0753 10.806 12.9114 11.0821 12.4331C11.3583 11.9548 11.1944 11.3432 10.7161 11.0671L9.63357 10.4421L11.5923 5.79943L12.3501 6.23693C12.8284 6.51308 13.44 6.3492 13.7161 5.87091C13.9922 5.39262 13.8284 4.78103 13.3501 4.50488L8.15393 1.50488Z"
                    ></path>
                  </svg>
                </span>{" "}
                Toss
              </h3>

              <button
                className="rounded-lg bg-body-level-8 p-2"
                onClick={() => setTossOpen(!tossOpen)}
              >
                <span className="bg-body-level-9 h-[32px] w-[32px] flex items-center justify-center rounded-[8px]">
                  {tossOpen ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#ffffff4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 18 18"
                      fill="#ffffff4d"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                      ></path>
                    </svg>
                  )}{" "}
                </span>
              </button>
            </div>

            {tossOpen && (
              <div className="space-y-2">
                {[
                  { team: "Zimbabwe", odd: "1.4" },
                  { team: "Bangladesh", odd: "1.4" },
                  { team: "The Draw", odd: "2.04" },
                ].map((item) => (
                  <div
                    key={item.team}
                    onClick={() => handleBetClick(item)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 h-[30px] transition-colors ${
                      selectedBet?.team === item.team &&
                      selectedBet?.odd === item.odd
                        ? "bg-accent-blue !text-white" // <-- Added !text-white here
                        : "bg-body-level-9 !text-typography-gray"
                    }`}
                  >
                    {/* Change text-typography-gray to text-[inherit] so it listens to the parent */}
                    <span className="text-[inherit] text-[12px] font-bold">
                      {item.team}
                    </span>

                    <span className="font-semibold text-white text-[12px]">
                      {item.odd}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>
      <div className="fixed bottom-0 right-4 z-50 w-full max-w-[360px] sm:right-6 md:right-8">
        <Betslip
          selectedBet={selectedBet}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>
    </>
  );
}
