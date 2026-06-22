"use client";

import React from "react";
import { ThemeIcons } from "./SvgIcons";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  authFormEmail: string;
  authFormPassword: string;
  showPassword: boolean;
  rememberMe: boolean;
  onToggleShowPassword: () => void;
  onEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRememberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onSwitchToSignup: () => void;
}

export function LoginModal({
  isOpen,
  onClose,
  authFormEmail,
  authFormPassword,
  showPassword,
  rememberMe,
  onToggleShowPassword,
  onEmailChange,
  onPasswordChange,
  onRememberChange,
  onSubmit,
  onSwitchToSignup,
}: LoginModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[400] bg-[#01090e]/80 flex items-center justify-center px-4 py-6">
      <div className="absolute inset-0" aria-hidden="true" onClick={onClose} />
      <div className="relative z-10 flex w-full max-w-5xl overflow-hidden rounded-[12px] border border-body-level-2 bg-[#061116] shadow-2xl lg:flex-row">
        <div className="hidden w-full lg:flex lg:w-1/2 bg-[#08131b]">
          <div className="h-full w-full rounded-l-[32px]  left-image bg-[radial-gradient(circle_at_top_left,_rgba(0,121,255,0.14),_transparent_30%),_radial-gradient(circle_at_bottom_left,_rgba(0,121,255,0.08),_transparent_40%)]" />
        </div>
        <div className="w-full bg-body-level-1 p-6 sm:p-8 lg:w-1/2">
          <button
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-body-level-2 text-typography-secondary hover:bg-body-level-3"
            type="button"
            onClick={onClose}
          >
            <ThemeIcons.CrossIcon />
          </button>
          <div className="space-y-5 pt-4">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.35em] text-white">
                LOGIN
              </p>
              <h2 className="text-3xl font-semibold text-white">Login</h2>
            </div>
          </div>
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <label className="flex flex-col gap-2 text-sm text-typography-secondary">
              Username / Email Address
              <input
                type="text"
                value={authFormEmail}
                onChange={onEmailChange}
                required
                className="rounded-2xl border border-body-level-2 bg-body-level-2 px-4 py-3 text-white outline-none transition-colors focus:border-accent-blue"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-typography-secondary">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={authFormPassword}
                  onChange={onPasswordChange}
                  required
                  className="w-full rounded-2xl border border-body-level-2 bg-body-level-2 px-4 py-3 pr-12 text-white outline-none transition-colors focus:border-accent-blue"
                />
                <button
                  type="button"
                  onClick={onToggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-typography-secondary"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-typography-secondary">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={onRememberChange}
                  className="h-4 w-4 rounded border-body-level-2 bg-body-level-2 text-accent-blue focus:ring-accent-blue"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm text-accent-blue hover:text-accent-blue-hover"
              >
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-2xl bg-accent-blue px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-blue-hover"
            >
              Sign in
            </button>
          </form>
          <div className="my-6 flex items-center gap-3 text-xs text-typography-secondary">
            <span className="h-px flex-1 bg-body-level-2" />
            <span className="uppercase tracking-[0.3em]">OR LOGIN WITH</span>
            <span className="h-px flex-1 bg-body-level-2" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-body-level-2 bg-body-level-2 px-4 py-3 text-sm text-white transition-colors hover:border-accent-blue"
            >
              Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-body-level-2 bg-body-level-2 px-4 py-3 text-sm text-white transition-colors hover:border-accent-blue"
            >
              Telegram
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-typography-secondary">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignup}
              className="font-semibold text-accent-blue"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
