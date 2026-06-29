"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface SportItem {
  title: string;
  count: number;
}

export default function SportsDropdown() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const sports: SportItem[] = [
    { title: "Cricket", count: 10 },
    { title: "Tennis", count: 10 },
    { title: "Football", count: 4 },
    { title: "Greyhound Racing", count: 0 },
    { title: "Horse Racing", count: 0 },
    { title: "Cricket Casino", count: 0 },
    { title: "Election", count: 0 },
  ];

  return (
    <div className="  w-[32px] h-[56px] rounded-[8px] flex items-center justify-center bg-body-level-9 overflow-hidden realtive ">
      {/* Header */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[32px] h-[56px] rounded-[8px] flex items-center justify-center bg-body-level-9 relative"
      >
       
           <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
  
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              <path
                fillRule="evenodd"
                    fill={isOpen ? "#fff" : "#ffffff80"}
                clipRule="evenodd"
                d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
              />
            </svg>
      </button>

      {/* dropdown here */}


      {isOpen && (
        <div
          className="absolute top-[12.5%] left-[15.5%] z-50
    w-[320px]
    rounded-[14px]
   bg-body-level-7
    shadow-lg"
        >
          <div className="py-3">
            {sports.map((item) => (
              <div
                key={item.title}
                onClick={() => {
                  setSelectedSport(item.title);
                  setIsOpen(false);
                }}
                className="flex items-center justify-between px-5 py-4  cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-white">⚽</div>

                  <span className="text-white font-medium">
                    {item.title}
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-body-level-9 text-xs text-white">
                    {item.count}
                  </span>
                </div>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="#ffffff80" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.2849 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"></path></svg>

              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}