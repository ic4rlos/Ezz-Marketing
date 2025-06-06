/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ManSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 64 64"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M62.242 47.758l.014-.014a47.843 47.843 0 00-20.491-9.722A13.951 13.951 0 0046 28a3 3 0 003-3v-2c0-.886-.391-1.673-1-2.222V12c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v8.778c-.609.549-1 1.336-1 2.222v2a3 3 0 003 3c0 3.932 1.626 7.479 4.236 10.022a47.847 47.847 0 00-20.492 9.722l.014.014A5.981 5.981 0 000 52v8c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4v-8a5.981 5.981 0 00-1.758-4.242zM20 28v-1a1 1 0 00-1-1h-1a1 1 0 01-1-1v-2a1 1 0 011-1h1a1 1 0 001-1v-2a4 4 0 014-4 5.99 5.99 0 005-2.687A5.99 5.99 0 0034 15h6a4 4 0 014 4v2a1 1 0 001 1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1a1 1 0 00-1 1v1c0 6.627-5.373 12-12 12s-12-5.373-12-12zm4.285 11.678C26.498 41.143 29.147 42 32 42s5.502-.857 7.715-2.322c1.66.281 3.297.63 4.892 1.084C41.355 43.983 36.911 46 31.973 46c-4.932 0-9.371-2.011-12.621-5.226a45.713 45.713 0 014.933-1.096z"
          }
        ></path>

        <path
          d={
            "M24.537 21.862c.475.255 1.073.068 1.345-.396.028-.047.298-.466 1.116-.466.808 0 1.096.436 1.111.458a1 1 0 001.778-.916C29.592 19.969 28.651 19 26.998 19c-1.691 0-2.618.983-2.9 1.564a.98.98 0 00.439 1.298zm10.002 0c.475.255 1.073.068 1.345-.396.028-.047.298-.466 1.116-.466.808 0 1.096.436 1.111.458a1 1 0 001.778-.916C39.594 19.969 38.653 19 37 19c-1.691 0-2.618.983-2.9 1.564a.98.98 0 00.439 1.298z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default ManSvgrepoComSvgIcon;
/* prettier-ignore-end */
