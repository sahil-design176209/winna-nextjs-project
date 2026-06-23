"use client";

import type { ReactNode } from "react";

type Tab = {
  key: string;
  label: string;
  icon: ReactNode;
};

type TabsComponentProps = {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (key: string) => void;
};

const TabsComponent = ({
  tabs,
  activeTab,
  onTabChange,
}: TabsComponentProps) => {
  return (
    <div>
      <header className="flex items-center justify-between gap-2 mt-5">
        <div className="flex items-center gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => onTabChange(tab.key)}
                className={`flex h-10 items-center gap-2 rounded-lg border px-3 text-16 font-medium capitalize transition-colors ${
                  isActive
                    ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                    : "border-body-level-4 bg-body-level-3 text-typography-secondary hover:text-accent-blue"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default TabsComponent;
