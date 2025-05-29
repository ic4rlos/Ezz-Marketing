import * as React from "react";
import { PlasmicSkillInput } from "./plasmic/ez_marketing_platform/PlasmicSkillInput";

function SkillInput_(props, ref) {
  const { plasmicProps } = PlasmicSkillInput.useBehavior(props, ref);
  return <PlasmicSkillInput {...plasmicProps} />;
}

const SkillInput = React.forwardRef(SkillInput_);

export default Object.assign(SkillInput, {
  __plumeType: "text-input"
});
