"use client";
import { ReactNode, useState } from "react";

interface SectionToggleProps {
  title?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const SectionToggle = ({
  title,
  children,
  isOpen,
  onToggle,
}: SectionToggleProps) => {
  return (
    <div className="w-full border-b border-body-level-2">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-left  h-[51px]"
      >
        <span className="text-14 font-regular text-white">{title}</span>
        <svg
          className={`size-12 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && <div className="pb-3">{children}</div>}
    </div>
  );
};

const FooterMobile = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="space-y-2 md:hidden my-5">
      <SectionToggle
        title="Support"
        isOpen={open === "support"}
        onToggle={() => setOpen(open === "support" ? null : "support")}
      >
        <ul className="space-y-2">
          <li>
            <button
              id="custom_launcher"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Live Support
            </button>
          </li>
          <li>
            <a
              href="https://help.winna.com/"
              target="_blank"
              rel="noreferrer"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Help Center
            </a>
          </li>
          <li>
            <button className="text-12 text-typography-secondary hover:text-accent-blue">
              Report a Bug
            </button>
          </li>
          <li>
            <button className="text-12 text-typography-secondary hover:text-accent-blue">
              Business Contact
            </button>
          </li>
          <li>
            <button className="text-12 text-typography-secondary hover:text-accent-blue">
              Complaints
            </button>
          </li>
        </ul>
      </SectionToggle>

      <SectionToggle
        title="Policy"
        isOpen={open === "policy"}
        onToggle={() => setOpen(open === "policy" ? null : "policy")}
      >
        <ul className="space-y-2">
          <li>
            <a
              href="/tos"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/privacy"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/rg"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Responsible Gambling
            </a>
          </li>
          <li>
            <a
              href="/sports-terms"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Sports Terms
            </a>
          </li>
          <li>
            <a
              href="/bp"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Bonus Policy
            </a>
          </li>
        </ul>
      </SectionToggle>

      <SectionToggle
        title="Platform"
        isOpen={open === "platform"}
        onToggle={() => setOpen(open === "platform" ? null : "platform")}
      >
        <ul className="space-y-2">
          <li>
            <a
              href="/provably-fair"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Provably Fair
            </a>
          </li>
          <li>
            <button className="text-12 text-typography-secondary hover:text-accent-blue">
              Verify Fairness
            </button>
          </li>
          <li>
            <a
              href="/invite-friends"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              Affiliate Program
            </a>
          </li>
          <li>
            <button className="text-12 text-typography-secondary hover:text-accent-blue">
              VIP Program
            </button>
          </li>
          <li>
            <a
              href="/about-us"
              className="text-12 text-typography-secondary hover:text-accent-blue"
            >
              About Us
            </a>
          </li>
        </ul>
      </SectionToggle>
    </div>
  );
};

export default FooterMobile;
