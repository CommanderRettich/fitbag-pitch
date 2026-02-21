import { AngebotIntro } from "./AngebotIntro";
import { PhaseOne } from "./PhaseOne";
import { PhaseTwo } from "./PhaseTwo";
import { PhaseThree } from "./PhaseThree";
import { PhaseFour } from "./PhaseFour";
import { PriceSummary } from "./PriceSummary";
import { Timeline } from "./Timeline";
import { WhyUs } from "./WhyUs";

export function AngebotTab() {
  return (
    <div>
      <AngebotIntro />
      <PhaseOne />
      <PhaseTwo />
      <PhaseThree />
      <PhaseFour />
      <PriceSummary />
      <Timeline />
      <WhyUs />
    </div>
  );
}
