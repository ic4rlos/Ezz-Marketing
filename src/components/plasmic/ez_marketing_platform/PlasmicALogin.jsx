/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6Q26EfqfPNQuydumhAEs1S
// Component: P_MZRcmccBhJ
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import EmailInput from "../../EmailInput"; // plasmic-import: N6jiyqjMi6tf/component
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import LoginButton from "../../LoginButton"; // plasmic-import: sda60oPQ2thQ/component
import SignInWithGoogle from "../../SignInWithGoogle"; // plasmic-import: pdJUvKFGWmE5/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6Q26EfqfPNQuydumhAEs1S/projectcss
import sty from "./PlasmicALogin.module.css"; // plasmic-import: P_MZRcmccBhJ/css
import UserSvgIcon from "./icons/PlasmicIcon__UserSvg"; // plasmic-import: QfOtDDpLKgTV/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: W2ddCaRfBmfX/icon
import LockSvgIcon from "./icons/PlasmicIcon__LockSvg"; // plasmic-import: 0W062V06ICFz/icon
import ezMarketingLogoPngFt2WpZsjyVq from "./images/ezMarketingLogoPng.png"; // plasmic-import: FT2WP-ZsjyVq/picture

createPlasmicElementProxy;

export const PlasmicALogin__VariantProps = new Array();

export const PlasmicALogin__ArgProps = new Array(
  "eMailInput2",
  "passwordInput4"
);

const $$ = {};

function PlasmicALogin__RenderFunc(props) {
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
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"68px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"auto"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"502px"}
            loading={"lazy"}
            src={{
              src: ezMarketingLogoPngFt2WpZsjyVq,
              fullWidth: 2891,
              fullHeight: 393,
              aspectRatio: undefined
            }}
          />

          <div
            data-plasmic-name={"rectangle"}
            data-plasmic-override={overrides.rectangle}
            className={classNames(projectcss.all, sty.rectangle)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oj4Zb
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h6
                    data-plasmic-name={"h6"}
                    data-plasmic-override={overrides.h6}
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6
                    )}
                  >
                    {"Login"}
                  </h6>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ijTjq)}>
              <UserSvgIcon
                className={classNames(projectcss.all, sty.svg__hS4)}
                role={"img"}
              />

              {renderPlasmicSlot({
                defaultContents: (
                  <EmailInput
                    className={classNames(
                      "__wab_instance",
                      sty.emailInput__mvTgd
                    )}
                    endIcon={
                      <CheckSvgIcon
                        className={classNames(projectcss.all, sty.svg__vTgu9)}
                        role={"img"}
                      />
                    }
                  />
                ),

                value: args.eMailInput2
              })}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___6Vnje)}>
              <LockSvgIcon
                className={classNames(projectcss.all, sty.svg___04EOe)}
                role={"img"}
              />

              {renderPlasmicSlot({
                defaultContents: (() => {
                  const child$Props = {
                    className: classNames(
                      "__wab_instance",
                      sty.passwordInput__cMyA0
                    )
                  };
                  return <AntdPassword {...child$Props} />;
                })(),
                value: args.passwordInput4,
                className: classNames(sty.slotTargetPasswordInput4)
              })}
            </div>
            <PlasmicLink__
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__kU5Nm
              )}
              href={"https://www.plasmic.app/"}
              platform={"react"}
            >
              {"Forgot password?"}
            </PlasmicLink__>
            <LoginButton
              data-plasmic-name={"loginButton"}
              data-plasmic-override={overrides.loginButton}
              className={classNames("__wab_instance", sty.loginButton)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__x3UVt
                )}
              >
                {"Login"}
              </div>
            </LoginButton>
            <SignInWithGoogle
              data-plasmic-name={"signInWithGoogle"}
              data-plasmic-override={overrides.signInWithGoogle}
              className={classNames("__wab_instance", sty.signInWithGoogle)}
            />

            <div
              data-plasmic-name={"createAccount"}
              data-plasmic-override={overrides.createAccount}
              className={classNames(projectcss.all, sty.createAccount)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__txcLk
                )}
              >
                {"New to Ez Marketing?"}
              </div>
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__jwEo
                )}
                onClick={async event => {
                  const $steps = {};
                  $steps["goToACreateAccount"] = true
                    ? (() => {
                        const actionArgs = { destination: `/a-create account` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            location.assign(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToACreateAccount"] != null &&
                    typeof $steps["goToACreateAccount"] === "object" &&
                    typeof $steps["goToACreateAccount"].then === "function"
                  ) {
                    $steps["goToACreateAccount"] = await $steps[
                      "goToACreateAccount"
                    ];
                  }
                }}
                platform={"react"}
              >
                {"Create account"}
              </PlasmicLink__>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "img",
    "rectangle",
    "h6",
    "loginButton",
    "signInWithGoogle",
    "createAccount"
  ],

  img: ["img"],
  rectangle: [
    "rectangle",
    "h6",
    "loginButton",
    "signInWithGoogle",
    "createAccount"
  ],

  h6: ["h6"],
  loginButton: ["loginButton"],
  signInWithGoogle: ["signInWithGoogle"],
  createAccount: ["createAccount"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicALogin__ArgProps,
          internalVariantPropNames: PlasmicALogin__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicALogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicALogin";
  } else {
    func.displayName = `PlasmicALogin.${nodeName}`;
  }
  return func;
}

export const PlasmicALogin = Object.assign(
  // Top-level PlasmicALogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    rectangle: makeNodeComponent("rectangle"),
    h6: makeNodeComponent("h6"),
    loginButton: makeNodeComponent("loginButton"),
    signInWithGoogle: makeNodeComponent("signInWithGoogle"),
    createAccount: makeNodeComponent("createAccount"),
    // Metadata about props expected for PlasmicALogin
    internalVariantProps: PlasmicALogin__VariantProps,
    internalArgProps: PlasmicALogin__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Login",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicALogin;
/* prettier-ignore-end */
