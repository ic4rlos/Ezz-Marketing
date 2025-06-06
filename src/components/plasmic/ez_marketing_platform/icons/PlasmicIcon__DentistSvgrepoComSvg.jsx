/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DentistSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 50 50"}
      version={"1.2"}
      baseProfile={"tiny"}
      overflow={"inherit"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.847 27.268c3.547 0 5.191 2.69 5.536 6.512.081.914-.001 2.247-.12 3.791C29.865 42.699 29.407 49 32.82 49c2.89 0 4.371-5.54 5.229-11.856.826-6.252-.051-9.363.382-12.14.821-5.26 5.412-9.976 3.994-16.683-.786-3.721-2.836-5.47-4.864-6.207-4.674-1.701-7.694 1.577-12.714 1.577-5.019 0-8.037-3.278-12.713-1.577-2.027.736-4.078 2.486-4.866 6.207-1.415 6.707 3.175 11.422 3.999 16.683.429 2.776-.443 5.888.382 12.14C12.505 43.46 13.989 49 16.876 49c3.411 0 2.956-6.301 2.558-11.429-.116-1.545-.204-2.878-.121-3.792.344-3.821 2.012-6.511 5.534-6.511z"
        }
      ></path>
    </svg>
  );
}

export default DentistSvgrepoComSvgIcon;
/* prettier-ignore-end */
