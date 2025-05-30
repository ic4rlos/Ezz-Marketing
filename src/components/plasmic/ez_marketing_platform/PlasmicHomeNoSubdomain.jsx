/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6Q26EfqfPNQuydumhAEs1S
// Component: riDlfWArBNcQ
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Navbar2 from "../../Navbar2"; // plasmic-import: _GNY5Dg_0P1f/component
import LoginButton from "../../LoginButton"; // plasmic-import: sda60oPQ2thQ/component
import FooterSection from "../../FooterSection"; // plasmic-import: V9WWasIOlC1n/component
import { useScreenVariants as useScreenVariantsnnPusS1DHa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nnPus_s1dHa_/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6Q26EfqfPNQuydumhAEs1S/projectcss
import sty from "./PlasmicHomeNoSubdomain.module.css"; // plasmic-import: riDlfWArBNcQ/css
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: ryCzpQv_eaMV/icon
import pexelsPixabay164572JpgUUgUiQrkqkm9 from "./images/pexelsPixabay164572Jpg.jpg"; // plasmic-import: UUgUiQRKQKM9/picture
import logo2SvgVCBiJbBayQXz from "./images/logo2Svg.svg"; // plasmic-import: vCBiJbBayQXz/picture

createPlasmicElementProxy;

export const PlasmicHomeNoSubdomain__VariantProps = new Array();

export const PlasmicHomeNoSubdomain__ArgProps = new Array();

const $$ = {};

function PlasmicHomeNoSubdomain__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnnPusS1DHa()
  });
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
          <Stack__
            as={"div"}
            data-plasmic-name={"headerHeroSection"}
            data-plasmic-override={overrides.headerHeroSection}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerHeroSection)}
          >
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__kR1Y)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: pexelsPixabay164572JpgUUgUiQrkqkm9,
                fullWidth: 3000,
                fullHeight: 2000,
                aspectRatio: undefined
              }}
            />

            <Navbar2
              data-plasmic-name={"navbar2"}
              data-plasmic-override={overrides.navbar2}
              className={classNames("__wab_instance", sty.navbar2)}
            />

            <div className={classNames(projectcss.all, sty.freeBox___8ZuCh)}>
              <div className={classNames(projectcss.all, sty.freeBox__mG6Os)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__giV7T)}
                  displayHeight={"100px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "348px"
                      : "900px"
                  }
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"700px"}
                  loading={"lazy"}
                  src={{
                    src: logo2SvgVCBiJbBayQXz,
                    fullWidth: 297,
                    fullHeight: 210,
                    aspectRatio: undefined
                  }}
                />

                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {
                    "ENTER A NEW ERA OF MARKETING EXCELLENCE WITH EZ MARKETING\u2019S INTEGRATED AND INTELLIGENT PLATFORM"
                  }
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pCMgD
                  )}
                >
                  {
                    "Platform under development, visit the appropriate website for information, your collaboration with waitlist will be very welcome."
                  }
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lm072)}
                >
                  <LoginButton
                    className={classNames(
                      "__wab_instance",
                      sty.loginButton__neWI
                    )}
                    endIcon={
                      <ChevronRightIcon
                        className={classNames(projectcss.all, sty.svg__ljel1)}
                        role={"img"}
                      />
                    }
                    link={`/c-landingpage`}
                    shape={"rounded"}
                    showEndIcon={true}
                    submitsForm={false}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ufNW
                      )}
                    >
                      {"Companies"}
                    </div>
                  </LoginButton>
                  <LoginButton
                    className={classNames(
                      "__wab_instance",
                      sty.loginButton___7Swm2
                    )}
                    color={"softSand"}
                    endIcon={
                      <ChevronRightIcon
                        className={classNames(projectcss.all, sty.svg__hu8Uf)}
                        role={"img"}
                      />
                    }
                    link={`/agency-landingpage`}
                    shape={"rounded"}
                    showEndIcon={true}
                    submitsForm={false}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__eprb0
                      )}
                    >
                      {"Agencies"}
                    </div>
                  </LoginButton>
                </Stack__>
              </div>
            </div>
          </Stack__>
          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "headerHeroSection", "navbar2", "h1", "footerSection"],
  headerHeroSection: ["headerHeroSection", "navbar2", "h1"],
  navbar2: ["navbar2"],
  h1: ["h1"],
  footerSection: ["footerSection"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomeNoSubdomain__ArgProps,
          internalVariantPropNames: PlasmicHomeNoSubdomain__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeNoSubdomain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeNoSubdomain";
  } else {
    func.displayName = `PlasmicHomeNoSubdomain.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeNoSubdomain = Object.assign(
  // Top-level PlasmicHomeNoSubdomain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerHeroSection: makeNodeComponent("headerHeroSection"),
    navbar2: makeNodeComponent("navbar2"),
    h1: makeNodeComponent("h1"),
    footerSection: makeNodeComponent("footerSection"),
    // Metadata about props expected for PlasmicHomeNoSubdomain
    internalVariantProps: PlasmicHomeNoSubdomain__VariantProps,
    internalArgProps: PlasmicHomeNoSubdomain__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Home",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomeNoSubdomain;
/* prettier-ignore-end */
