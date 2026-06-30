import React from "react";
import { ThemeIcons } from "./SvgIcons";
import { useState } from "react";
const WalletPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState<"crypto" | "giftcard">("crypto");
  return (
    <div>
      <div className="ReactModal__Overlay ReactModal__Overlay--after-open fixed top-0 z-[300] bottom-0 left-0 right-0 bg-body-level-2/80 lg:flex lg:items-center lg:justify-center faded-modal">
        <div
          className="ReactModal__Content ReactModal__Content--after-open absolute left-0 top-0 mx-2 my-16 h-[calc(100%-8rem)] w-[calc(100%-1rem)] overscroll-none bg-body-level-1 text-white outline-none mobile-landscape:my-2 mobile-landscape:h-full mobile-landscape:max-h-[calc(100%-1rem)] lg:relative lg:h-auto lg:w-auto rounded-xl lg:overflow-hidden lg:rounded-2xl"
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="cursor-pointer disabled:cursor-not-allowed text-14 md:text-sm transition-colors gap-1 font-medium min-w-8 bg-body-level-4 text-white hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-4 disabled:opacity-50 absolute right-3 z-30 flex size-8 h-8 items-center justify-center rounded p-0 lg:right-6 lg:p-0 top-3 lg:left-[490px] lg:top-6"
            type="button"
            onClick={onClose}
          >
            <div className="flex h-4 w-4 items-center justify-center md:h-5 md:w-5 mr-0 md:mr-0">
              <ThemeIcons.CrossIcon />
            </div>
          </button>
          <div className="relative flex h-full flex-col p-3 lg:max-h-[800px] lg:w-[964px] lg:p-6 lg:overflow-y-auto lg:scrollbar">
            <div className="flex items-center gap-2 lg:hidden">
              <h5 className="text-20 font-medium lg:text-24">Wallet</h5>
            </div>
            <div className="mt-6 lg:mt-0">
              <div className="relative flex flex-col lg:max-w-[400px]">
                <ul className="flex items-center [&>li]:flex-1 lg:[&>li]:flex-initial w-full gap-2 lg:w-auto">
                  <li className="flex-1 lg:flex-initial">
                    <button
                      className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 bg-body-level-2 text-accent-blue border-body-level-2 h-10 w-full"
                      data-index={0}
                    >
                      Deposit
                    </button>
                  </li>
                  <li className="flex-1 lg:flex-initial">
                    <button
                      className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 border-body-level-2 h-10 w-full"
                      data-index={1}
                    >
                      Withdrawal
                    </button>
                  </li>
                  <li className="flex-1 lg:flex-initial">
                    <button
                      className="flex items-center justify-center gap-2 truncate rounded-lg border px-3 text-14 text-typography-secondary transition-colors hover:text-accent-blue disabled:opacity-50 lg:px-4 border-body-level-2 h-10 w-full"
                      data-index={2}
                    >
                      Tip
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scrollbar flex flex-col gap-4 overflow-y-auto lg:overflow-y-visible">
              <div className="mt-2 flex-1 flex w-full flex-col items-center gap-4 lg:mt-0 overflow-y-auto scrollbar lg:overflow-y-visible h-min p-4 rounded-lg lg:p-0 lg:rounded-none bg-body-level-2 lg:bg-transparent">
                <div className="flex flex-1 w-full flex-col gap-2 lg:flex-row lg:gap-6">
                  <div className="lg:hidden">
                    <div className="relative flex w-full flex-col lg:w-[500px]">
                      <div className="flex h-[48px] rounded-xl bg-body-level-0 p-1 lg:mx-4">
                        <button className="flex-1 rounded-lg normal-case transition-colors bg-body-level-2 text-white pointer-cursor">
                          Crypto
                        </button>
                        <button className="flex-1 rounded-lg normal-case transition-colors bg-transparent text-typography-secondary pointer-cursor">
                          Gift Card
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full lg:hidden">
                    <button className="pl-3 pr-2 hover:cursor-pointer text-16 font-normal rounded-lg hover:text-white group/select-control text-white flex h-12 w-full items-center gap-0 text-left bg-body-level-4 hover:bg-body-level-4">
                      <span className="option-icon-wrapper flex h-7 w-7 items-center justify-center">
                        <span className="option-icon flex items-center justify-center overflow-hidden rounded-full">
                          <img
                            className="w-7 h-7"
                            alt="Ethereum"
                            src="/coins/eth.svg"
                          />
                        </span>
                      </span>
                      <div className="option-content flex flex-col">
                        <span className="option-label pl-2 font-medium text-14">
                          Ethereum
                        </span>
                        <span className="option-sub-label pl-2 text-[11px] leading-none text-typography-grey">
                          $0
                        </span>
                      </div>
                      <ThemeIcons.ChevronDownIcon />
                    </button>
                  </div>
                  <div className="hidden relative lg:h-full lg:flex flex-col items-center lg:mt-4">
                    <div className="mb-4 hidden w-full rounded-lg bg-body-level-2 px-4 py-3 text-12 text-typography-secondary lg:block">
                      Estimated Balance{" "}
                      <span className="ml-2 text-white">$0 USD</span>
                    </div>
                    <div className="flex h-full flex-1 flex-col gap-4 self-stretch rounded-lg bg-body-level-2 pt-3">
                      {/* Tab Navigation Controls */}
                      <div className="relative flex w-full flex-col lg:w-[500px]">
                        <div className="flex h-[48px] rounded-xl bg-body-level-0 p-1 lg:mx-4">
                          <button
                            onClick={() => setActiveTab("crypto")}
                            className={`flex-1 rounded-lg normal-case transition-colors ${
                              activeTab === "crypto"
                                ? "bg-body-level-2 text-white font-medium shadow-sm"
                                : "bg-transparent text-typography-secondary hover:text-white"
                            }`}
                          >
                            Crypto
                          </button>
                          <button
                            onClick={() => setActiveTab("giftcard")}
                            className={`flex-1 rounded-lg normal-case transition-colors ${
                              activeTab === "giftcard"
                                ? "bg-body-level-2 text-white font-medium shadow-sm"
                                : "bg-transparent text-typography-secondary hover:text-white"
                            }`}
                          >
                            Gift Card
                          </button>
                        </div>
                      </div>

                      {/* TAB 1: Crypto View Layout Grid */}
                      {activeTab === "crypto" && (
                        <div className="grid flex-1 grid-cols-3 content-start gap-x-2.5 gap-y-2 p-4 pt-0">
                          {[
                            { name: "Bitcoin", balance: "$0" },
                            {
                              name: "Ethereum",
                              balance: "$0",
                              activeBorder: true,
                            },
                            { name: "Tether", balance: "$0" },
                            { name: "USD Coin", balance: "$0" },
                            { name: "Litecoin", balance: "$0" },
                            { name: "Solana", balance: "$0" },
                            { name: "Binance Coin", balance: "$0" },
                            { name: "TRON", balance: "$0" },
                            { name: "Dogecoin", balance: "$0" },
                            { name: "Ripple", balance: "$0" },
                            { name: "Toncoin", balance: "$0" },
                            { name: "DAI", balance: "$0" },
                            { name: "Shuffle", balance: "$0" },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className={`pd-4 flex h-[90px] w-[148px] cursor-pointer flex-col items-center justify-center rounded-lg transition-colors ${
                                item.activeBorder
                                  ? "border border-accent-blue bg-body-level-3 hover:bg-body-level-2"
                                  : "bg-body-level-1 hover:bg-body-level-3 border border-transparent"
                              }`}
                            >
                              <div className="option-icon-wrapper flex h-8 w-8 items-center justify-center">
                                <span className="option-icon flex items-center justify-center overflow-hidden rounded-full">
                                  <ThemeIcons.BitCoinIcon />
                                </span>
                              </div>
                              <p className="mt-2 text-16 text-white">
                                {item.name}
                              </p>
                              <span className="text-[11px] leading-none text-typography-grey">
                                {item.balance}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* TAB 2: Gift Card View Layout Grid */}
                      {activeTab === "giftcard" && (
                        <>
                          <div className="grid flex-1 grid-cols-3 content-start gap-x-2.5 gap-y-2 p-4 pt-0">
                            {[
                              { name: "Visa Gift Card" },
                              { name: "Mastercard" },
                              { name: "Amazon" },
                              { name: "Apple iTunes" },
                              { name: "Google Play" },
                              { name: "Steam Wallet" },
                            ].map((card, idx) => (
                              <div
                                key={idx}
                                className="pd-4 flex h-[90px] w-[148px] cursor-pointer flex-col items-center justify-center rounded-lg bg-body-level-1 hover:bg-body-level-3 border border-transparent transition-colors"
                              >
                                <div className="option-icon-wrapper flex h-8 w-8 items-center justify-center text-accent-blue">
                                  <ThemeIcons.VaultIcon />
                                </div>
                                <p className="mt-2 text-14 text-white text-center px-1 truncate w-full">
                                  {card.name}
                                </p>
                                <span className="text-[11px] leading-none text-typography-grey mt-0.5">
                                  Select
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="px-4 pb-4">
                            <button
                              className=" flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm text-white transition-colors gap-1 bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-pressed disabled:opacity-50 h-12 w-full whitespace-nowrap px-6 font-bold
"
                            >
                              Proceed
                            </button>
                          </div>
                          <form className="flex w-full flex-col gap-3 p-4 pt-0">
                            <div className="flex w-full flex-col gap-2">
                              <p className="text-text-secondary text-12">
                                Enter your code to redeem
                              </p>
                              <div className="flex w-full flex-row gap-3 lg:flex-col lg:gap-0">
                                <div className="flex-1">
                                  <div>
                                    <div className="flex items-center border-2 border-body-level-3 rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:border-[#203B48] has-[input:-webkit-autofill]:bg-body-level-3 has-[input:read-only]:text-typography-secondary has-[input:read-only]:bg-transparent has-[input:focus:not(:read-only):not(:disabled)]:hover:border-accent-blue has-[input:focus:not(:read-only):not(:disabled)]:border-accent-blue h-12 pl-4 pr-1.5 bg-body-level-4">
                                      <input
                                        id="_r_4_"
                                        className="flex w-full h-full bg-transparent disabled:text-typography-secondary focus:outline-none text-14 autofill:[transition:background-color_9999s_ease-in-out_0s] caret-white autofill:[-webkit-text-fill-color:white!important] autofill:caret-white autofill:transition-[background-color_9999s_ease-in-out_0s] text-text-primary placeholder:text-text-secondary"
                                        placeholder="XXXX-XXXX-XXXX-XXXX"
                                        type="text"
                                        defaultValue=""
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button
                                  className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm text-white transition-colors gap-1 bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-pressed disabled:opacity-50 h-12 w-auto whitespace-nowrap px-6 font-bold lg:mt-2 lg:w-full"
                                  type="submit"
                                >
                                  Redeem
                                </button>
                              </div>
                            </div>
                          </form>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-1 h-full w-full flex-col items-center gap-4 lg:w-[392px] lg:gap-5 lg:rounded-xl lg:bg-body-level-2 justify-between lg:mt-[-40px] lg:p-5">
                      <div className="flex w-full flex-1 flex-col items-center gap-1">
                        <div className="hidden items-center lg:flex">
                          <span className="option-icon-wrapper flex h-7 w-7 items-center justify-center">
                            <span className="option-icon flex items-center justify-center overflow-hidden rounded-full">
                              <ThemeIcons.BitCoinIcon />
                            </span>
                          </span>
                          <span className="ml-2 text-16 text-typography-grey">
                            Ethereum Deposit
                          </span>
                        </div>
                        <div className="mb-3 mt-2 flex flex-col gap-5 lg:my-4 lg:flex-row lg:items-start">
                          <div className="mx-auto rounded-2xl border-[13px] border-solid border-body-level-3 bg-body-level-3 lg:m-0">
                            <ThemeIcons.QRIcon />
                          </div>
                        </div>
                        <div className="w-full">
                          <div>
                            <div className="flex flex-col">
                              <label
                                htmlFor="_r_a_"
                                className="mb-1 block text-14 font-regular leading-5 text-white"
                              >
                                Ethereum Deposit Address
                              </label>
                              <div className="flex items-center border-2 border-body-level-3 rounded-lg bg-body-level-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:border-[#203B48] has-[input:-webkit-autofill]:bg-body-level-3 has-[input:read-only]:text-typography-secondary has-[input:read-only]:bg-transparent has-[input:focus:not(:read-only):not(:disabled)]:hover:border-accent-blue has-[input:focus:not(:read-only):not(:disabled)]:border-accent-blue h-12 pl-4 pr-1.5">
                                <input
                                  id="_r_a_"
                                  className="flex w-full h-full bg-transparent disabled:text-typography-secondary focus:outline-none text-14 autofill:[transition:background-color_9999s_ease-in-out_0s] caret-white autofill:[-webkit-text-fill-color:white!important] autofill:caret-white autofill:transition-[background-color_9999s_ease-in-out_0s] !text-11 text-typography-grey placeholder:text-typography-grey"
                                  defaultValue="0xe32B6bf90e1C35aB1f93012A91eff1455a748676"
                                />
                                <button className="flex cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm transition-colors gap-1 font-medium rounded h-8 min-w-8 bg-body-level-4 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-4 disabled:opacity-50 px-3 text-typography-secondary hover:text-white">
                                  <div className="flex h-4 w-4 items-center justify-center md:h-5 md:w-5 mr-0 md:mr-0">
                                    <ThemeIcons.BlockDoubleIcon />
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex w-full cursor-default self-start gap-1 text-12 text-typography-grey lg:text-13">
                          <ThemeIcons.InfoIcon />
                          <div className="flex flex-col gap-2">
                            Please only deposit via the Ethereum (ERC-20)
                            network. 6 confirmations are required
                            <div className="h-px w-full bg-body-level-6" />
                            <p className="text-12 text-typography-grey w-full lg:text-13">
                              Minimum Deposit $1
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="mt-5 flex max-w-full flex-1 items-center justify-between">
                          <div className="relative w-[calc(50%-18px)] overflow-hidden">
                            <div className="flex max-w-full flex-1 items-center gap-2">
                              <div className="max-w-full flex-1">
                                <label
                                  htmlFor="_r_8_"
                                  className="mb-1 text-13 font-regular md:text-14 absolute top-[-20px] w-[220px]"
                                >
                                  Calculate the exchange rate
                                </label>
                                <div className="flex items-center border-2 border-body-level-3 rounded-lg bg-body-level-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:border-[#203B48] has-[input:-webkit-autofill]:bg-body-level-3 has-[input:read-only]:text-typography-secondary has-[input:read-only]:bg-transparent has-[input:focus:not(:read-only):not(:disabled)]:hover:border-accent-blue has-[input:focus:not(:read-only):not(:disabled)]:border-accent-blue h-12 pl-4 pr-1.5 relative mt-1">
                                  <span className="mr-2 flex h-4 min-h-4 w-4 min-w-4 items-center justify-center">
                                    <ThemeIcons.DollarIcon />
                                  </span>
                                  <input
                                    id="_r_8_"
                                    inputMode="numeric"
                                    className="flex w-full h-full bg-transparent disabled:text-typography-secondary focus:outline-none text-14 autofill:[transition:background-color_9999s_ease-in-out_0s] caret-white autofill:[-webkit-text-fill-color:white!important] autofill:caret-white autofill:transition-[background-color_9999s_ease-in-out_0s] placeholder:text-typography-secondary"
                                    type="text"
                                    defaultValue=""
                                    name="amount"
                                    style={{ maxWidth: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[20px] flex-none text-center">
                            =
                          </div>
                          <div className="relative w-[calc(50%-18px)] overflow-hidden">
                            <div className="flex max-w-full flex-1 items-center gap-2">
                              <div className="max-w-full flex-1">
                                <div className="flex items-center border-2 border-body-level-3 rounded-lg bg-body-level-0 shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-colors hover:border-[#203B48] has-[input:-webkit-autofill]:bg-body-level-3 has-[input:read-only]:text-typography-secondary has-[input:read-only]:bg-transparent has-[input:focus:not(:read-only):not(:disabled)]:hover:border-accent-blue has-[input:focus:not(:read-only):not(:disabled)]:border-accent-blue h-12 pl-4 pr-1.5 relative mt-1">
                                  <span className="mr-2 flex h-5 min-h-5 w-5 min-w-5 items-center justify-center">
                                    <ThemeIcons.BitCoinIcon />
                                  </span>
                                  <input
                                    id="_r_9_"
                                    inputMode="numeric"
                                    className="flex w-full h-full bg-transparent disabled:text-typography-secondary focus:outline-none text-14 autofill:[transition:background-color_9999s_ease-in-out_0s] caret-white autofill:[-webkit-text-fill-color:white!important] autofill:caret-white autofill:transition-[background-color_9999s_ease-in-out_0s] placeholder:text-typography-secondary"
                                    type="text"
                                    defaultValue=""
                                    name="result"
                                    style={{ maxWidth: "100%" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPopup;
