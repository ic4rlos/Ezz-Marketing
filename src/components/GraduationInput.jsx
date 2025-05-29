import * as React from "react";
import { PlasmicGraduationInput } from "./plasmic/ez_marketing_platform/PlasmicGraduationInput";

function GraduationInput_(props, ref) {
  const { plasmicProps } = PlasmicGraduationInput.useBehavior(props, ref);
  return <PlasmicGraduationInput {...plasmicProps} />;
}

const GraduationInput = React.forwardRef(GraduationInput_);

export default Object.assign(GraduationInput, {
  __plumeType: "text-input"
});
