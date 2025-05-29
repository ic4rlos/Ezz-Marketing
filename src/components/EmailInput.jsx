import * as React from "react";
import { PlasmicEmailInput } from "./plasmic/ez_marketing_platform/PlasmicEmailInput";

function EmailInput_(props, ref) {
  const { plasmicProps } = PlasmicEmailInput.useBehavior(props, ref);
  return <PlasmicEmailInput {...plasmicProps} />;
}

const EmailInput = React.forwardRef(EmailInput_);

export default Object.assign(EmailInput, {
  __plumeType: "text-input"
});
