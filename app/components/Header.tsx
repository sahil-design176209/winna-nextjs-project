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
import UserProfileModal from "./UserProfile";
import { usePathname } from "next/navigation";
import StatisticsModal from "./Statistics";
import ValutModal from "./Vault";
import StatementModal from "./Statement";
import WithdrwalModal from "./Withdrwal";
import EditstakeModal from "./EditStake";
import TransactionModal from "./Transaction";
import BonusModal from "./BonusList";
import OpenbetModal from "./OpenBet";
interface HeaderProps {
  isProfileMenuOpen: boolean;
  onToggleProfile: () => void;
}

export default function Header({
  isProfileMenuOpen,
  onToggleProfile,
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const [isWalletOpen, setIsWalletOpen] = React.useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authFormEmail, setAuthFormEmail] = useState("");
  const [authFormPassword, setAuthFormPassword] = useState("");
  const [authFormUsername, setAuthFormUsername] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showStatisticsModal, setShowStatisticsModal] = useState(false);
  const [showStatementModal, setShowStatementModal] = useState(false);
  const [showEditstakeModal, setShowEditstakeModal] = useState(false);
  const [showWithdrwalModal, setShoWithdrwalModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [showOpenbetModal, setShowOpenbetModal] = useState(false);
  const [showValutModal, setShowValutModal] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const pathname = usePathname();
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

    setIsWalletOpen(false);
  };
  const closeAllModals = () => {
    setShowProfileModal(false);
    setShowStatisticsModal(false);
    setShowValutModal(false);
    setShowStatementModal(false);
    setShoWithdrwalModal(false);
    setShowEditstakeModal(false);
    setShowTransactionModal(false);
    setShowBonusModal(false);
    setShowOpenbetModal(false);
  };

  const openModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    closeAllModals();

    if (isProfileMenuOpen) {
      onToggleProfile();
    }

    setter(true);
  };
  return (
    <>
      <header className="fixed top-0 z-[200] w-full bg-body-level-1 px-2.5 ">
        <div className="layout-container flex h-[var(--header-height-sm)] items-center justify-between lg:h-[var(--header-height-lg)] w-full max-w-[1312px] mx-auto">
          <Link
            className="block w-20 min-w-[48px] shrink-0 flex-none sm:w-[81px] sm:min-w-[81px]"
            href="/"
          >
            <Image src={WinnaLogo} alt="logo" />
          </Link>
          <div className=" lg:flex lg:min-w-0 lg:flex-1 lg:items-center">
            <div className="ml-5 hidden gap-3 lg:inline-flex">
              <Link
                href="/"
                className={`flex rounded-lg cursor-pointer items-center justify-center text-14 h-10 transition-colors gap-1 font-medium min-w-10 px-4 md:text-16 border ${pathname === "/casino"
                    ? "bg-body-level-9 text-accent-blue border-body-level-2"
                    : "bg-transparent text-typography-secondary border-body-level-3 hover:border-accent-blue-hover"
                  }`}
              >
                Casino
              </Link>

              <Link
                href="/sport"
                className={`flex rounded-lg cursor-pointer items-center justify-center text-14 h-10 transition-colors gap-1 font-medium min-w-10 px-4 md:text-16 border ${pathname === "/sport"
                    ? "bg-body-level-9 text-accent-blue border-body-level-2"
                    : "bg-transparent text-typography-secondary border-body-level-3 hover:border-accent-blue-hover"
                  }`}
              >
                Sports
              </Link>
              <button className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 h-10 transition-colors font-medium bg-transparent border hover:border-accent-blue-hover active:text-accent-blue disabled:text-white disabled:border-accent-blue disabled:opacity-50 disabled:hover:bg-transparent min-w-[85px] gap-2 px-4 text-typography-secondary md:text-16 border-body-level-3">
                <div></div>
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
            <div className="flex flex-wrap items-center gap-2 lg:ml-auto justify-center">
              <button
                onClick={() => setIsSearchOpen(true)}
                className=" hidden  rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium min-w-10 bg-body-level-9 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-9 disabled:opacity-50 size-10 text-typography-secondary flex lg:flex"
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
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-body-level-9 text-white hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-9 disabled:opacity-50 min-w-[100px] shrink-0 pr-2"
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
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-body-level-9 hover:bg-body-level-9-hover active:bg-body-level-9-pressed disabled:opacity-50 text-white lg:text-16"
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
                      onClick={onToggleProfile}
                      className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium min-w-10 bg-body-level-9 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-9 disabled:opacity-50 size-10 text-typography-secondary"
                      data-profile="true"
                    >
                      <div className="flex items-center justify-center mr-0 md:mr-0 md:h-6 md:w-6 h-5 w-5">
                        <ThemeIcons.UserIcon />
                      </div>
                    </button>

                    {/* Profile Menu Dropdown Overlay Layout */}
                    {isProfileMenuOpen && (
                      <div className="absolute right-0 top-full mt-5 w-[330px] max-w-[330px] z-40 rounded-[8px] bg-body-level-7  border-body-level-2 shadow-2xl p-5 text-sm text-typography-secondary">
                        {/* User info section */}
                        <div className="flex items-center gap-3 pb-3 mb-3 border-b border-body-level-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg  text-white">
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
                          <button
                            onClick={() => openModal(setShowProfileModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.SettingsIcon />
                            <span>User Profile</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowStatisticsModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.StatisticsIcon />
                            <span className="text-[13px]">Statistics</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowValutModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.VaultIcon />
                            <span className="text-[13px]">Vault</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowStatementModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.Statement />
                            <span className="text-[13px]">Statement</span>
                          </button>
                          <button
                            onClick={() => openModal(setShoWithdrwalModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.WithdrwalIcon />
                            <span className="text-[13px]">Withdrawal</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowEditstakeModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.EditStakeIcon />
                            <span className="text-[13px]">Edit Stake</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowTransactionModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.TransactionIcon />
                            <span className="text-[13px]">Transaction</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowBonusModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.BonusListIcon />
                            <span className="text-[13px]">Bonus List</span>
                          </button>
                          <button
                            onClick={() => openModal(setShowOpenbetModal)}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.OpenBetIcon />
                            <span className="text-[13px]">Open Bet</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-body-level-2 pt-3 mt-3">
                          <button className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left">
                            <ThemeIcons.SupportIcon />{" "}
                            <span className="text-[13px]">Live Support</span>
                          </button>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 py-1 hover:text-white transition-colors text-left"
                          >
                            <ThemeIcons.LogOutIcon />{" "}
                            <span className="text-[13px]"> Log Out</span>
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
                      className="flex rounded-lg cursor-pointer items-center justify-center text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-body-level-9 text-white hover:bg-body-level-5 active:bg-body-level-3 min-w-[100px]"
                    >
                      Login
                    </button>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => openAuthModal("signup")}
                      className="flex rounded-lg cursor-pointer items-center justify-center text-14 md:text-sm h-10 transition-colors gap-1 font-medium px-4 bg-accent-blue text-white hover:bg-body-level-9-hover active:bg-body-level-9-pressed min-w-[100px]"
                    >
                      Sign Up
                    </button>
                  </div>
                </>
              )}
              {/* logged in data ends */}
            </div>
            <div className="ml-2 hidden cursor-pointer text-white lg:block">
              <button
                className="flex rounded-lg cursor-pointer items-center justify-center disabled:cursor-not-allowed text-14 md:text-sm h-10 transition-colors gap-1 font-medium min-w-10 bg-body-level-9 hover:bg-body-level-5 active:bg-body-level-3 disabled:bg-body-level-9 disabled:opacity-50 size-10 text-typography-secondary lg:text-white"
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
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <UserProfileModal onClose={() => setShowProfileModal(false)} />
          </div>
        </div>
      )}
      {showStatisticsModal && (
               <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowProfileModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <StatisticsModal onClose={() => setShowStatisticsModal(false)} />
          </div>
        </div>
      )}
      {showValutModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowValutModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <ValutModal onClose={() => setShowValutModal(false)} />
          </div>
        </div>
      )}
      {showStatementModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowStatementModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <StatementModal onClose={() => setShowStatementModal(false)} />
          </div>
        </div>
      )}
      {showWithdrwalModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShoWithdrwalModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <WithdrwalModal onClose={() => setShoWithdrwalModal(false)} />
          </div>
        </div>
      )}
      {showEditstakeModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowEditstakeModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <EditstakeModal onClose={() => setShowEditstakeModal(false)} />
          </div>
        </div>
      )}
      {showTransactionModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowTransactionModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <TransactionModal onClose={() => setShowTransactionModal(false)} />
          </div>
        </div>
      )}
      {showBonusModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowBonusModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <BonusModal onClose={() => setShowBonusModal(false)} />
          </div>
        </div>
      )}
      {showOpenbetModal && (
        <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/60 overflow-y-auto p-3 md:p-6 mt-[60px] md:mt-0 mb-[60px] mb:mt-0">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowOpenbetModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-lg  text-white flex items-center justify-center"
            ></button>

            <OpenbetModal onClose={() => setShowOpenbetModal(false)} />
          </div>
        </div>
      )}
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
