import { JSX, ReactNode } from "react";

export const baseContainerBgColors = [
  "background",
  "primary",
  "secondary",
  "accent",
  "success",
  "info",
  "warning",
  "danger",
  "muted",
  "transparent",
];

export const basePropSizes = ["none", "small", "medium", "large"];

export type backgroundOption =
  | "background"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "muted"
  | "transparent";
export type marginOption = "none" | "small" | "medium" | "large";
export type paddingOption = "none" | "small" | "medium" | "large";
export type borderOption = "none" | "small" | "medium" | "large";
export type radiusOption = "none" | "small" | "medium" | "large" | "full";

export type BaseContainerProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  bgColor?: backgroundOption;
  margin?: marginOption;
  padding?: paddingOption;
  border?: borderOption;
  radius?: radiusOption;
};

export type contentPlacementOption =
  | "start"
  | "center"
  | "end"
  | "between"
  | "around"
  | "evenly"
  | "stretch"
  | "baseline"
  | "normal";

export type ResponsiveContainerProps = {
  justifyContent?: contentPlacementOption;
  alignItems?: "start" | "center" | "end" | "baseline" | "stretch";
  alignContent?: contentPlacementOption;
};

export type gapOption =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64;

export const breakpointsArray = ["max-sm", "sm", "md", "lg", "xl", "2xl"];

export const getDynamicClass = <T extends string | number>(
  value: T,
  classPrefix: string
) => {
  if (!value) return "";
  return `${classPrefix}-${value}`;
};

export const getResponsiveClasses = <T>(value: T[], classPrefix: string) =>
  value
    .map(
      (arrayItem, idx) => `${breakpointsArray[idx]}:${classPrefix}-${arrayItem}`
    )
    .join(" ");

export const getResponsiveClassesFromMap = <T>(
  value: (keyof T)[],
  classMap: T
) =>
  value
    .map(
      (arrayItem, idx) =>
        `${breakpointsArray[idx]}:${classMap[arrayItem as keyof T]}`
    )
    .join(" ");

export const getClasses = <T extends string | number>(
  value: T | T[],
  classPrefix: string
) => {
  if (Array.isArray(value)) {
    return getResponsiveClasses(value, classPrefix);
  } else {
    return getDynamicClass(value, classPrefix);
  }
};

export const getDynamicClasses = <T extends Record<string, string>>(
  value: keyof T | (keyof T)[],
  classMap: T
) => {
  if (Array.isArray(value)) {
    return getResponsiveClassesFromMap(value, classMap);
  } else {
    return classMap[value];
  }
};
