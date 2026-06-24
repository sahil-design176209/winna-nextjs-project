"use client";

import React from "react";
import Link from "next/link";
import { SportsMenuIcons, ThemeIcons } from "../components/SvgIcons";
import NoData from "../components/NoData";

const SportsSearchbar = () => {
  const [query, setQuery] = React.useState("");
  const hasQuery = query.trim().length > 0;

  return (
    <section className="min-h-[560px] w-full text-white">
      <div className="mx-auto w-full max-w-[1264px]">
        <div className="flex w-full items-center gap-4">
          <div className="relative min-w-0 flex-1">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="h-10 w-full rounded-md border border-body-level-4 bg-body-level-0 px-3 pr-10 text-16 font-medium text-white outline-none transition-colors focus:border-accent-blue focus:shadow-[0_0_0_3px_rgba(16,171,225,0.18)]"
              autoFocus
            />
            {hasQuery && (
              <button
                type="button"
                aria-label="Clear sports search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-body-level-2 text-typography-secondary transition-colors hover:text-white"
              >
                <span className="text-white w-[8px] h-[8px] flex items-center justify-center cursor-pointer">
                  <ThemeIcons.CrossIcon />
                </span>
              </button>
            )}
          </div>

          <Link
            href="/sport"
            className="shrink-0 text-12 font-regular text-white transition-colors hover:text-accent-blue"
          >
            Close
          </Link>
        </div>

        <button
          type="button"
          className="mt-4 flex h-9 max-w-full items-center gap-2 rounded-md bg-body-level-1 px-3 text-14 font-semibold text-white transition-colors hover:bg-body-level-2"
        >
          <span className="flex h-4 w-4 items-center justify-center">
            <SportsMenuIcons.TennisIcon />
          </span>
          <span className="">Piracicaba Challenger 2026</span>
        </button>
      </div>
      <NoData />
    </section>
  );
};

export default SportsSearchbar;
