import * as React from "react";
import { PlasmicCourseInput } from "./plasmic/ez_marketing_platform/PlasmicCourseInput";

function CourseInput_(props, ref) {
  const { plasmicProps } = PlasmicCourseInput.useBehavior(props, ref);
  return <PlasmicCourseInput {...plasmicProps} />;
}

const CourseInput = React.forwardRef(CourseInput_);

export default Object.assign(CourseInput, {
  __plumeType: "text-input"
});
