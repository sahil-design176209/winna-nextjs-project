"use client";

import { X } from "lucide-react";

interface StatisticsModalProps {
  onClose: () => void;
}

export default function StatisticsModal({
  onClose,
}: StatisticsModalProps) {
  const stats = [
    {
      title: "Bets",
      value: "0",
      color: "text-white",
    },
    {
      title: "Wins",
      value: "0",
      color: "text-white",
    },
    {
      title: "Today Profit",
      value: "INR 0.00",
      color: "text-[#ff8a00]",
    },
    {
      title: "Sport Profit",
      value: "INR 0.00",
      color: "text-[#1ee26b]",
    },
    {
      title: "Casino Profit",
      value: "INR 0.00",
      color: "text-[#1ee26b]",
    },
    {
      title: "Total Deposit",
      value: "INR 0.00",
      color: "text-[#ff8a00]",
    },
    {
      title: "Bonus Subscription",
      value: "Signup Bonus",
      color: "text-[#ffd54a]",
    },
  ];

  return (
  
      
  <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">

        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-[24px] font-semibold text-white">
            📊 Statistics
          </h2>

         <button
            onClick={onClose}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
          >
            <X size={20} />
          </button>
        </div>

    
        <div className="mb-3 flex items-center gap-4">
          <div className="text-[32px] font-bold text-typography-secondary">W</div>

          <div>
            <h3 className="font-bold text-[14px] text-white">bbbuser01</h3>

            <p className="text-[12px] text-[#8fb6c4] ">
              Joined Jun 9, 2026
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-3 flex h-[44px] items-center rounded-[8px] text-[14px] bg-body-level-8 py-2.5 px-3 font-semibold text-white">
          All time
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-body-level-8 p-3"
            >
              <p className="mb-1 text-[12px] text-typography-secondary">
                {item.title}
              </p>

              <h3
                className={`text-[18px] font-bold ${item.color}`}
              >
                {item.value}
              </h3>
            </div>
          ))}
        </div>
   
    </div>
  );
}