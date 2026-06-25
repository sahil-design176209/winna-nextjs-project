"use client";

import { X, Gift } from "lucide-react";

interface BonusListModalProps {
  onClose: () => void;
}

export default function BonusListModal({
  onClose,
}: BonusListModalProps) {
  return (
    <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Gift className="h-8 w-8 text-white" />

          <h2 className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-white">
            Bonus List
          </h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex h-[280px] items-center justify-center rounded-[8px] bg-body-level-8">
        <p className="text-[18px] text-white">
          No records to display
        </p></div>
    </div>

  );
}