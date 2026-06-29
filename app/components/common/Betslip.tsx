import React, { useState } from "react";
interface BetSlipProps {
  selectedBet: {
    team: string;
    odd: string;
  } | null;
}
const Betslip = ({ selectedBet }: BetSlipProps) => {
  // State to manage whether the entire panel is collapsed or open
  const [isCollapsed, setIsCollapsed] = useState(true);

  // State to manage whether "1 Click Bet" mode is active
  const [isOneClickBet, setIsOneClickBet] = useState(false);

  // Quick bet chip values shown when mode is active
  const quickBetAmounts = [100, 200, 500, 1000];

  return (
    <div className=" hidden md:block w-full max-w-[320px] bg-black text-white font-sans rounded-t-lg overflow-hidden shadow-xl select-none transition-all duration-300">
      {/* HEADER SECTION */}
      <div className="flex items-center justify-between px-4 py-3 bg-accent-blue">
        {/* Clicking the title also toggles collapse for better UX */}
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="font-bold text-lg tracking-wide text-white">
            Betslip
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-white tracking-wide">
            1 Click Bet
          </span>

          {/* Custom Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isOneClickBet}
              onChange={() => setIsOneClickBet(!isOneClickBet)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-accent-blue-hover rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue-pressed"></div>
          </label>

          {/* Dropdown Arrow/Icon - Toggles panel open/close */}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-white focus:outline-none cursor-pointer p-0.5 hover:opacity-80 transition-opacity"
            aria-label="Toggle Betslip Content"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              // Flips the arrow upside-down smoothly when collapsed
              className={`transform transition-transform duration-200 ${isCollapsed ? "rotate-180" : "rotate-0"
                }`}
            >
              <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
            </svg>
          </button>
        </div>
      </div>


      {!isCollapsed && (
        <div className="p-5 min-h-[140px] flex flex-col justify-center transition-all">
          {!isOneClickBet ? (
            /* SCREENSHOT 2: Default Empty Betslip State */
            <div className="flex items-center gap-4">
              {/* Ticket Icon Container */}
             

              {!selectedBet ? (
                <div className="flex flex-col gap-0.5">
                   <div className="flex-shrink-0">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      opacity="0.15"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="var(--accent-blue)"
                    ></path>
                    <path
                      opacity="0.8"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M39.1395 42.6234C35.0096 45.9848 29.7401 48 24 48C18.3243 48 13.1088 46.0298 9 42.7361V14H12C12 15.6569 13.3431 17 15 17C16.6569 17 18 15.6569 18 14H21C21 15.6569 22.3431 17 24 17C25.6569 17 27 15.6569 27 14H30C30 15.6569 31.3431 17 33 17C34.6569 17 36 15.6569 36 14H39.1395V42.6234ZM16.5 24C15.6716 24 15 24.6716 15 25.5C15 26.3284 15.6716 27 16.5 27H31.5C32.3284 27 33 26.3284 33 25.5C33 24.6716 32.3284 24 31.5 24H16.5ZM16.5 31C15.6716 31 15 31.6716 15 32.5C15 33.3284 15.6716 34 16.5 34H27.5C28.3284 34 29 33.3284 29 32.5C29 31.6716 28.3284 31 27.5 31H16.5Z"
                      fill="var(--accent-blue)"
                    ></path>
                  </g>
                </svg>
              </div>

                  <h3 className="font-bold text-[17px] text-white">
                    Place your bets
                  </h3>

                  <p className="text-sm text-gray-400">
                    Your selections will appear in this area
                  </p>
                </div>
              ) : (
                <div className="w-full max-w-[340px] rounded-lg bg-[#1b2433] text-white overflow-hidden border border-[#2b3647]">
                  {/* Selection */}
                  <div className="border-b border-[#2b3647] p-4">
                    <h3 className="text-[#F5A623] font-semibold text-[16px]">
                      Zimbabwe
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Match Odds • Zimbabwe v Bangladesh
                    </p>

                    <p className="text-white font-bold text-3xl mt-2">
                      1.08
                    </p>
                  </div>

                  {/* Stake */}
                  <div className="p-4">
                    <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2">
                      Stake
                    </label>

                    <input
                      type="number"
                      placeholder="Enter amount"

                      className="w-full h-12 rounded-lg border border-[#35577D] bg-[#0d1724] px-4 text-white outline-none focus:border-blue-500"
                    />

                    {/* Quick Stake */}
                    <div className="grid grid-cols-3 gap-3 mt-6">

                      <button

                        className="h-12 rounded-lg bg-[#2B3647] font-semibold transition hover:bg-blue-600"
                      >

                      </button>

                    </div>

                    {/* Buttons */}
                    <button
                      className="mt-8 h-12 w-full rounded-lg bg-[#A86A12] font-bold uppercase hover:bg-[#c67c18] transition"
                    >
                      Place Bet
                    </button>

                    <button
                      className="mt-3 h-12 w-full rounded-lg bg-[#313F55] font-semibold hover:bg-[#3b4b63] transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
          
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-gray-300 leading-normal font-medium">
                QuickBet mode is on! After single click on any selection, it
                will place your bet immediately.
              </p>

              {/* Quick Stake Preset Chips */}
              <div className="grid grid-cols-4 gap-2.5 w-full pt-1">
                {quickBetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="bg-[#242b35] hover:bg-[#2f3845] text-white font-bold py-2.5 rounded-2xl text-center text-[15px] transition-colors shadow-sm cursor-pointer"
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Betslip;
