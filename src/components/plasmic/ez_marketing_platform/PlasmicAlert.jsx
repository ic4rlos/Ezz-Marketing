/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6Q26EfqfPNQuydumhAEs1S
// Component: IT8Nwur5v0WR
import * as React from "react";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6Q26EfqfPNQuydumhAEs1S/projectcss
import sty from "./PlasmicAlert.module.css"; // plasmic-import: IT8Nwur5v0WR/css
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: in8XhrUU15uu/icon

createPlasmicElementProxy;

export const PlasmicAlert__VariantProps = new Array(
  "noIcon",
  "noHeader",
  "noBody"
);

export const PlasmicAlert__ArgProps = new Array("icon", "header", "body");

const $$ = {};

function PlasmicAlert__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "noIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noIcon
      },
      {
        path: "noHeader",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noHeader
      },
      {
        path: "noBody",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noBody
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        { [sty.rootnoBody]: hasVariant($state, "noBody", "noBody") }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___9F86B, {
          [sty.freeBoxnoBody___9F86BK1Hci]: hasVariant(
            $state,
            "noBody",
            "noBody"
          ),
          [sty.freeBoxnoHeader___9F86BjAYuR]: hasVariant(
            $state,
            "noHeader",
            "noHeader"
          ),
          [sty.freeBoxnoIcon___9F86B7Xf2X]: hasVariant(
            $state,
            "noIcon",
            "noIcon"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox___3NkY8, {
            [sty.freeBoxnoIcon___3NkY87Xf2X]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <Icon12Icon
                className={classNames(projectcss.all, sty.svg___3TEy3)}
                role={"img"}
              />
            ),

            value: args.icon
          })}
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rpAvE, {
            [sty.freeBoxnoHeader__rpAvEjAYuR]: hasVariant(
              $state,
              "noHeader",
              "noHeader"
            ),
            [sty.freeBoxnoIcon__rpAvE7Xf2X]: hasVariant(
              $state,
              "noIcon",
              "noIcon"
            )
          })}
        >
          <h6
            data-plasmic-name={"h6"}
            data-plasmic-override={overrides.h6}
            className={classNames(projectcss.all, projectcss.h6, sty.h6, {
              [sty.h6noHeader]: hasVariant($state, "noHeader", "noHeader"),
              [sty.h6noIcon]: hasVariant($state, "noIcon", "noIcon")
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Heads up!",
              value: args.header
            })}
          </h6>
          <div
            className={classNames(projectcss.all, sty.freeBox__fwfwC, {
              [sty.freeBoxnoBody__fwfwCk1Hci]: hasVariant(
                $state,
                "noBody",
                "noBody"
              ),
              [sty.freeBoxnoHeader__fwfwCjAYuR]: hasVariant(
                $state,
                "noHeader",
                "noHeader"
              )
            })}
          >
            {renderPlasmicSlot({
              defaultContents:
                "Here is the body text description for the alert!",
              value: args.body
            })}
          </div>
        </Stack__>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "h6"],
  h6: ["h6"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAlert__ArgProps,
          internalVariantPropNames: PlasmicAlert__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAlert__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAlert";
  } else {
    func.displayName = `PlasmicAlert.${nodeName}`;
  }
  return func;
}

export const PlasmicAlert = Object.assign(
  // Top-level PlasmicAlert renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h6: makeNodeComponent("h6"),
    // Metadata about props expected for PlasmicAlert
    internalVariantProps: PlasmicAlert__VariantProps,
    internalArgProps: PlasmicAlert__ArgProps
  }
);

export default PlasmicAlert;
/* prettier-ignore-end */
