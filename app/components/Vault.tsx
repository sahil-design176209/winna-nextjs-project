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
   <div className="w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-5">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[24px] font-semibold text-white">
            💰 Vault
          </h2>

          <button
            onClick={onClose}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-5 flex gap-3">
          <button
            onClick={() => setActiveTab("deposit")}
            className={`h-[40px] px-8 rounded-[8px] border px-6 text-[18px] font-medium transition-all
              ${
                activeTab === "deposit"
                  ? "bg-body-level-8 border-body-level-8 text-accent-blue"
                  : "border-body-level-9   text-typography-secondary"
              }`}
          >
            Deposit
          </button>

          <button
            onClick={() => setActiveTab("withdrawal")}
            className={`h-[40px] rounded-xl border px-6 text-[18px] font-medium transition-all
              ${
                activeTab === "withdrawal"
                  ? "bg-body-level-8 border-body-level-8 text-accent-blue"
                   : "border-body-level-9   text-typography-secondary"
              }`}
          >
            Withdrawal
          </button>
        </div>

        {/* Wallet Header */}
        <div className="mb-5 rounded-xl bg-body-level-8 py-3 px-3.5 text-[14px]">
          <h3 className="font-semibold text-white">Wallet</h3>
        </div>

        {/* Wallet Card */}
        <div className="rounded-xl bg-body-level-8 p-3">
          <div className="mb-4 flex items-start justify-between">
            <h3 className="text-xl font-semibold text-white text-[15px]">
              Wallet
            </h3>

            <p className="text-typography-secondary text-[13px]">
              Available:{" "}
              <span className="font-semibold text-white">
                INR 8517.20
              </span>
            </p>
          </div>

          <div className="mb-4 text-[36px] font-bold text-white">
            INR 10007.20
          </div>

          <p className="text-typography-secondary text-[13px]">
            Exposure:{" "}
            <span className="font-semibold text-white">
              INR 1490.00
            </span>
          </p>
        </div>

        {/* Transfer Icon */}
        <div className="my-3 flex justify-center">
          <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-body-level-8 text-white">
            <ArrowLeftRight size={16} />
          </button>
        </div>

        {/* Dynamic Section */}
        <div className="rounded-xl bg-body-level-8 p-3">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-white">
              {activeTab === "deposit"
                ? "Deposit"
                : "Withdrawal"}
            </h3>

            <p className="text-typography-secondary text-[13px]">
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

  );
}