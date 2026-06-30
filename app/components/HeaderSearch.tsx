"use client";

import React, { useState, useRef, useEffect } from "react";
import { ThemeIcons } from "./SvgIcons";
import { useRouter } from 'next/navigation';
const providers = [
  "3 Oaks Gaming",
  "7rings",
  "Ace Roll",
  "Amusnet",
  "Avatar UX",
  "Aviatrix",
];
import { Search, ChevronDown, ArrowLeft } from "lucide-react";

const HeaderSearch = ({
  isOpen: isModalOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  // --- 1. React Hooks (Must be defined at the very top) ---
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
   const [search, setSearch] = useState(""); const router = useRouter();
  const [showProvider, setShowProvider] = useState(false);
  const providersRef = React.useRef<HTMLDivElement>(null);
    const [showSort, setShowSort] = useState(false);
  const [isProvidersOpen, setIsProvidersOpen] = React.useState(false);
  const [selectedProviders, setSelectedProviders] = React.useState<string[]>(
    [],
  );

  // Close dropdowns if clicking outside of them
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
      if (
        providersRef.current &&
        !providersRef.current.contains(event.target as Node)
      ) {
        setIsProvidersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- 2. Conditional Return ---
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9999 bg-[#01090e]/80 backdrop-blur-sm lg:top-[0px] lg:bg-[#01090e]/80 lg:backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="absolute left-0 top-0 overscroll-none rounded-xl text-white outline-none mobile-landscape:max-h-[calc(100%-1rem)] lg:relative lg:h-auto lg:w-full m-0 my-0 h-full max-h-full w-full grow border-0 bg-transparent"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="m-0 flex h-full w-full flex-col max-w-[1240px] mx-auto px-4 lg:px-6">
          <header className="flex h-[72px] items-center justify-between gap-1 bg-body-level-2 px-[20px] py-[16px] lg:hidden">
            <h4 className="text-18 font-medium text-white">Search</h4>
            <button
              onClick={onClose}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-body-level-4 lg:flex"
            >
              <ThemeIcons.CrossIcon />
            </button>
          </header>

          <div className="flex w-full items-center justify-between gap-4 py-2 lg:py-2">
            <div className="flex w-full flex-col gap-[8px] lg:flex-row lg:items-center lg:justify-between lg:gap-3">
              <div className="flex w-full items-center grow">
                <div className="flex items-center border border-transparent rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:border-[#203B48] h-11 pl-3 pr-0.5 w-full bg-body-level-2 focus-within:border-accent-blue focus-within:bg-[#041118]">
                  <span className="mr-2 flex h-5 w-5 items-center justify-center text-typography-secondary">
                    <ThemeIcons.SearchIcon />
                  </span>
                  <input
                    className="flex h-full bg-transparent placeholder:text-typography-grey focus:outline-none text-14 caret-white w-full text-white"
                    placeholder="Search Game"
                    defaultValue=""
                    autoFocus
                  />
                </div>
                <button className="ml-[8px] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[8px] bg-body-level-3 text-typography-secondary lg:hidden">
                  <ThemeIcons.BarsIcon />
                </button>
              </div>

              <div className="min-w-full gap-2 lg:flex lg:w-max lg:min-w-max lg:items-center hidden">
              <div className="relative hidden lg:block">
            <button
              onClick={() => setShowSort(!showSort)}
              className="h-10 min-w-[220px] px-4 rounded-xl bg-body-level-8 hover:bg-hover-color  flex items-center justify-between "
            >
              <span className="text-typography-secondary hover:text-typography-primary  text-[16px] ">  Sort by: Popular</span>

              <svg
                className={`w-[18px] h-[18px] transition-transform duration-300 ${showSort ? "rotate-180" : ""
                  }`}
                viewBox="0 0 18 18"
                fill="#567484"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.873 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                />
              </svg>      </button>

            {showSort && (
              <div className="absolute top-12 left-0 w-full rounded-xl bg-body-level-8 p-3 z-50">
                <div className="py-2 font-semibold hover:text-typography-primary  text-[14px]">Popular

                </div>
                <div className="py-2 text-typography-secondary hover:text-typography-primary  text-[14px]">
                  A-Z (alphabetically)
                </div>
                <div className="py-2 text-typography-secondary hover:text-typography-primary  text-[14px]">
                  Z-A (alphabetically)
                </div>
                <div className="py-2 text-typography-secondary  hover:text-typography-primary  text-[14px]">Recently Added</div>
              </div>
            )}
          </div>


          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowProvider(!showProvider)}
              className="h-10 min-w-[220px] px-4 rounded-xl bg-body-level-8  hover:bg-hover-color flex items-center justify-between text-typography-secondary-300"
            >
              <span className="text-typography-secondary hover:text-typography-primary  text-[16px]"> All providers</span>
              <svg
                className={`w-[18px] h-[18px] transition-transform duration-300 ${showProvider ? "rotate-180" : ""
                  }`}
                viewBox="0 0 18 18"
                fill="#567484"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14516 7.96L8.42815 12.76C8.71384 13.08 9.28522 13.08 9.57091 12.76L13.8563 7.9598C14.2086 7.5644 13.873 7 13.2849 7L4.71654 7C4.12611 7 3.79043 7.5644 4.14516 7.96Z"
                />
              </svg>    </button>

            {showProvider && (
              <div className="absolute top-12 left-0 w-full rounded-xl bg-body-level-8 p-3 z-50">
                <div className="flex-1 relative items-center">
                  <Search
                    size={20}
                    className="absolute left-3 top-5 -translate-y-1/2 text-typography-secondary "
                  />


                  <input
                    placeholder="Search..."
                    className="w-full h-10 rounded-lg ps-10 bg-body-level-9 px-3 outline-none mb-3  text-[14px]"
                  />

                </div>
                <div className="max-h-72 overflow-y-auto">
                  {providers.map((provider) => (
                    <label
                      key={provider}
                      className="flex items-center gap-3 p-2 text-typography-secondary "
                    >
                      <input type="checkbox" />
                      <span className="hover:text-typography-primary  text-[14px]"> {provider}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
               
              </div>
            </div>

            <button
              onClick={onClose}
              className="hidden h-[44px] w-[44px] close-search shrink-0 items-center justify-center rounded-[8px] bg-body-level-2 lg:flex text-typography-secondary hover:text-white hover:bg-body-level-2 transition-all"
            >
              <ThemeIcons.CrossIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
