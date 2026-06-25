"use client";

import { X, Shield } from "lucide-react";

interface WithdrawalModalProps {
  onClose: () => void;
}

export default function WithdrawalModal({
  onClose,
}: WithdrawalModalProps) {
  return (
    
<div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-3 sm:p-4 md:p-5">    {/* Header */}
       <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Shield className="h-7 w-7 text-white" />

            <h2 className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
              Withdraw
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex h-[32px] w-[32px] items-center justify-center rounded-[8px] bg-body-level-8 text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Container */}
        <div className="rounded-xl bg-body-level-8 p-4 md:p-5 mt-[24px]">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Phone Number */}
            <div>
              <label className="mb-3 block text-[14px] font-medium text-typography-secondary">
                Phone Number *
              </label>

             <input
                type="text"
                className="h-[36px] w-full rounded-[8px] border border-[#243a56] bg-[#020d14] px-4 text-white outline-none"
              />
            </div>

            {/* Bank Account */}
            <div>
              <label className="mb-3 block text-[14px] font-medium text-typography-secondary">
                Bank Account No*
              </label>

              <input
                type="text"
                className="h-[36px] w-full rounded-[8px] border border-[#243a56] bg-[#020d14] px-4 text-white outline-none"
              />
            </div>

            {/* Swift */}
            <div>
              <label className="mb-3 block text-[14px] font-medium text-typography-secondary">
                SWIFT Code*
              </label>

             <input
                type="text"
                className="h-[36px] w-full rounded-[8px] border border-[#243a56] bg-[#020d14] px-4 text-white outline-none"
              />
            </div>

            {/* Account Holder */}
            <div>
              <label className="mb-3 block text-[14px] font-medium text-typography-secondary">
                Account Holder Name*
              </label>

             <input
                type="text"
                className="h-[36px] w-full rounded-[8px] border border-[#243a56] bg-[#020d14] px-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-end">
            <button className="h-[40px] rounded-[8px] bg-accent-blue px-8 text-[14px] font-semibold text-white hover:bg-accent-blue">
              Add Bank
            </button>
          </div>
        </div>

        {/* Note */}
        <div className="mt-4  text-[12px] leading-7 text-[#aeb8c0]">
          <span className="font-bold text-white">NOTE</span> – Due to higher
          failure rate we do not allow withdrawals on the below mentioned
          banks.
          <br />
          Garmin Bank, Jio payment Bank (JIOP), Airtel payment Bank (AIRP),
          Jammu Kashmir Bank (JAKA), Indian post payment Bank (IPOS), Uco bank
          (UCBA).
        </div>
      </div>

  );
}