"use client";

import { useState, useEffect, useCallback } from "react";
import { TabNavigation, type TabId } from "@/components/layout/TabNavigation";
import { HeroCover } from "@/components/layout/HeroCover";
import { Footer } from "@/components/layout/Footer";
import { ReportTab } from "@/components/report/ReportTab";
import { AngebotTab } from "@/components/angebot/AngebotTab";
import { KonzeptTab } from "@/components/konzept/KonzeptTab";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("report");
  const [showNav, setShowNav] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleStart = useCallback((tab: TabId) => {
    setActiveTab(tab);
    setShowContent(true);
    setShowNav(true);
    window.scrollTo({ top: 0, behavior: "instant" });
    // Small delay to ensure DOM update, then scroll to content
    setTimeout(() => {
      const content = document.getElementById("content");
      if (content) {
        content.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  }, []);

  const handleTabChange = useCallback((tab: TabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <TabNavigation
        activeTab={activeTab}
        onTabChange={handleTabChange}
        visible={showNav && showContent}
      />

      {!showContent && <HeroCover onStart={handleStart} />}

      {showContent && (
        <div id="content" className="pt-16">
          <div className="max-w-[900px] mx-auto px-5 py-10">
            <div className="animate-fade-in">
              {activeTab === "report" && <ReportTab />}
              {activeTab === "angebot" && <AngebotTab />}
              {activeTab === "konzept" && <KonzeptTab />}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
