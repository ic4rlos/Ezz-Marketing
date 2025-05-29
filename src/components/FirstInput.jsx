import * as React from "react";
import { PlasmicFirstInput } from "./plasmic/ez_marketing_platform/PlasmicFirstInput";

function FirstInput_(props, ref) {
  const { plasmicProps } = PlasmicFirstInput.useBehavior(props, ref);
  return <PlasmicFirstInput {...plasmicProps} />;
}

const FirstInput = React.forwardRef(FirstInput_);

export default Object.assign(FirstInput, {
  __plumeType: "text-input"
});
