import React, { useState } from "react";
import { ThemeIcons } from "../SvgIcons";
interface BetSlipProps {
  selectedBet: { team: string; odd: string } | null; // your existing line
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}
const Betslip = ({
  selectedBet,
  isCollapsed,
  setIsCollapsed,
}: BetSlipProps) => {
  const [isOneClickBet, setIsOneClickBet] = useState(false);

  const quickBetAmounts = [100, 200, 500, 1000];

  return (
    <div className=" hidden md:block w-full max-w-[320px] bg-black text-white font-sans rounded-t-lg overflow-hidden shadow-xl select-none transition-all duration-300">
      <div className="flex items-center justify-between px-4 py-3 bg-accent-blue">
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="font-bold text-lg tracking-wide text-white flex items-center jsutify-center gap-2">
            <ThemeIcons.BetsyIcon />
            <span className=""> Betslip</span>
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
                className={`transform transition-transform duration-200 ${
                  isCollapsed ? "rotate-180" : "rotate-0"
                }`}
              >
                <path d="M8.7542 11.1529C8.35634 11.6157 7.64366 11.6157 7.2458 11.1529L4.24545 7.66298C3.68586 7.01207 4.14485 6 4.99964 6L11.0004 6C11.8551 6 12.3141 7.01207 11.7546 7.66298L8.7542 11.1529Z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-white tracking-wide">
            1 Click Bet
          </span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isOneClickBet}
              onChange={() => setIsOneClickBet(!isOneClickBet)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-accent-blue-hover rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full after:content-['']  border-2 border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-blue-pressed"></div>
          </label>
        </div>
      </div>

      {!isCollapsed && (
        <div className="p-3 min-h-[140px] flex flex-col justify-center transition-all">
          {!isOneClickBet ? (
            <div className="flex items-center gap-4">
              {!selectedBet ? (
                <div className="flex  gap-3">
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

                  <div className="right">
                    <h3 className="font-bold text-[17px] text-white">
                      Place your bets
                    </h3>

                    <p className="text-sm text-gray-400">
                      Your selections will appear in this area
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-[340px] rounded-lg text-white overflow-hidden ">
                  <div className=" py-4">
                    <h3 className="text-accent-blue font-bold text-[16px]">
                      Zimbabwe
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Match Odds • Zimbabwe v Bangladesh
                    </p>
                    <p className="text-white font-bold text-xl mt-2">1.08</p>
                  </div>

                  <div>
                    <div className="flex items-center justify-center gap-2">
                      <label className="block text-xs font-semibold tracking-wider text-gray-400 uppercase mb-0">
                        Stake
                      </label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full h-12 rounded-lg border border-[#35577D] bg-[#0d1724] px-4 text-white outline-none focus:border-accent-blue"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-6">
                      <button
                        type="button"
                        className="quick-btn  h-12 bg-body-level-3 rounded-lg"
                      >
                        100
                      </button>
                      <button
                        type="button"
                        className="quick-btn  h-12 bg-body-level-3 rounded-lg"
                      >
                        100
                      </button>
                      <button
                        type="button"
                        className="quick-btn  h-12 bg-body-level-3 rounded-lg"
                      >
                        100
                      </button>
                      <button
                        type="button"
                        className="quick-btn  h-12 bg-body-level-3 rounded-lg"
                      >
                        100
                      </button>
                      <button
                        type="button"
                        className="quick-btn  h-12 bg-body-level-3 rounded-lg"
                      >
                        100
                      </button>
                      <button
                        type="button"
                        className="quick-btn  h-12 bg-body-level-3 rounded-lg"
                      >
                        100
                      </button>
                    </div>

                    <button className="mt-8 h-12 w-full rounded-lg bg-accent-blue font-bold uppercase hover:bg-[#c67c18] transition text-[13px]">
                      Place Bet
                    </button>
                    <button className="mt-3 h-12 w-full rounded-lg bg-[#313F55] font-bold hover:bg-[#3b4b63] transition text-[13px]">
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : selectedBet ? (
            <div className="text-sm text-gray-300 font-medium">
              <div className="flex flex-col w-full transition-all duration-200">
                <div className="text-left mb-4">
                  <h3 className="text-accent-blue font-bold text-base tracking-wide">
                    Bangladesh
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5 font-medium lowercase first-letter:uppercase">
                    match odds Zimbabwe v Bangladesh
                  </p>
                  <p className="text-white font-bold text-xl mt-1.5">10</p>
                </div>

                <div className="h-[1px] bg-body-level-7 w-full mb-4" />

                <div className="grid grid-cols-4 gap-3 mb-5">
                  {quickBetAmounts.map((amount, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="bg-[#1c2a38] hover:bg-[#243648] text-gray-200 font-bold py-2.5 rounded-full text-center text-sm transition-colors cursor-pointer"
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                <div className="h-[1px] bg-body-level-7 w-full mb-4" />

                {/* Input Stake Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <label className="text-sm font-semibold text-gray-400">
                    Stake
                  </label>
                  <input
                    type="number"
                    defaultValue="100"
                    className="w-[80%] h-11 rounded-lg border border-[#1e2f42] bg-[#09111a] px-4 text-white text-right font-bold outline-none focus:border-accent-blue"
                  />
                </div>

                <div className="flex items-center justify-between bg-[#121924] px-4 py-3 rounded-md mb-5 w-full">
                  <span className="text-xs text-gray-400 font-medium">
                    Total Stake
                  </span>
                  <span className="text-sm font-bold text-white">100</span>
                </div>

                <div className="flex flex-col gap-2.5 w-full">
                  <button
                    type="button"
                    className="h-12 w-full rounded-xl bg-accent-blue hover:bg-[#e07f00] text-white font-medium uppercase tracking-wider transition text-[13px]"
                  >
                    PLACE BET
                  </button>
                  <button
                    type="button"
                    className="h-12 w-full rounded-xl bg-[#202b36] hover:bg-[#2a3847] text-gray-200 font-bold transition text-[14px]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 w-full">
              <p className="text-sm text-gray-300 leading-normal font-medium">
                QuickBet mode is on! After single click on any selection, it
                will place your bet immediately.
              </p>

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
