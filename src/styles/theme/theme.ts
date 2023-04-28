import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: `30em`, // 480px
  md: `48em`, // 768px
  lg: `62em`, // 992px
  xl: `80em`, // 1280px
  "2xl": `96em`, // 1536px
  "3xl": `104em`, // 1664px
  "4xl": `112em`, // 1792px
});

const fonts = {
  heading: `Abel`,
};

const colors = {
  neutral: {
    900: "#303030",
    800: "#545454",
    700: "#7E7E7E",
    600: "#9E9E9E",
    500: "#C1C1C1",
    400: "#DADADA",
    300: "#EBEBEB",
    200: "#F3F3F3",
    100: "#FAFAFA",
  },
};

const sizes = {
  "112": `28rem`,
};

const textStyles = {
  "heading-3xs": {
    fontSize: `0.5rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
  },
  "heading-2xs": {
    fontSize: `0.625rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
  },
  "heading-xs": {
    fontSize: `0.75rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
  },
  "heading-sm": {
    fontSize: `0.875rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
  },
  "heading-md": {
    fontSize: `1rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
  },
  "heading-lg": {
    fontSize: `1.125rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
  },
  "heading-xl": {
    fontSize: `1.25rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "heading-2xl": {
    fontSize: `1.5rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "heading-3xl": {
    fontSize: `1.875rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "heading-4xl": {
    fontSize: `2.25rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "heading-5xl": {
    fontSize: `3rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "heading-6xl": {
    fontSize: `3.75rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "heading-7xl": {
    fontSize: `4.5rem`,
    fontWeight: `medium`,
    fontFamily: `heading`,
    lineHeight: `shorter`,
  },
  "text-3xs": {
    fontSize: `0.5rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-2xs": {
    fontSize: `0.625rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-xs": {
    fontSize: `0.75rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-sm": {
    fontSize: `0.875rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-md": {
    fontSize: `1rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-lg": {
    fontSize: `1.125rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-xl": {
    fontSize: `1.25rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-2xl": {
    fontSize: `1.5rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-3xl": {
    fontSize: `1.875rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-4xl": {
    fontSize: `2.25rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-5xl": {
    fontSize: `3rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-6xl": {
    fontSize: `3.75rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
  "text-7xl": {
    fontSize: `4.5rem`,
    fontWeight: `normal`,
    fontFamily: `body`,
  },
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  textStyles,
  sizes,
});
