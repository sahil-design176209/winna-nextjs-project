"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface EditstakeModalProps {
  onClose: () => void;
}

export default function EditstakeModal({
  onClose,
}: EditstakeModalProps) {
  const [stakes, setStakes] = useState([
    { label: "100", amount: "100" },
    { label: "180", amount: "180" },
    { label: "200", amount: "200" },
    { label: "3000", amount: "300" },
    { label: "500", amount: "500" },
    { label: "1000", amount: "1000" },
    { label: "20000", amount: "20000" },
    { label: "50000", amount: "50000" },
    { label: "100000", amount: "100000" },
  ]);

  const handleChange = (
    index: number,
    field: "label" | "amount",
    value: string
  ) => {
    const updated = [...stakes];
    updated[index][field] = value;
    setStakes(updated);
  };

  return (

    <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[24px] font-semibold text-white">
          Change Stake Button
        </h2>

        <button
          onClick={onClose}
          className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
        >
          <X size={20} />
        </button>
      </div>

      <div className="max-h-[320px] overflow-y-auto scrollbar-hide pr-1">
        <div className="mb-4 sticky top-0 bg-profile-model-bg grid grid-cols-2 gap-3 py-2">
          <h3 className="pl-1 text-[16px] font-medium text-white">
            Label
          </h3>

          <h3 className="pl-1 text-[16px] font-medium text-white">
            Amount
          </h3>
        </div>

        <div className="space-y-3">
          {stakes.map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-3">
              <input
                type="text"
                value={item.label}
                onChange={(e) =>
                  handleChange(index, "label", e.target.value)
                }
                className="h-[40px] rounded-[8px] px-4 border border-[#304564] bg-[#031018] text-[14px] text-white outline-none"
              />

              <input
                type="text"
                value={item.amount}
                onChange={(e) =>
                  handleChange(index, "amount", e.target.value)
                }
                className="h-[40px] rounded-[8px] px-4 border border-[#304564] bg-[#031018] text-[14px] text-white outline-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 h-[40px] w-full rounded-[8px] bg-accent-blue text-[14px] font-medium text-white transition hover:bg-accent-blue">
        Update
      </button>

    </div>
  );
}