import React from "react";
import { NavIcons, ThemeIcons } from "./SvgIcons";
const Navbar = () => {
  return (
    <nav className="sticky top-16 z-30 hidden border-b border-body-level-1 bg-body-level-0 lg:top-14 lg:block">
      <ul className="layout-container flex items-center gap-6 xl:gap-10">
        <li>
          <a
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-14 transition-colors hover:text-accent-blue text-accent-blue"
            href="/"
            data-discover="true"
          >
            <NavIcons.LobbyIcon />
            Lobby
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
            href="/casino"
            data-discover="true"
          >
            <NavIcons.OriginalIcon />
            Virtual
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
               href="/casino"
            data-discover="true"
          >
            <NavIcons.SlotsIcon />
            Slots
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
                     href="/casino"
            data-discover="true"
          >
            <NavIcons.TableGamesIcon />
            Evolution Gaming
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
           href="/casino"
            data-discover="true"
          >
            <NavIcons.LiveCasinoIcon />
            Pragmatic Play
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 whitespace-nowrap py-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue"
                  href="/casino"
            data-discover="true"
          >
            <NavIcons.GameShowsIcon />
            Hacksaw Gaming
          </a>
        </li>

        <li className="ml-auto">
          <div className="relative">
            <button className="relative flex items-center gap-2 py-3 text-14 text-typography-secondary">
              <NavIcons.PromotionsIcon />
              Promotions
              <ThemeIcons.ChevronDownIcon />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
