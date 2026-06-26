"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavIcons, ThemeIcons } from "./SvgIcons";
import SportsNavbar from "./SportsNavbar";
import PromotionsDropdown from "./PromotionsDropdown";
interface NavbarProps {
  isPromotionMenuOpen: boolean;
  onTogglePromotions: () => void; // A function that returns nothing
}

const Navbar = ({ isPromotionMenuOpen, onTogglePromotions }: NavbarProps) => {
  const pathname = usePathname() ?? "";
  const showSportsNavbar =
    pathname.startsWith("/sport") || pathname.startsWith("/racing");

  return (
    <nav
      className={`sticky top-14 z-30 border-b border-body-level-1 lg:top-14 ${
        showSportsNavbar
          ? "block bg-body-level-2"
          : "hidden bg-body-level-0 lg:block"
      }`}
    >
      {showSportsNavbar ? (
        <SportsNavbar />
      ) : (
        <ul className="layout-container flex items-center gap-6 xl:gap-10">
          <li>
            <Link
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-14 transition-colors hover:text-accent-blue text-accent-blue"
              href="/"
            >
              <NavIcons.LobbyIcon />
              Lobby
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
              href="/casino"
            >
              <NavIcons.OriginalIcon />
              Virtual
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
              href="/casino"
            >
              <NavIcons.SlotsIcon />
              Slots
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
              href="/casino"
            >
              <NavIcons.TableGamesIcon />
              Evolution Gaming
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
              href="/casino"
            >
              <NavIcons.LiveCasinoIcon />
              Pragmatic Play
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
              href="/casino"
            >
              <NavIcons.GameShowsIcon />
              Hacksaw Gaming
            </Link>
          </li>

          <li className="ml-auto">
            <div className="relative">
              <button
                className="relative flex items-center gap-2 py-3 text-14 text-typography-secondary cursor-pointer"
                onClick={onTogglePromotions}
              >
                <NavIcons.PromotionsIcon />
                Promotions
                <span>
                  <ThemeIcons.ChevronDownIcon />
                </span>
              </button>
              {isPromotionMenuOpen && <PromotionsDropdown />}
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
