import * as React from "react";
import { PlasmicSelect__Overlay } from "./plasmic/ez_marketing_platform/PlasmicSelect__Overlay";

function Select__Overlay_(props, ref) {
  const { plasmicProps } = PlasmicSelect__Overlay.useBehavior(props, ref);
  return <PlasmicSelect__Overlay {...plasmicProps} />;
}

const Select__Overlay = React.forwardRef(Select__Overlay_);

export default Object.assign(Select__Overlay, {
  __plumeType: "triggered-overlay"
});
