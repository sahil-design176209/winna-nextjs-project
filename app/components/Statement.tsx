"use client";

import { X, FileText } from "lucide-react";
import { useState } from "react";

interface StatementModalProps {
  onClose: () => void;
}

export default function StatementModal({
  onClose,
}: StatementModalProps) {
  const [fromDate, setFromDate] = useState("2026-06-24");
  const [toDate, setToDate] = useState("2026-06-24");
  const [search, setSearch] = useState("");

  return (

    <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-7 w-7 text-white" />

          <h2 className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
            Account Statement
          </h2>
        </div>


        <button
          onClick={onClose}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
        >
          <X size={20} />
        </button>
      </div>


      <div className="mb-6 flex flex-col md:flex-row md:flex-wrap gap-4 items-start">
        {/* From Date */}
        <div className="flex items-center gap-3">
          <label className="text-[13px] text-typography-secondary">
            From Date
          </label>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="h-[36px] w-[140px] rounded-[8px] text-[14px] border-none bg-body-level-8 px-2 text-white outline-none"
          />
        </div>

        {/* To Date */}
        <div className="flex items-center gap-3">
          <label className="text-[13px] text-typography-secondary">
            To Date
          </label>

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="h-[36px] w-[140px] rounded-[8px]  text-[14px] border-none bg-body-level-8 px-2 text-white outline-none"

          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 md:ml-auto w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-[36px] w-[100%] md:w-[100px] rounded-[8px] bg-body-level-8 px-4 text-white outline-none"
          />

          <button className="h-[36px] w-[88px]  flex   justify-center items-center  rounded-[8px] text-[14px] bg-accent-blue px-7 text-lg font-medium text-white hover:bg-accent-blue">
            Search
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex h-[280px] items-center justify-center rounded-[8px] bg-body-level-8">
        <p className="text-[18px] text-white">
          No records to display
        </p>
      </div>
    </div>

  );
}