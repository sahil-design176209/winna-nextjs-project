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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-[760px] rounded-2xl border border-[#0e2534] bg-[#02131d] p-5">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-[22px] font-semibold text-white">
            📊 Statistics
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2c3d58] text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Info */}
        <div className="mb-8 flex items-center gap-4">
          <div className="text-4xl font-bold text-gray-500">W</div>

          <div>
            <h3 className="font-semibold text-white">bbbuser01</h3>

            <p className="text-sm text-[#62b3ff]">
              Joined Jun 9, 2026
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-5 flex h-[42px] items-center rounded-xl bg-[#2c3d58] px-4 font-semibold text-white">
          All time
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#2c3d58] p-4"
            >
              <p className="mb-1 text-[15px] text-[#93a7bb]">
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
    </div>
  );
}