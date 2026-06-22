import React from "react";
import { ThemeIcons } from "./SvgIcons";
const WalletDetails = () => {
  return (
    <div>
      <div className="absolute top-full z-[200] block w-max left-[calc(50%+24px)] right-auto -translate-x-1/2 lg:left-0 lg:translate-x-0">
        <div className="fixed bottom-0 left-0 right-0 top-14 flex" />
        <div className="relative mt-4 w-max shadow-[0px_4px_8px_0px_rgba(3,14,26,0.3)]">
          <div className="flex h-[304px] max-h-[calc(var(--layout-height-sm)-10px)] w-[227px] flex-col overflow-y-clip rounded-lg bg-body-level-1 lg:h-auto lg:max-h-[calc(var(--layout-height-lg)-30px)]">
            <div className="scrollbar mt-0 flex-shrink animate-fall-bounce overflow-y-auto overscroll-none py-2 lg:p-2">
              <ul className="flex flex-col px-2 lg:gap-2 lg:px-0">
                <li>
                  <button
                    value="BTC"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Bitcoin"
                          src="/coins/btc.svg"
                        />
                      </span>
                      <span>BTC</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="ETH"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 hover:bg-body-level-3 hover:text-white bg-body-level-3 text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Ethereum"
                          src="/coins/eth.svg"
                        />
                      </span>
                      <span>ETH</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="USDT"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Tether"
                          src="/coins/usdt.svg"
                        />
                      </span>
                      <span>USDT</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="USDC"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="USD Coin"
                          src="/coins/usdc.svg"
                        />
                      </span>
                      <span>USDC</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="LTC"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Litecoin"
                          src="/coins/ltc.svg"
                        />
                      </span>
                      <span>LTC</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="SOL"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Solana"
                          src="/coins/sol.svg"
                        />
                      </span>
                      <span>SOL</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="BNB"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Binance Coin"
                          src="/coins/bnb.svg"
                        />
                      </span>
                      <span>BNB</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="TRX"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Tron"
                          src="/coins/trx.svg"
                        />
                      </span>
                      <span>TRX</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="DOGE"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Dogecoin"
                          src="/coins/doge.svg"
                        />
                      </span>
                      <span>DOGE</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="XRP"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Ripple"
                          src="/coins/xrp.svg"
                        />
                      </span>
                      <span>XRP</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="TON"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="Toncoin"
                          src="/coins/ton.svg"
                        />
                      </span>
                      <span>TON</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="DAI"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="DAI"
                          src="/coins/dai.svg"
                        />
                      </span>
                      <span>DAI</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
                <li>
                  <button
                    value="SHFL"
                    className="flex w-full items-center justify-between rounded px-2 py-1 text-12 text-typography-secondary hover:bg-body-level-3 hover:text-white"
                  >
                    <span className="flex items-center gap-x-1">
                      <span className="flex size-6 items-center justify-center">
                        <img
                          className="size-6"
                          alt="SHFL"
                          src="/coins/shfl.svg"
                        />
                      </span>
                      <span>SHFL</span>
                    </span>
                    <span>$0.00</span>
                  </button>
                </li>
              </ul>
              <div className="mx-4 my-2 pb-[2px] pt-[1px]">
                <hr className="border-body-level-3" />
              </div>
              <form>
                <div className="flex flex-col gap-y-2 px-2">
                  <label className="flex cursor-pointer items-start justify-between">
                    <span className="text-12 text-white">Display in fiat</span>
                    <div className="group/switch relative cursor-pointer rounded-full transition-colors duration-300 ease-in-out h-4 w-6 border border-accent-blue hover:border-accent-blue-hover">
                      <input
                        className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        type="checkbox"
                        name="display_in_fiat"
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 rounded-full bg-typography-grey transition-all duration-300 ease-in-out group-hover/switch:bg-typography-secondary peer-checked:bg-accent-blue group-hover/switch:peer-checked:bg-accent-blue-hover peer-disabled:bg-typography-secondary size-2.5 translate-x-0.5 peer-checked:translate-x-2.5" />
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-start justify-between">
                    <span className="text-12 text-typography-secondary">
                      Hide zero balances
                    </span>
                    <div className="group/switch relative cursor-pointer rounded-full transition-colors duration-300 ease-in-out h-4 w-6 border border-typography-secondary hover:border-typography-secondary">
                      <input
                        className="peer absolute inset-0 h-full w-full cursor-pointer opacity-0"
                        type="checkbox"
                        name="hide_zero_balance"
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 rounded-full bg-typography-grey transition-all duration-300 ease-in-out group-hover/switch:bg-typography-secondary peer-checked:bg-accent-blue group-hover/switch:peer-checked:bg-accent-blue-hover peer-disabled:bg-typography-secondary size-2.5 translate-x-0.5 peer-checked:translate-x-2.5" />
                    </div>
                  </label>
                </div>
                <div className="mx-4 my-2 pb-[2px] pt-[1px]">
                  <hr className="border-body-level-3" />
                </div>
                <p className="mb-2 px-2 text-12 text-typography-secondary">
                  Display Сurrency:
                </p>
                <div className="grid grid-cols-2 px-2 lg:grid-cols-3">
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="USD"
                      name="currency"
                    />
                    <span className="mt-[3px]">USD</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="ARS"
                      name="currency"
                    />
                    <span className="mt-[3px]">ARS</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="BRL"
                      name="currency"
                    />
                    <span className="mt-[3px]">BRL</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="KRW"
                      name="currency"
                    />

                    <span className="mt-[3px]">KRW</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="EUR"
                      name="currency"
                    />

                    <span className="mt-[3px]">EUR</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="CAD"
                      name="currency"
                    />

                    <span className="mt-[3px]">CAD</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="MXN"
                      name="currency"
                    />

                    <span className="mt-[3px]">MXN</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="JPY"
                      name="currency"
                    />

                    <span className="mt-[3px]">JPY</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="CNY"
                      name="currency"
                    />

                    <span className="mt-[3px]">CNY</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="PHP"
                      name="currency"
                    />

                    <span className="mt-[3px]">PHP</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="INR"
                      name="currency"
                    />

                    <span className="mt-[3px]">INR</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="IDR"
                      name="currency"
                    />

                    <span className="mt-[3px]">IDR</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="RUB"
                      name="currency"
                    />

                    <span className="mt-[3px]">RUB</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="DKK"
                      name="currency"
                    />

                    <span className="mt-[3px]">DKK</span>
                  </label>
                  <label className="ls:text-18 flex items-center gap-1 text-16 font-medium transition-colors cursor-pointer text-typography-secondary hover:text-white h-[28px] w-full !text-13 lg:text-13 font-regular">
                    <input
                      className="sr-only"
                      type="radio"
                      defaultValue="GBP"
                      name="currency"
                    />

                    <span className="mt-[3px]">GBP</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
