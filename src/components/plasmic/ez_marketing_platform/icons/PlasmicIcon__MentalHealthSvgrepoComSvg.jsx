/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MentalHealthSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M11 2a8.002 8.002 0 017.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 01-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.244-3.305A8 8 0 0111 2zm0 2a6 6 0 00-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664-1.543-2.425-.057-.442A6.001 6.001 0 0011 4zm-.53 3.763l.53.53.53-.53a1.75 1.75 0 112.475 2.474L11 13.243l-3.005-3.006a1.75 1.75 0 112.475-2.474z"
        }
      ></path>
    </svg>
  );
}

export default MentalHealthSvgrepoComSvgIcon;
/* prettier-ignore-end */
