"use client";

import { useState } from "react";
import { X, User, Eye } from "lucide-react";

interface UserProfileModalProps {
  onClose: () => void;
}

export default function UserProfileModal({
  onClose,
}: UserProfileModalProps) {
  const [activeTab, setActiveTab] = useState("details");

  const profileFields = [
    { label: "Username", value: "bbbuser01" },
    { label: "Name", value: "bbbuser01" },
    { label: "Mobile Number", value: "8765416516" },
    { label: "User Type", value: "Bronze" },
    { label: "Currency", value: "INR" },
    { label: "Signup Date", value: "Jun 9, 2026" },
  ];

  return (
    <div className="w-full max-w-[718px] mx-auto bg-profile-model-bg border border-profile-model-bg rounded-2xl p-4 md:p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 md:gap-3 text-white text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
          <User size={24} />
          User Profile
        </h2>

        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-body-level-8 text-white"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <button
          onClick={() => setActiveTab("details")}
          className={`h-[40px] px-8 rounded-[8px] border text-[14px] transition-all ${activeTab === "details"
            ? "bg-body-level-8 border-body-level-8 text-accent-blue"
            : "border-body-level-9 text-typography-secondary"
            }`}
        >
          Details
        </button>

        <button
          onClick={() => setActiveTab("edit")}
          className={`h-[40px] px-8 rounded-[8px] border text-[14px] transition-all ${activeTab === "edit"
            ? "bg-body-level-8 border-[#2c3d58] text-accent-blue"
            : "border-body-level-9 text-typography-secondary"
            }`}
        >
          Edit Name
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`h-[40px] px-8 rounded-[8px] border text-[14px] transition-all ${activeTab === "password"
            ? "bg-body-level-8-[#2c3d58] border-[#2c3d58] text-accent-blue"
            : "border-body-level-9 text-typography-secondary"
            }`}
        >
          Change Password
        </button>
      </div>

      {/* Details Tab */}
      {activeTab === "details" && (
        <div className="bg-body-level-7 rounded-xl p-5">
          <h3 className="text-white text-[20px] font-semibold mb-5">
            Personal Data
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {profileFields.map(({ label, value }) => (
              <div key={label}>
                <label className="block text-[#9db1c5] mb-1 text-[14px]">
                  {label}
                </label>

                <div className="bg-[#02131d] border border-[#0c3045] text-[14px] h-[40px] rounded-[8px] px-4 py-3 text-white font-semibold">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit Name Tab */}
      {activeTab === "edit" && (
        <div className="bg-body-level-7 rounded-xl p-5">
          <h3 className="text-white text-[20px] font-semibold mb-5">
            Edit Name
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-[#9db1c5] mb-2 text-[14px]">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full h-[40px] bg-[#02131d] border border-[#0c3045] rounded-lg px-4 text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-[#9db1c5] mb-2 text-[14px]">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full h-[40px] bg-[#02131d] border border-[#0c3045] rounded-lg px-4 text-white outline-none"
              />
            </div>
          </div>

          <button className="w-full h-[40px] rounded-[8px]  text-[14px]  bg-accent-blue text-white font-semibold">
            Save Details
          </button>
        </div>
      )}

      {/* Password Tab */}
      <div className="max-h-[320px] overflow-y-auto scrollbar-hide pr-1">
        {activeTab === "password" && (
          <div className="bg-body-level-7 rounded-xl p-5">e
            <h3 className="text-white text-[20px] font-semibold mb-6">
              Change Password
            </h3>

            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-[#9db1c5] mb-2  text-[14px] ">
                  Old Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter old password"
                    className="w-full h-[40px] bg-[#02131d] border text-[14px]  border-[#0c3045] rounded-[8px] px-4 pr-10 text-white outline-none"
                  />
                  <Eye
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9db1c5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#9db1c5] mb-2  text-[14px]">
                  New Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full h-[40px]  text-[14px] bg-[#02131d] border border-[#0c3045] rounded-[8px] px-4 pr-10 text-white outline-none"
                  />
                  <Eye
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9db1c5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#9db1c5] mb-2  text-[14px]">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="w-full h-[40px]  text-[14px] bg-[#02131d] border border-[#0c3045] rounded-[8px] px-4 pr-10 text-white outline-none"
                  />
                  <Eye
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9db1c5]"
                  />
                </div>
              </div>
            </div>

            <button className="w-full h-[40px]  text-[14px] rounded-[8px] bg-accent-blue text-white font-semibold">
              Reset Password
            </button>
          </div>
        )}
      </div></div>
  );
}