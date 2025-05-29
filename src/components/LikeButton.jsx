import * as React from "react";
import { PlasmicLikeButton } from "./plasmic/ez_marketing_platform/PlasmicLikeButton";

function LikeButton_(props, ref) {
  const { plasmicProps } = PlasmicLikeButton.useBehavior(props, ref);
  return <PlasmicLikeButton {...plasmicProps} />;
}

const LikeButton = React.forwardRef(LikeButton_);

export default Object.assign(LikeButton, { __plumeType: "button" });
