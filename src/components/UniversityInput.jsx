import * as React from "react";
import { PlasmicUniversityInput } from "./plasmic/ez_marketing_platform/PlasmicUniversityInput";

function UniversityInput_(props, ref) {
  const { plasmicProps } = PlasmicUniversityInput.useBehavior(props, ref);
  return <PlasmicUniversityInput {...plasmicProps} />;
}

const UniversityInput = React.forwardRef(UniversityInput_);

export default Object.assign(UniversityInput, {
  __plumeType: "text-input"
});
