import React from "react";
import { ThemeIcons } from "./SvgIcons";
const UserPopup = () => {
  return (
    <div>
      <div className="relative mt-4 w-max shadow-[0px_4px_8px_0px_rgba(3,14,26,0.3)]">
        <div className="h-full max-h-[calc(var(--layout-height-sm)-16px)] w-[calc(100vw-20px)] max-w-[359px] overflow-y-auto rounded-lg bg-body-level-2 p-5 md:w-[330px] md:max-w-none md:overflow-hidden">
          <div className="animate-fall-bounce space-y-3">
            <div className="flex items-center gap-4 text-white">
              <div className="relative">
                {/* <img alt="" className="size-9" src="/vip-tier/no-level.webp" /> */}
              </div>
              <div className="space-y-0.5">
                <div className="text-typography-primary text-18 font-medium">
                  Sahi2
                </div>
                <div className="text-12 text-typography-grey">
                  sahilpathania@yrjtechnology.com
                </div>
              </div>
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-x-0 gap-y-0 text-13">
              <div className="col-span-2 my-1 h-px w-full bg-body-level-4" />
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="dt1ifq"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.SettingsIcon />
                  </span>
                  <span className="min-w-0 truncate">Settings</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="ouz8fi"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.GraphBarsIcon />
                  </span>
                  <span className="min-w-0 truncate">Statistics</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="7wzpc"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.UserBoxIcon />
                  </span>
                  <span className="min-w-0 truncate">Vault</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="1c3r4i"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.RecycleIcon />
                  </span>
                  <span className="min-w-0 truncate">Swap</span>
                </button>
              </li>
              <li>
                <a
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  href="/invite-friends"
                  data-discover="true"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.DoubleUserIcon />
                  </span>
                  <span className="min-w-0 truncate">Invite Friends</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="cvhels"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.WalletIcon />
                  </span>
                  <span className="min-w-0 truncate">Transactions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="t0cn7"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.DiceIcon />
                  </span>
                  <span className="min-w-0 truncate">Bet History</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="u9fdy6"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.HeartIcon />
                  </span>
                  <span className="min-w-0 truncate">Winna Cares</span>
                </button>
              </li>
              <div className="col-span-2 my-1 h-px w-full bg-body-level-4" />
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="ppjad9"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.CallUserIcon />
                  </span>
                  <span className="min-w-0 truncate">Live Support</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex h-10 w-full min-w-0 items-center gap-1 rounded-[10px] px-0.5 text-13 leading-4 text-typography-secondary transition-colors duration-150 hover:bg-body-level-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/60 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:pointer-events-none"
                  fdprocessedid="8rh99e"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-transparent text-typography-secondary transition-colors duration-150 group-hover:text-white">
                    <ThemeIcons.LogoutIcon />
                  </span>
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPopup;
