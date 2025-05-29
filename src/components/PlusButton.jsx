import * as React from "react";
import { PlasmicPlusButton } from "./plasmic/ez_marketing_platform/PlasmicPlusButton";

function PlusButton_(props, ref) {
  const { plasmicProps } = PlasmicPlusButton.useBehavior(props, ref);
  return <PlasmicPlusButton {...plasmicProps} />;
}

const PlusButton = React.forwardRef(PlusButton_);

export default Object.assign(PlusButton, { __plumeType: "button" });
