"use client";

import { useState } from "react";
import { X, Tag, Filter, ChevronDown } from "lucide-react";

interface OpenbetModalProps {
  onClose: () => void;
}

export default function OpenbetModal({
  onClose,
}: OpenbetModalProps) {
  const [showFilters, setShowFilters] = useState(true);

  const [sport, setSport] = useState("All");
  const [tournament, setTournament] = useState("All");
  const [match, setMatch] = useState("All");
  const [betType, setBetType] = useState("All");

  const [fromDate, setFromDate] = useState("2026-06-24");
  const [toDate, setToDate] = useState("2026-06-24");

  return (
   <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Tag className="h-7 w-7 text-white" />

          <h2 className="text-[24px] font-semibold text-white">
            Open Bets
          </h2>
        </div>

        <button
          onClick={onClose}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Filter Toggle */}
      <div className="mb-8 flex justify-end">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-lg font-medium text-white"
        >
          <Filter size={18} fill="currentColor" />

          <span>Filters</span>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${showFilters ? "rotate-180" : ""
              }`}
          />
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Sports */}
            <div>
              <label className="mb-3 block text-[14px} text-typography-secondary">
                Sports
              </label>

              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="h-[40px] w-full rounded-[8px] border border-[#30435f] bg-[#02131d] px-2 text-white outline-none"
              >
                <option value="All">All</option>
                <option value="Cricket">Cricket</option>
                <option value="Football">Football</option>
                <option value="Tennis">Tennis</option>
                <option value="Casino">Casino</option>
              </select>
            </div>

            {/* Tournament */}
            <div>
              <label className="mb-3 block text-[14px} text-typography-secondary">
                Tournaments
              </label>

              <select
                value={tournament}
                onChange={(e) => setTournament(e.target.value)}
                className="h-[40px] w-full rounded-[8px] border border-[#30435f] bg-[#02131d] px-2 text-white outline-none"
              >
                <option value="All">All</option>
                <option value="IPL">IPL</option>
                <option value="World Cup">World Cup</option>
                <option value="Champions Trophy">
                  Champions Trophy
                </option>
              </select>
            </div>

            {/* Matches */}
            <div>
              <label className="mb-3 block text-[14px} text-typography-secondary">
                Matches
              </label>

              <select
                value={match}
                onChange={(e) => setMatch(e.target.value)}
                className="h-[40px] w-full rounded-[8px] border border-[#30435f] bg-[#02131d] px-2 text-white outline-none"
              >
                <option value="All" >All</option>
                <option value="India vs Australia">
                  India vs Australia
                </option>
                <option value="England vs Pakistan">
                  England vs Pakistan
                </option>
                <option value="South Africa vs NZ">
                  South Africa vs NZ
                </option>
              </select>
            </div>

            {/* Bet Type */}
            <div>
              <label className="mb-3 block text-[14px} text-typography-secondary">
                Bets Type
              </label>

              <select
                value={betType}
                onChange={(e) => setBetType(e.target.value)}
                className="h-[40px] w-full rounded-[8px] border border-[#30435f] bg-[#02131d] px-2  text-white outline-none"
              >
                <option value="All">All</option>
                <option value="Back">Back</option>
                <option value="Lay">Lay</option>
                <option value="Fancy">Fancy</option>
                <option value="Bookmaker">Bookmaker</option>
              </select>
            </div>
          </div>

          {/* Dates */}
          <div className="mb-8 flex flex-wrap gap-8">
            <div>
              <label className="mb-3 block text-[14px} text-typography-secondary">
                From Date
              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="h-[40px] w-[180px] rounded-[8px] border border-[#30435f] bg-[#02131d] px-2 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-3 block text-[14px} text-typography-secondary">
                To Date
              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="h-[40px] w-[180px] rounded-[8px] border border-[#30435f] bg-[#02131d] px-2 text-white outline-none"
              />
            </div>
          </div>
        </>
      )}

      <div className="flex h-[280px] items-center justify-center rounded-[8px] bg-body-level-8">
          <p className="text-[18px] text-white">
            No records to display
          </p></div>
    </div>

  );
}