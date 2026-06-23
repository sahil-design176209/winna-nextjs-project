"use client";

import { useState } from "react";
import { X, ArrowLeftRight } from "lucide-react";

interface ValutModalProps {
  onClose: () => void;
}

export default function ValutModal({
  onClose,
}: ValutModalProps) {
  const [activeTab, setActiveTab] = useState("withdrawal");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-[760px] rounded-2xl border border-[#0e2534] bg-[#02131d] p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[22px] font-semibold text-white">
            💰 Vault
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2c3d58] text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-5 flex gap-3">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`h-12 rounded-xl border px-6 text-[18px] font-medium transition-all
              ${
                activeTab === "deposit"
                  ? "bg-[#2c3d58] border-[#2c3d58] text-white"
                  : "border-[#23415a] text-[#9db3c8]"
              }`}
          >
            Deposit
          </button>

          <button
            onClick={() => setActiveTab("withdrawal")}
            className={`h-12 rounded-xl border px-6 text-[18px] font-medium transition-all
              ${
                activeTab === "withdrawal"
                  ? "bg-[#2c3d58] border-[#2c3d58] text-[#ff8a00]"
                  : "border-[#23415a] text-[#9db3c8]"
              }`}
          >
            Withdrawal
          </button>
        </div>

        {/* Wallet Header */}
        <div className="mb-5 rounded-xl bg-[#2c3d58] p-4">
          <h3 className="font-semibold text-white">Wallet</h3>
        </div>

        {/* Wallet Card */}
        <div className="rounded-xl bg-[#2c3d58] p-5">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-white">
              Wallet
            </h3>

            <p className="text-[#9db3c8]">
              Available:{" "}
              <span className="font-semibold text-white">
                INR 8517.20
              </span>
            </p>
          </div>

          <div className="mb-4 text-[52px] font-bold text-white">
            INR 10007.20
          </div>

          <p className="text-[#9db3c8]">
            Exposure:{" "}
            <span className="font-semibold text-white">
              INR 1490.00
            </span>
          </p>
        </div>

        {/* Transfer Icon */}
        <div className="my-4 flex justify-center">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0d2c40] text-white">
            <ArrowLeftRight size={18} />
          </button>
        </div>

        {/* Dynamic Section */}
        <div className="rounded-xl bg-[#2c3d58] p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">
              {activeTab === "deposit"
                ? "Deposit"
                : "Withdrawal"}
            </h3>

            <p className="text-[#9db3c8]">
              {activeTab === "deposit" ? (
                <>
                  Available:{" "}
                  <span className="font-semibold text-white">
                    INR 8517.20
                  </span>
                </>
              ) : (
                <>
                  Balance:{" "}
                  <span className="font-semibold text-white">
                    INR 0.00
                  </span>
                </>
              )}
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}