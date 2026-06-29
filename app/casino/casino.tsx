"use client";

import { Search, ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import classNames from 'classnames';




const games = [
  {
    id: 1,
    name: "Winna Trillion",
    provider: "BGaming",
    image:
      "https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 2,
    name: "Le Winna",
    provider: "Hacksaw Gaming",
    image:
      "https://winna.imgix.net/game-image/1765979929769/KENO%20v1%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 3,
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image:
      "https://winna.imgix.net/game-image/1765979896635/LIMBO%20v5%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 4,
    name: "Money Train 4",
    provider: "Relax Gaming",
    image:
      "https://winna.imgix.net/game-image/1770982234729/Blackjack%20v2.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 5,
    name: "Swoll",
    provider: "Shady Lady",
    image:
      "https://winna.imgix.net/game-image/1765979860581/PLINKO%20v6%20%283%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 6,
    name: "Duck Hunters",
    provider: "Nolimit City",
    image:
      "https://winna.imgix.net/game-image/1765979887709/MINES%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 7,
    name: "Le Fisherman",
    provider: "Hacksaw Gaming",
    image:
      "https://winna.imgix.net/game-image/1770982246315/HILO%20v2.avif?format=auto&auto=format&dpr=1.6&w=180",
  }, {
    id: 8,
    name: "Winna Trillion",
    provider: "BGaming",
    image:
      "https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 9,
    name: "Le Winna",
    provider: "Hacksaw Gaming",
    image:
      "https://winna.imgix.net/game-image/1765979929769/KENO%20v1%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 10,
    name: "Sweet Bonanza",
    provider: "Pragmatic Play",
    image:
      "https://winna.imgix.net/game-image/1765979896635/LIMBO%20v5%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 11,
    name: "Money Train 4",
    provider: "Relax Gaming",
    image:
      "https://winna.imgix.net/game-image/1770982234729/Blackjack%20v2.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 12,
    name: "Swoll",
    provider: "Shady Lady",
    image:
      "https://winna.imgix.net/game-image/1765979860581/PLINKO%20v6%20%283%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 13,
    name: "Duck Hunters",
    provider: "Nolimit City",
    image:
      "https://winna.imgix.net/game-image/1765979887709/MINES%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
  {
    id: 11,
    name: "Le Fisherman",
    provider: "Hacksaw Gaming",
    image:
      "https://winna.imgix.net/game-image/1770982246315/HILO%20v2.avif?format=auto&auto=format&dpr=1.6&w=180",
  },
];

const providers = [
  "3 Oaks Gaming",
  "7rings",
  "Ace Roll",
  "Amusnet",
  "Avatar UX",
  "Aviatrix",
];

export default function Casino() {
  const [showProvider, setShowProvider] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [search, setSearch] = useState(""); const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);


  return (
    <main className="min-h-screen  text-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6 hidden lg:flex">
          <button className="w-9 h-9 rounded bg-body-level-8 flex items-center justify-center" onClick={() => router.push('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path d="M9.75741 12L15.7255 5.95215C16.1032 5.56938 16.1032 4.80383 15.65 4.3445C15.1967 3.88517 14.5168 3.88517 14.0635 4.3445L7.33995 11.2344C6.88668 11.6938 6.88668 12.3828 7.33995 12.8421L14.0635 19.6555C14.5168 20.1148 15.1967 20.1148 15.65 19.6555C16.1032 19.1962 16.1032 18.5072 15.65 18.0478L9.75741 12Z" fill="currentColor"></path></svg>
          </button>

          <h1 className="text-[32px] font-bold">Slots</h1>
        </div>

        {/* Search & Filters */}
        <div className="flex  lg:flex-row gap-3 mb-4 items-center" >
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Game"
              className="w-full h-10 rounded-xl bg-body-level-8 pl-12 pr-12 text-typography-secondary outline-none text-[14px]"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-typography-secondary  hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

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
          <div className="  lg:hidden">
            <div
              className={classNames("casino-fillter-drop-down", {
                active: showFilter,
              })}
              role="button"
              tabIndex={0}
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <div className="bg-body-level-8 rounded-[8px] px-3 py-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={showFilter ? "text-accent-blue" : "text-typography-secondary"}
                >
                  <path
                    d="M3.5 5.5H20.5M6.5 11.5H17.5M9.5 17.5H14.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>


          </div>
        </div>
        <div className="  lg:hidden">
          {showFilter && (
            <div className=" right-0 top-50 z-50 rounded-xl left-0  shadow-lg mx-auto flex flex-col justify-center mb-4">
              {/* Sort */}
              <button
                onClick={() => setShowSort(!showSort)}
                className="w-full h-10 px-4 rounded-lg bg-body-level-8 hover:bg-hover-color flex items-center justify-between text-white mb-2"
              >
                <span className="text-typography-secondary hover:text-typography-primary text-[16px] ">  Sort by: Popular</span>
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
                </svg>     </button>

              {showSort && (
                <div className="rounded-lg bg-body-level-8 p-2 mb-2">
                  <div className="py-2 font-semibold hover:text-typography-primary  text-[14px]">Popular

                  </div>
                  <div className="py-2 text-typography-secondary hover:text-typography-primary text-[14px] ">
                    A-Z (alphabetically)
                  </div>
                  <div className="py-2 text-typography-secondary hover:text-typography-primary text-[14px] ">
                    Z-A (alphabetically)
                  </div>
                  <div className="py-2 text-typography-secondary  hover:text-typography-primary text-[14px]">Recently Added</div>
                </div>
              )}

              {/* Providers */}
              <button
                onClick={() => setShowProvider(!showProvider)}
                className="w-full h-10 px-4 rounded-lg bg-body-level-8 hover:bg-hover-color flex items-center justify-between text-white"
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
                </svg>   </button>

              {showProvider && (
                <div className="rounded-lg bg-body-level-8 p-2 mt-2">
                  <input
                    placeholder="Search..."
                    className="w-full h-10 rounded-lg bg-body-level-9 px-3 outline-none mb-2  text-[14px]"
                  />

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
          )}
        </div>

        <p className="text-typography-secondary  text-sm mb-6">
          Found games: {games.length}
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {games.map((game, index) => (
            <div
              key={`${game.name}-${index}`}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-2.5   ">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full aspect-[167/222] object-cover "
                />
              </div>


            </div>
          ))}
        </div><div className="mt-10 flex justify-center">
          <div className="h-1 w-52 rounded-full bg-accent-blue" />
        </div>

        <p className="text-center text-typography-secondary text-[14px] mt-3 font-bold">
          You viewed: 14 out of 14 Games
        </p>
      </div>
    </main>
  );
}