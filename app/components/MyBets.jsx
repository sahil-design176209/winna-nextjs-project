import React from "react";

const MyBets = () => {
  return (
    <div>
      <section className="space-y-3 my-5">
        <header className="flex items-center justify-between gap-2">
          <h4 className="flex items-center gap-2 text-18 font-semibold capitalize text-typography-blue lg:text-20">
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-6"
            >
              <path d="M16 5.07A8 8 0 1 1 4 12v-.26a8 8 0 0 1 12-6.67M12 7.2a.8.8 0 0 0-.8.8v4a.8.8 0 0 0 .8.8h2.8a.8.8 0 1 0 0-1.6h-2V8a.8.8 0 0 0-.7-.8z" />
            </svg>{" "}
            Bets
          </h4>
        </header>
        <div className="flex items-center justify-between">
          <ul className="flex items-center [&>li]:flex-1 lg:[&>li]:flex-initial w-full gap-2 lg:w-auto min-w-0 max-w-full overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] lg:overflow-x-visible [&::-webkit-scrollbar]:hidden">
            <li>
              <button
                className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 border-body-level-4 h-10 w-full"
                data-index={0}
                fdprocessedid="q33zs5"
              >
                My bets
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 bg-body-level-3 text-accent-blue border-body-level-4 h-10 w-full"
                data-index={1}
                fdprocessedid="dhli4o"
              >
                All bets
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 border-body-level-4 h-10 w-full"
                data-index={2}
                fdprocessedid="fi9n9e"
              >
                Highrollers
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 border-body-level-4 h-10 w-full"
                data-index={3}
                fdprocessedid="nhdgul"
              >
                Sports
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 border-body-level-4 h-10 w-full"
                data-index={4}
                fdprocessedid="6514e"
              >
                World Cup Bets
              </button>
            </li>
          </ul>
          <div className="css-b62m3t-container min-w-[120px]">
            <label htmlFor="bets-per-page" className="sr-only">
              Items per page
            </label>
            <div className="relative">
              <select
                id="bets-per-page"
                defaultValue="5"
                className="appearance-none h-10 w-full rounded-lg border border-body-level-4 bg-body-level-3 px-3 pr-10 text-16 text-white outline-none transition-colors hover:border-accent-blue"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-typography-secondary"
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="!-mb-12">
          <table className="w-full table-fixed font-regular text-white">
            <thead className="text-13 lg:text-14 text-typography-secondary  relative bg-body-level-0">
              <tr>
                <th className="h-12 text-left lg:pl-3 px-2 font-regular truncate lg:pr-0">
                  User
                </th>
                <th className="h-12 text-left lg:pl-3 px-2 font-regular truncate lg:pr-0">
                  Game
                </th>
                <th className="h-12 text-left lg:pl-3 px-2 font-regular truncate lg:pr-0">
                  Bet Amount
                </th>
                <th className="h-12 text-left lg:pl-3 px-2 font-regular truncate w-[22%] lg:w-[13%] lg:pr-0">
                  Multiplier
                </th>
                <th className="h-12 text-left lg:pl-3 px-2 font-regular truncate lg:w-[20%] lg:pr-0">
                  Payout
                </th>
              </tr>
            </thead>
            <tbody className="text-13 lg:text-14 react-use-css-a">
              <tr
                role="button"
                className="rounded-xl odd:bg-body-level-1 _tableItem_1n2fa_1 cursor-pointer"
                tabIndex={0}
              >
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative flex items-center justify-center gap-1 truncate py-2">
                      <span className="relative min-w-max">
                        <img
                          alt="Platinum"
                          className="inline size-4"
                          src="/vip-tier/platinum.webp"
                        />
                        <span className="absolute bottom-[-2px] right-[-2px] size-2.5 rounded-full bg-body-level-5 text-center text-8 text-white">
                          3
                        </span>
                      </span>
                      <span className="cursor-pointer transition-colors hover:text-accent-blue truncate">
                        Fortunate_Jump
                      </span>
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <img
                      className="h-[27px] w-[21px] rounded-[3px] object-cover lg:h-9 lg:w-7 lg:rounded"
                      alt="Limbo"
                      src="https://winna.imgix.net/game-image/1765979896635/LIMBO%20v5%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=30"
                    />
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Limbo
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $1.36
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 w-[22%] lg:w-[13%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="inline-flex items-center">
                      <span className="inline-flex w-5 shrink-0 justify-center" />
                      0.00x
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 lg:w-[20%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="text-white max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      -$1.36
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                role="button"
                className="rounded-xl odd:bg-body-level-1 _tableItem_1n2fa_1 cursor-pointer"
                tabIndex={0}
              >
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative flex items-center justify-center gap-1 truncate py-2">
                      <span className="relative min-w-max">
                        <img
                          alt="Platinum"
                          className="inline size-4"
                          src="/vip-tier/no-level.webp"
                        />
                      </span>
                      <span className="truncate">Hidden</span>
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <img
                      className="h-[27px] w-[21px] rounded-[3px] object-cover lg:h-9 lg:w-7 lg:rounded"
                      alt="Dice"
                      src="https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=30"
                    />
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Dice
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $2.72
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 w-[22%] lg:w-[13%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="inline-flex items-center">
                      <span className="inline-flex w-5 shrink-0 justify-center" />
                      4.00x
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 lg:w-[20%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="text-green max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $10.88
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                role="button"
                className="rounded-xl odd:bg-body-level-1 _tableItem_1n2fa_1 cursor-pointer"
                tabIndex={0}
              >
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative flex items-center justify-center gap-1 truncate py-2">
                      <span className="relative min-w-max">
                        <img
                          alt="Diamond"
                          className="inline size-4"
                          src="/vip-tier/diamond.webp"
                        />
                        <span className="absolute bottom-[-2px] right-[-2px] size-2.5 rounded-full bg-body-level-5 text-center text-8 text-white">
                          1
                        </span>
                      </span>
                      <span className="cursor-pointer transition-colors hover:text-accent-blue truncate">
                        soookiee
                      </span>
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <img
                      className="h-[27px] w-[21px] rounded-[3px] object-cover lg:h-9 lg:w-7 lg:rounded"
                      alt="Keno"
                      src="https://winna.imgix.net/game-image/1765979929769/KENO%20v1%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=30"
                    />
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Keno
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $15.04
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 w-[22%] lg:w-[13%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="inline-flex items-center">
                      <span className="inline-flex w-5 shrink-0 justify-center" />
                      8.00x
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 lg:w-[20%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="text-green max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $120.37
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                role="button"
                className="rounded-xl odd:bg-body-level-1 _tableItem_1n2fa_1 cursor-pointer"
                tabIndex={0}
              >
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative flex items-center justify-center gap-1 truncate py-2">
                      <span className="relative min-w-max">
                        <img
                          alt="Diamond"
                          className="inline size-4"
                          src="/vip-tier/no-level.webp"
                        />
                      </span>
                      <span className="truncate">Hidden</span>
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <img
                      className="h-[27px] w-[21px] rounded-[3px] object-cover lg:h-9 lg:w-7 lg:rounded"
                      alt="Keno"
                      src="https://winna.imgix.net/game-image/1765979929769/KENO%20v1%20%281%29.avif?format=auto&auto=format&dpr=1.6&w=30"
                    />
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Keno
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="USD Coin"
                        src="/coins/usdc.svg"
                      />
                    </span>
                    <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $1.32
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 w-[22%] lg:w-[13%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="inline-flex items-center">
                      <span className="inline-flex w-5 shrink-0 justify-center" />
                      3.50x
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 lg:w-[20%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="USD Coin"
                        src="/coins/usdc.svg"
                      />
                    </span>
                    <span className="text-green max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $4.62
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                role="button"
                className="rounded-xl odd:bg-body-level-1 _tableItem_1n2fa_1 cursor-pointer"
                tabIndex={0}
              >
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative flex items-center justify-center gap-1 truncate py-2">
                      <span className="relative min-w-max">
                        <img
                          alt="Platinum"
                          className="inline size-4"
                          src="/vip-tier/no-level.webp"
                        />
                      </span>
                      <span className="truncate">Hidden</span>
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <img
                      className="h-[27px] w-[21px] rounded-[3px] object-cover lg:h-9 lg:w-7 lg:rounded"
                      alt="Dice"
                      src="https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=30"
                    />
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Dice
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $1.36
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 w-[22%] lg:w-[13%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="inline-flex items-center">
                      <span className="inline-flex w-5 shrink-0 justify-center" />
                      4.00x
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 lg:w-[20%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="text-green max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $5.44
                    </span>
                  </div>
                </td>
              </tr>
              <tr
                role="button"
                className="rounded-xl odd:bg-body-level-1 _tableItem_1n2fa_1 cursor-pointer"
                tabIndex={0}
              >
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span className="relative flex items-center justify-center gap-1 truncate py-2">
                      <span className="relative min-w-max">
                        <img
                          alt="Platinum"
                          className="inline size-4"
                          src="/vip-tier/no-level.webp"
                        />
                      </span>
                      <span className="truncate">Hidden</span>
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <img
                      className="h-[27px] w-[21px] rounded-[3px] object-cover lg:h-9 lg:w-7 lg:rounded"
                      alt="Dice"
                      src="https://winna.imgix.net/game-image/1765979909535/DICE%20v2%20%282%29.avif?format=auto&auto=format&dpr=1.6&w=30"
                    />
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Dice
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $2.72
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 w-[22%] lg:w-[13%]">
                  <div className="flex items-center gap-[8px]">
                    <span className="inline-flex items-center">
                      <span className="inline-flex w-5 shrink-0 justify-center" />
                      4.00x
                    </span>
                  </div>
                </td>
                <td className="h-12 text-left lg:pl-3 lg:pr-0.5 px-2 font-regular truncate first:rounded-bl-[inherit] first:rounded-tl-[inherit] last:rounded-br-[inherit] last:rounded-tr-[inherit] text-14 lg:w-[20%]">
                  <div className="flex items-center gap-[8px]">
                    <span>
                      <img
                        className="size-4 text-10 text-white"
                        alt="Solana"
                        src="/coins/sol.svg"
                      />
                    </span>
                    <span className="text-green max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      {" "}
                      $10.88
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyBets;
