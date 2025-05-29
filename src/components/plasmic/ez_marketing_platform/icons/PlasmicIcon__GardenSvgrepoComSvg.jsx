/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GardenSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-4.5 0 19 19"}
      className={classNames("plasmic-default__svg", className, "cf-icon-svg")}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.89 16.907a.554.554 0 01-.553.554H1.663a.554.554 0 010-1.108h2.783V14.88a4.157 4.157 0 01-3.007-.89 4.343 4.343 0 01-.878-3.162 4.343 4.343 0 013.163.877 2.953 2.953 0 01.722 1.313V9.77A2.426 2.426 0 111.65 5.806a2.426 2.426 0 113.37-3.37 2.426 2.426 0 113.369 3.37 2.45 2.45 0 01.353.292A2.426 2.426 0 015.554 9.74v4.055a2.952 2.952 0 01.722-1.312 4.343 4.343 0 013.163-.878 4.343 4.343 0 01-.878 3.162 4.156 4.156 0 01-3.007.89v.696h2.783a.554.554 0 01.554.554zM5.019 7.231a1.425 1.425 0 10-1.425-1.425A1.425 1.425 0 005.018 7.23z"
        }
      ></path>
    </svg>
  );
}

export default GardenSvgrepoComSvgIcon;
/* prettier-ignore-end */
