"use client";

import { useState } from "react";
import { X, ReceiptText } from "lucide-react";

interface TransactionModalProps {
  onClose: () => void;
}

export default function TransactionModal({
  onClose,
}: TransactionModalProps) {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("2026-06-24");
  const [toDate, setToDate] = useState("2026-06-24");

  return (
  
    <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">
        <div className="mb-10 flex items-center justify-between">
       <div className="flex items-center justify-between mb-3">
            <ReceiptText className="h-7 w-7 text-white me-2" />

            <h2 className="text-[24px] font-semibold text-white">
              Transaction History
            </h2>
          </div>

         <button
            onClick={onClose}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
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
          <div className="ml-auto flex items-center gap-3">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-[36px] w-[100px] rounded-[8px]  text-[14px] border-none bg-body-level-8 px-4 text-white outline-none"
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
          </p></div>
      </div>
  
  );
}