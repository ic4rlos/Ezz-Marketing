import * as React from "react";
import { PlasmicDialogoButton } from "./plasmic/ez_marketing_platform/PlasmicDialogoButton";

function DialogoButton_(props, ref) {
  const { plasmicProps } = PlasmicDialogoButton.useBehavior(props, ref);
  return <PlasmicDialogoButton {...plasmicProps} />;
}

const DialogoButton = React.forwardRef(DialogoButton_);

export default Object.assign(DialogoButton, { __plumeType: "button" });
