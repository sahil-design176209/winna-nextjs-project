"use client";

import { useState } from "react";
import { X, ArrowLeftRight } from "lucide-react";

interface OpenbetModelProps {
  onClose: () => void;
}

export default function OpenbetModal({
  onClose,
}:OpenbetModelProps) {
  const [activeTab, setActiveTab] = useState("withdrawal");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-[760px] rounded-2xl border border-[#0e2534] bg-[#02131d] p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[22px] font-semibold text-white">
            💰Openbet
          </h2>

          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2c3d58] text-white"
          >
            <X size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}