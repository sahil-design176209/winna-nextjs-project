import React from "react";
import Image from "next/image";
import trophy from "../../public/images/trophy.webp";
import promo from "../../public/images/board.webp";
import crown from "../../public/images/crown-blue.webp";

export default function PromotionsDropdown() {
  return (
    <div className="absolute right-0 top-full mt-5  w-[400px] rounded-xl bg-profile-model-bg p-3 shadow-xl ">
      <div className="grid grid-cols-2 gap-2">
        {/* Daily Race */}
        <div className="flex items-center gap-3 bg-body-level-0 p-[8px] rounded-lg cursor-pointer transition">
          {/* Image Placeholder */}
          <div className="w-12 h-12 flex-shrink-0  rounded-md flex items-center justify-center text-xl">
            <Image src={trophy} alt="trophy" />
          </div>
          <div>
            <div className="text-white font-medium text-[14px] tracking-wide">
              Daily Race
            </div>
            <div className="text-slate-400 text-xs mt-0.5">$10,000</div>
          </div>
        </div>

        {/* Weekly Race */}
        <div className="flex items-center gap-3 bg-body-level-0 p-[8px] rounded-lg cursor-pointer transition">
          {/* Image Placeholder */}
          <div className="w-12 h-12 flex-shrink-0  rounded-md flex items-center justify-center text-xl">
            <Image src={crown} alt="crown" />
          </div>
          <div>
            <div className="text-white font-medium text-[14px] tracking-wide">
              Weekly Race
            </div>
            <div className="text-slate-400 text-xs mt-0.5">$50,000</div>
          </div>
        </div>

        {/* Challenges */}
        <div className="flex items-center gap-3 bg-body-level-0 p-[8px] rounded-lg cursor-pointer transition">
          {/* Image Placeholder */}
          <div className="w-12 h-12 flex-shrink-0  rounded-md flex items-center justify-center text-xl">
            <Image src={promo} alt="promo" />
          </div>
          <div>
            <div className="text-white font-medium text-[14px] tracking-wide">
              Challenges
            </div>
            <div className="text-xs mt-0.5">
              <span className="text-accent-blue font-bold">15</span>{" "}
              <span className="text-slate-400">available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
