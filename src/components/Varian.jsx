import * as React from "react";
import { PlasmicVarian } from "./plasmic/ez_marketing_platform/PlasmicVarian";

function Varian_(props, ref) {
  const { plasmicProps } = PlasmicVarian.useBehavior(props, ref);
  return <PlasmicVarian {...plasmicProps} />;
}

const Varian = React.forwardRef(Varian_);

export default Object.assign(Varian, {
  __plumeType: "text-input"
});
