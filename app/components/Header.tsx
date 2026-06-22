"use client";

import React, { useState } from "react"; // Added hook
import Link from "next/link";
import { ThemeIcons } from "./SvgIcons";
import WinnaLogo from "../../public/images/logo-winna.svg";
import Image from "next/image";
import HeaderSearch from "./HeaderSearch"; // Imported your component
import WalletPopup from "./WalletPopup";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authFormEmail, setAuthFormEmail] = useState("");
  const [authFormPassword, setAuthFormPassword] = useState("");
  const [authFormUsername, setAuthFormUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const resetAuthForm = () => {
    setAuthFormEmail("");
    setAuthFormPassword("");
    setAuthFormUsername("");
    setRememberMe(false);
    setAgreeTerms(false);
    setReferralCode("");
    setShowPassword(false);
  };

  const openAuthModal = (mode: "login" | "signup") => {
    setAuthMode(mode);
    resetAuthForm();
    setIsAuthModalOpen(true);
  };

  const handleAuthSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuthModalOpen(false);
    setIsLoggedIn(true);
    setAuthFormEmail("");
    setAuthFormPassword("");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
    setIsWalletOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 z-[200] w-full bg-body-level-1 lg:sticky">
        <div className="layout-container h-random flex  items-center justify-between ">
          <a
            className="block w-[81px] min-w-[81px] shrink-0 flex-none"
            href="/"
            data-discover="true"
          >
            <Image src={WinnaLogo} alt="logo" />
          </a>
          <div className="contents lg:flex lg:min-w-0 lg:flex-1 lg:items-center">
            <div className="ml-5 hidden gap-3 lg:inline-flex">
              <a
                className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 h-10 transition-colors gap-1 font-medium min-w-10 active:text-accent-blue disabled:text-white disabled:border-accent-blue disabled:opacity-50 disabled:hover:bg-transparent border border-body-level-2 px-4 hover:border-accent-blue-hover md:text-16 bg-body-level-4 text-accent-blue"
                href="/"
                data-discover="true"
                aria-current="page"
              >
                Casino
              </a>
              <a
                className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 h-10 transition-colors gap-1 font-medium min-w-10 active:text-accent-blue disabled:text-white disabled:border-accent-blue disabled:opacity-50 disabled:hover:bg-transparent border border-body-level-3 bg-transparent px-4 text-typography-secondary hover:border-accent-blue-hover md:text-16"
                href="/sportsbook"
                data-discover="true"
              >
                Sports
              </a>
              <button
                className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 h-10 transition-colors font-medium bg-transparent border hover:border-accent-blue-hover active:text-accent-blue disabled:text-white disabled:border-accent-blue disabled:opacity-50 disabled:hover:bg-transparent min-w-[85px] gap-2 px-4 text-typography-secondary md:text-16 border-body-level-3"
                data-testid="nav-vip-button-desktop"
              >
                <div>
                  <ThemeIcons.LiveIcon />
                </div>
                VIP
              </button>
              <a
                data-testid="nav-world-cup-hub-desktop"
                aria-label="World Cup Hub"
                className="group relative block h-10 w-[190px] overflow-hidden rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                href="/worldcup"
                data-discover="true"
              >
                <span className="wc-hub-nav-shine" aria-hidden="true" />
                <span
                  className="wc-hub-nav-spark wc-hub-nav-spark-one"
                  aria-hidden="true"
                />
                <span
                  className="wc-hub-nav-spark wc-hub-nav-spark-two"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div className="flex items-center gap-2 lg:ml-auto justify-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium min-w-10 bg-body-level-4 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-4 disabled:opacity-50 hidden size-10 text-typography-secondary lg:flex"
              >
                <div className="flex h-4 w-4 items-center justify-center mr-0 md:mr-0 md:h-6 md:w-6">
                  <ThemeIcons.SearchIcon />
                </div>
              </button>
              {/* logged in data starts */}
              {isLoggedIn ? (
                <>
                  <div className="relative">
                    <button
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-body-level-4 text-white hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-4 disabled:opacity-50 min-w-[100px] shrink-0 pr-2"
                      data-profile="currency"
                    >
                      <span className="flex pt-[2px]">
                        <span className="relative flex">
                          <span className="absolute left-0 text-green opacity-0 ">
                            $0.00{" "}
                          </span>
                          $0.00{" "}
                        </span>
                      </span>
                      <span className="flex h-5 w-5 items-center justify-center">
                        <ThemeIcons.ChevronDownIcon />
                      </span>
                    </button>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsWalletOpen(true)}
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-pressed disabled:opacity-50 text-white lg:text-16"
                    >
                      <div className="flex items-center justify-center md:h-5 md:w-5 lg:mr-1 w-5 h-5">
                        <ThemeIcons.WalletIcon />
                      </div>
                      Wallet
                    </button>

                    {/* Wallet Modal integration */}
                    <WalletPopup
                      isOpen={isWalletOpen}
                      onClose={() => setIsWalletOpen(false)}
                    />
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium min-w-10 bg-body-level-4 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-4 disabled:opacity-50 size-10 text-typography-secondary"
                      data-profile="true"
                    >
                      <div className="flex items-center justify-center mr-0 md:mr-0 md:h-6 md:w-6 h-5 w-5">
                        <ThemeIcons.UserIcon />
                      </div>
                    </button>

                    {/* Profile Menu Dropdown Overlay Layout */}
                    {isProfileMenuOpen && (
                      <div className="absolute right-0 mt-2 w-[330px] z-[9999] rounded-xl bg-[#09151c] border border-body-level-2 shadow-2xl p-4 text-sm text-typography-secondary">
                        {/* User info section */}
                        <div className="flex items-center gap-3 pb-3 mb-3 border-b border-body-level-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-body-level-4 text-white">
                            <ThemeIcons.UserIcon />
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-white font-medium truncate">
                              Sahi2
                            </p>
                            <p className="text-12 text-typography-grey truncate">
                              sahilpathania@yrjtechnology.com
                            </p>
                          </div>
                        </div>

                        {/* Grid Links split layout matching production screen mock */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.SettingsIcon /> <span>Settings</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.StatisticsIcon />{" "}
                            <span>Statistics</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.VaultIcon /> <span>Vault</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.SwapIcon /> <span>Swap</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.FriendsIcon />{" "}
                            <span>Invite Friends</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.TransactionsIcon />{" "}
                            <span>Transactions</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.HistoryIcon /> <span>Bet History</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.CaresIcon /> <span>Winna Cares</span>
                          </button>
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.SupportIcon /> <span>Live Support</span>
                          </button>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.LogOutIcon /> <span>Log Out</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <button
                      onClick={() => openAuthModal("login")}
                      className="flex rounded-lg cursor-pointer items-center justify-center text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-body-level-4 text-white hover:bg-body-level-5 active:bg-body-level-3 min-w-[100px]"
                    >
                      Login
                    </button>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => openAuthModal("signup")}
                      className="flex rounded-lg cursor-pointer items-center justify-center text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-accent-blue text-white hover:bg-accent-blue-hover active:bg-accent-blue-pressed min-w-[100px]"
                    >
                      Sign Up
                    </button>
                  </div>
                </>
              )}
              {/* logged in data ends */}
            </div>
            <div className="ml-2 block cursor-pointer text-white max-lg:hidden">
              <button
                className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium min-w-10 bg-body-level-4 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-4 disabled:opacity-50 size-10 text-typography-secondary lg:text-white"
                data-profile="true"
              >
                <div className="flex items-center justify-center mr-0 md:mr-0 md:h-6 md:w-6 h-5 w-5">
                  <ThemeIcons.MessageIcon />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <HeaderSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <LoginModal
        isOpen={isAuthModalOpen && authMode === "login"}
        onClose={() => setIsAuthModalOpen(false)}
        authFormEmail={authFormEmail}
        authFormPassword={authFormPassword}
        showPassword={showPassword}
        rememberMe={rememberMe}
        onToggleShowPassword={() => setShowPassword((current) => !current)}
        onEmailChange={(event) => setAuthFormEmail(event.target.value)}
        onPasswordChange={(event) => setAuthFormPassword(event.target.value)}
        onRememberChange={(event) => setRememberMe(event.target.checked)}
        onSubmit={handleAuthSubmit}
        onSwitchToSignup={() => {
          setAuthMode("signup");
          resetAuthForm();
        }}
      />
      <SignupModal
        isOpen={isAuthModalOpen && authMode === "signup"}
        onClose={() => setIsAuthModalOpen(false)}
        authFormEmail={authFormEmail}
        authFormUsername={authFormUsername}
        authFormPassword={authFormPassword}
        referralCode={referralCode}
        showPassword={showPassword}
        agreeTerms={agreeTerms}
        onEmailChange={(event) => setAuthFormEmail(event.target.value)}
        onUsernameChange={(event) => setAuthFormUsername(event.target.value)}
        onPasswordChange={(event) => setAuthFormPassword(event.target.value)}
        onReferralChange={(event) => setReferralCode(event.target.value)}
        onToggleShowPassword={() => setShowPassword((current) => !current)}
        onAgreeTermsChange={(event) => setAgreeTerms(event.target.checked)}
        onSubmit={handleAuthSubmit}
        onSwitchToLogin={() => {
          setAuthMode("login");
          resetAuthForm();
        }}
      />
    </>
  );
}
