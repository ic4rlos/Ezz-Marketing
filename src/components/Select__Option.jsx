import * as React from "react";
import { PlasmicSelect__Option } from "./plasmic/ez_marketing_platform/PlasmicSelect__Option";

function Select__Option_(props, ref) {
  const { plasmicProps } = PlasmicSelect__Option.useBehavior(props, ref);
  return <PlasmicSelect__Option {...plasmicProps} />;
}

const Select__Option = React.forwardRef(Select__Option_);

export default Object.assign(Select__Option, {
  __plumeType: "select-option"
});
