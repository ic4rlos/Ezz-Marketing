import * as React from "react";
import { PlasmicLastInput } from "./plasmic/ez_marketing_platform/PlasmicLastInput";

function LastInput_(props, ref) {
  const { plasmicProps } = PlasmicLastInput.useBehavior(props, ref);
  return <PlasmicLastInput {...plasmicProps} />;
}

const LastInput = React.forwardRef(LastInput_);

export default Object.assign(LastInput, {
  __plumeType: "text-input"
});
