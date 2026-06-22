"use client";

import React, { useState, useRef, useEffect } from "react";
import { ThemeIcons } from "./SvgIcons";

const PROVIDER_OPTIONS = [
  "Pragmatic Play",
  "Evolution",
  "Hacksaw Gaming",
  "Nolimit City",
  "Play'n GO",
];

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
  const [selectedOption, setSelectedOption] = React.useState({
    label: "Popular",
    value: "popular",
  });

  const providersRef = React.useRef<HTMLDivElement>(null);
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
                {/* 1. Sort By Dropdown */}
                <div className="relative w-full lg:w-[200px]" ref={dropdownRef}>
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between h-11 px-3 hover:cursor-pointer hover:bg-body-level-3 text-14 font-normal rounded-lg bg-body-level-2 text-typography-secondary border border-transparent transition-all select-none"
                  >
                    <div className="flex items-center gap-1 truncate">
                      <span>Sort by:</span>
                      <span className="text-white ml-1 font-medium">
                        {selectedOption.label}
                      </span>
                    </div>
                    <div
                      className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <ThemeIcons.ChevronDownIcon />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="absolute left-0 right-0 mt-1 z-50 rounded-lg bg-body-level-2 border border-body-level-3 shadow-xl overflow-hidden py-1">
                      {[
                        { label: "Popular", value: "popular" },
                        { label: "Newest", value: "newest" },
                        { label: "A-Z", value: "alphabetical" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2.5 text-14 transition-colors hover:bg-body-level-3 ${
                            selectedOption.value === option.value
                              ? "text-white font-medium bg-body-level-3/40"
                              : "text-typography-secondary"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Providers Dropdown with Checkbox Rows */}
                <div
                  className="relative w-full lg:w-[200px]"
                  ref={providersRef}
                >
                  <button
                    onClick={() => setIsProvidersOpen(!isProvidersOpen)}
                    className="px-3 hover:cursor-pointer hover:bg-body-level-3 text-14 font-normal rounded-lg bg-body-level-2 flex w-full items-center justify-between h-11 border border-transparent transition-all select-none"
                  >
                    <span className="text-typography-secondary font-medium truncate">
                      {selectedProviders.length === 0
                        ? "All providers"
                        : `${selectedProviders.length} selected`}
                    </span>
                    <div
                      className={`transition-transform duration-200 ${isProvidersOpen ? "rotate-180" : ""}`}
                    >
                      <ThemeIcons.ChevronDownIcon />
                    </div>
                  </button>

                  {isProvidersOpen && (
                    <div className="absolute right-0 left-0 mt-1 z-50 rounded-lg bg-body-level-2 border border-body-level-3 shadow-xl overflow-hidden py-1 max-h-[240px] overflow-y-auto">
                      {PROVIDER_OPTIONS.map((provider) => {
                        const isChecked = selectedProviders.includes(provider);
                        return (
                          <label
                            key={provider}
                            className="flex items-center gap-3 w-full px-3 py-2.5 text-14 text-typography-secondary transition-colors hover:bg-body-level-3 hover:text-white cursor-pointer select-none"
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {
                                if (isChecked) {
                                  setSelectedProviders(
                                    selectedProviders.filter(
                                      (p) => p !== provider,
                                    ),
                                  );
                                } else {
                                  setSelectedProviders([
                                    ...selectedProviders,
                                    provider,
                                  ]);
                                }
                              }}
                              className="h-4 w-4 appearance-none rounded border border-body-level-4 bg-body-level-3 checked:bg-accent-blue focus:ring-0 focus:ring-offset-0 cursor-pointer relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-white checked:after:text-[10px] checked:after:font-bold transition-all"
                            />
                            <span
                              className={
                                isChecked ? "text-white font-medium" : ""
                              }
                            >
                              {provider}
                            </span>
                          </label>
                        );
                      })}
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
