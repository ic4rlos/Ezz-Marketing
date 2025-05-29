import * as React from "react";
import { PlasmicSignInWithGoogle } from "./plasmic/ez_marketing_platform/PlasmicSignInWithGoogle";

function SignInWithGoogle_(props, ref) {
  const { plasmicProps } = PlasmicSignInWithGoogle.useBehavior(props, ref);
  return <PlasmicSignInWithGoogle {...plasmicProps} />;
}

const SignInWithGoogle = React.forwardRef(SignInWithGoogle_);

export default Object.assign(SignInWithGoogle, { __plumeType: "button" });
