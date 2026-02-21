import { ExecutiveSummary } from "@/components/report/ExecutiveSummary";
import { TechnicalAudit } from "@/components/report/TechnicalAudit";
import { SeoAnalysis } from "@/components/report/SeoAnalysis";
import { UxConversion } from "@/components/report/UxConversion";
import { BrandContent } from "@/components/report/BrandContent";
import { BacklinksAnalysis } from "@/components/report/BacklinksAnalysis";
import { Competition } from "@/components/report/Competition";
import { SocialMedia } from "@/components/report/SocialMedia";
import { SwotAnalysis } from "@/components/report/SwotAnalysis";
import { LegalRisks } from "@/components/report/LegalRisks";
import { GrowthStrategy } from "@/components/report/GrowthStrategy";
import { RoiCalculation } from "@/components/report/RoiCalculation";
import { BeforeAfterMockups } from "@/components/report/BeforeAfterMockups";
import { RoiCalculator } from "@/components/report/RoiCalculator";
import { Infrastructure } from "@/components/report/Infrastructure";
import { Roadmap } from "@/components/report/Roadmap";

export function ReportTab() {
  return (
    <div className="space-y-4">
      <ExecutiveSummary />
      <TechnicalAudit />
      <SeoAnalysis />
      <UxConversion />
      <BrandContent />
      <BacklinksAnalysis />
      <Competition />
      <SocialMedia />
      <SwotAnalysis />
      <LegalRisks />
      <GrowthStrategy />
      <RoiCalculation />
      <BeforeAfterMockups />
      <RoiCalculator />
      <Infrastructure />
      <Roadmap />
    </div>
  );
}
