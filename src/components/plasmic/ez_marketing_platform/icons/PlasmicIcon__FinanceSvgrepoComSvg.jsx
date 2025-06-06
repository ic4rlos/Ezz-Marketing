/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FinanceSvgrepoComSvgIcon(props) {
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
          "M43 12H0v26h50V12h-7zm5 19.271A6.7 6.7 0 0043.271 36H6.729A6.703 6.703 0 002 31.271V18.729A6.703 6.703 0 006.729 14h36.565A7.007 7.007 0 0048 18.706v12.565zm-20.884-4.216c-.23-.14-.116-.269-1.116-.388v2.897l.548-.102c.742-.26 1.114-.745 1.114-1.451 0-.409-.183-.731-.546-.956zm-4.501-4.727c0 .445.203.78.607 1 .155.087.416.184.777.289v-2.741a2.394 2.394 0 00-.769.315c-.41.272-.615.652-.615 1.137zM25 15c-4.971 0-9 4.478-9 10 0 5.521 4.029 10 9 10s9-4.479 9-10c0-5.522-4.029-10-9-10zm3.854 15.654c-.679.58-1.854.935-2.854 1.069V33h-2v-1.3c-1.044-.142-1.909-.3-2.588-.835A3.72 3.72 0 0120 28h2.488c.081 0 .239.801.475 1.084.245.291.593.325 1.037.448v-3.405c-1.217-.281-2.065-.584-2.536-.91-.841-.575-1.261-1.476-1.261-2.7 0-1.117.411-2.045 1.234-2.784.628-.565 1.484-.912 2.563-1.046V17h2v1.74c1 .149 1.676.613 2.3 1.076.939.697 1.6 1.184 1.645 3.184h-2.506c-.047-1-.549-1.432-1.172-1.748a2.037 2.037 0 01-.267-.207v3.143l.902.174c.959.226 1.846.528 2.324.905.744.588 1.032 1.437 1.032 2.547.002 1.14-.524 2.086-1.404 2.84z"
        }
      ></path>
    </svg>
  );
}

export default FinanceSvgrepoComSvgIcon;
/* prettier-ignore-end */
