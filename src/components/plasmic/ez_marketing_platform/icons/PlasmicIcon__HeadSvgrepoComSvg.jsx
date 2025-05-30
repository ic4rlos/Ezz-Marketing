/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeadSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 16 16"}
      version={"1.1"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "si-glyph si-glyph-head"
      )}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.001 5.378S.812 1.177 5.145.305c4.333-.872 6.963 1.506 7.35 3.171.387 1.665.575 2.518.387 3.171-.232.317-.155.555.309 1.348.464.793 1.393 1.665.077 1.823-.851.159-.309.713-.309.713s.232.476-.464.555c0 0 .464.872.077.872s-.464.159-.542.476c-.077.317.077 2.061-2.631 1.03-.619-.317-.892.977-1.238 1.744-.208.461-.431 1.09-1.47.634-.927-.407-2.995-1.378-3.771-2.705-.424-.727.693-1.778.151-3.205-.542-1.427-.712-.987-1.254-1.779-.541-.793-.738-1.824-.816-2.775z"
        }
        className={"si-glyph-fill"}
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default HeadSvgrepoComSvgIcon;
/* prettier-ignore-end */
