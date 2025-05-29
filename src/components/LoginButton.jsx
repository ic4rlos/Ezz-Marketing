import * as React from "react";
import { PlasmicLoginButton } from "./plasmic/ez_marketing_platform/PlasmicLoginButton";

function LoginButton_(props, ref) {
  const { plasmicProps } = PlasmicLoginButton.useBehavior(props, ref);
  return <PlasmicLoginButton {...plasmicProps} />;
}

const LoginButton = React.forwardRef(LoginButton_);

export default Object.assign(LoginButton, { __plumeType: "button" });
