import { KonzeptIntro } from "./KonzeptIntro";
import { FixCaching } from "./FixCaching";
import { FixH1 } from "./FixH1";
import { FixHreflang } from "./FixHreflang";
import { AddSchemaOrg } from "./AddSchemaOrg";
import { WebPConversion } from "./WebPConversion";
import { FixNewsletter } from "./FixNewsletter";
import { MobileStickyCtA } from "./MobileStickyCtA";
import { ConfiguratorConcept } from "./ConfiguratorConcept";

export function KonzeptTab() {
  return (
    <div>
      <KonzeptIntro />
      <FixCaching />
      <FixH1 />
      <FixHreflang />
      <AddSchemaOrg />
      <WebPConversion />
      <FixNewsletter />
      <MobileStickyCtA />
      <ConfiguratorConcept />
    </div>
  );
}
