"use client";

import { cn } from "@/lib/utils";

export type TabId = "report" | "angebot" | "konzept";

interface Tab {
  id: TabId;
  label: string;
}

const tabs: Tab[] = [
  { id: "report", label: "Audit Report" },
  { id: "angebot", label: "Angebot" },
  { id: "konzept", label: "Konzept" },
];

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  visible: boolean;
}

export function TabNavigation({ activeTab, onTabChange, visible }: TabNavigationProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-400",
        "bg-bg/85 backdrop-blur-xl border-b border-border",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="max-w-[900px] mx-auto px-5 py-3 flex items-center justify-between">
        <span className="text-lg font-extrabold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
          MaxMyBusiness
        </span>
        <div className="flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer",
                "border-none bg-transparent",
                activeTab === tab.id
                  ? "bg-accent/15 text-accent"
                  : "text-muted hover:text-text"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
