import { type ClassValue, clsx } from "clsx";
import { ReactNode } from "react";
import { extendTailwindMerge } from "tailwind-merge";

/* -------------------------------------------------------
 * 💡 1. Centralized Tokens
 * ----------------------------------------------------- */

const createTextScale = <T extends Record<string, string>>(scale: T) => scale;

export const textSizes = createTextScale({
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
  body: "text-body",
});

export const headingSizes = createTextScale({
  smallest: "text-smallest",
  small: "text-small",
  body: "text-body",
  subheading: "text-subheading",
  heading: "text-heading",
  headingLarge: "text-heading-large",
});

export const textWeights = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
} as const;

export const textTones = {
  default: "text-text",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  muted: "text-muted",
} as const;

/* -------------------------------------------------------
 * 💡 2. Typography Types
 * ----------------------------------------------------- */

export type TextSize = keyof typeof textSizes;
export type HeadingSize = keyof typeof headingSizes;
export type TextWeight = keyof typeof textWeights;
export type TextTone = keyof typeof textTones;

export type TextVariants = {
  size?: TextSize;
  weight?: TextWeight;
  tone?: TextTone;
};

export type HeadingVariants = {
  size?: HeadingSize;
  weight?: TextWeight;
  tone?: TextTone;
};

/* -------------------------------------------------------
 * 💡 3. Derived Lists for Controls (no duplicates)
 * ----------------------------------------------------- */

const keys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[];

export const sizeOptions = [...keys(textSizes), ...keys(headingSizes)] as const;

export const weightOptions = keys(textWeights);
export const toneOptions = keys(textTones);

/* -------------------------------------------------------
 * 💡 4. Common ArgTypes for Storybook
 * ----------------------------------------------------- */

export const commonTextArgTypes = {
  size: { control: { type: "select" }, options: sizeOptions },
  weight: { control: { type: "select" }, options: weightOptions },
  tone: { control: { type: "select" }, options: toneOptions },
  children: { control: "text" },
};

/* -------------------------------------------------------
 * 💡 5. Text + Heading Props
 * ----------------------------------------------------- */

export const textTags = [
  "p",
  "span",
  "b",
  "strong",
  "i",
  "em",
  "mark",
  "small",
  "del",
  "ins",
  "sub",
  "sup",
] as const;

export type TextTag = (typeof textTags)[number];

export type TextProps = {
  as?: TextTag;
  children: ReactNode;
  className?: string;
} & TextVariants;

export const headingLevelDefaults = {
  1: { size: "headingLarge", weight: "bold" },
  2: { size: "heading", weight: "semibold" },
  3: { size: "subheading", weight: "semibold" },
  4: { size: "subheading", weight: "medium" },
  5: { size: "body", weight: "medium" },
  6: { size: "body", weight: "medium" },
} as const;

export type HeadingLevel = keyof typeof headingLevelDefaults;

export type HeadingProps = {
  level?: HeadingLevel;
  children: ReactNode;
  className?: string;
} & HeadingVariants;

/* -------------------------------------------------------
 * 💡 6. Tailwind Merge Setup
 * ----------------------------------------------------- */

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        ...Object.values(headingSizes),
        ...Object.values(textSizes),
      ],
    },
  },
});

export function mergeClasses(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
