"use client";

import { useState } from "react";
import { X, User, Eye } from "lucide-react";

export default function UserProfileModal() {
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
    <div className="max-w-4xl mx-auto bg-[#03131d] border border-[#0f2433] rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="flex items-center gap-3 text-white text-[22px] font-semibold">
          <User size={22} />
          User Profile
        </h2>

        <button className="w-10 h-10 rounded-lg bg-[#28384f] flex items-center justify-center text-white">
          <X size={20} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <button
          onClick={() => setActiveTab("details")}
          className={`h-11 px-8 rounded-lg border transition-all ${
            activeTab === "details"
              ? "bg-[#2c3d58] border-[#2c3d58] text-[#ff9800]"
              : "border-[#1a3950] text-[#9eb2c5]"
          }`}
        >
          Details
        </button>

        <button
          onClick={() => setActiveTab("edit")}
          className={`h-11 px-8 rounded-lg border transition-all ${
            activeTab === "edit"
              ? "bg-[#2c3d58] border-[#2c3d58] text-[#ff9800]"
              : "border-[#1a3950] text-[#9eb2c5]"
          }`}
        >
          Edit Name
        </button>

        <button
          onClick={() => setActiveTab("password")}
          className={`h-11 px-8 rounded-lg border transition-all ${
            activeTab === "password"
              ? "bg-[#2c3d58] border-[#2c3d58] text-[#ff9800]"
              : "border-[#1a3950] text-[#9eb2c5]"
          }`}
        >
          Change Password
        </button>
      </div>

      {/* Details Tab */}
      {activeTab === "details" && (
        <div className="bg-[#2c3d58] rounded-xl p-6">
          <h3 className="text-white text-[20px] font-semibold mb-6">
            Personal Data
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {profileFields.map(({ label, value }) => (
              <div key={label}>
                <label className="block text-[#9db1c5] mb-2">
                  {label}
                </label>

                <div className="bg-[#02131d] border border-[#0c3045] rounded-lg px-4 py-3 text-white font-semibold">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit Name Tab */}
      {activeTab === "edit" && (
        <div className="bg-[#2c3d58] rounded-xl p-6">
          <h3 className="text-white text-[20px] font-semibold mb-6">
            Edit Name
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-[#9db1c5] mb-2">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full h-12 bg-[#02131d] border border-[#0c3045] rounded-lg px-4 text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-[#9db1c5] mb-2">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full h-12 bg-[#02131d] border border-[#0c3045] rounded-lg px-4 text-white outline-none"
              />
            </div>
          </div>

          <button className="w-full h-12 rounded-lg bg-[#f68b00] text-white font-semibold">
            Save Details
          </button>
        </div>
      )}

      {/* Password Tab */}
      {activeTab === "password" && (
        <div className="bg-[#2c3d58] rounded-xl p-6">
          <h3 className="text-white text-[20px] font-semibold mb-6">
            Change Password
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="block text-[#9db1c5] mb-2">
                Old Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter old password"
                  className="w-full h-12 bg-[#02131d] border border-[#0c3045] rounded-lg px-4 pr-10 text-white outline-none"
                />
                <Eye
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9db1c5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#9db1c5] mb-2">
                New Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full h-12 bg-[#02131d] border border-[#0c3045] rounded-lg px-4 pr-10 text-white outline-none"
                />
                <Eye
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9db1c5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#9db1c5] mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full h-12 bg-[#02131d] border border-[#0c3045] rounded-lg px-4 pr-10 text-white outline-none"
                />
                <Eye
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9db1c5]"
                />
              </div>
            </div>
          </div>

          <button className="w-full h-12 rounded-lg bg-[#f68b00] text-white font-semibold">
            Reset Password
          </button>
        </div>
      )}
    </div>
  );
}