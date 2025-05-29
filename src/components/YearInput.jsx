import * as React from "react";
import { PlasmicYearInput } from "./plasmic/ez_marketing_platform/PlasmicYearInput";

function YearInput_(props, ref) {
  const { plasmicProps } = PlasmicYearInput.useBehavior(props, ref);
  return <PlasmicYearInput {...plasmicProps} />;
}

const YearInput = React.forwardRef(YearInput_);

export default Object.assign(YearInput, {
  __plumeType: "text-input"
});
