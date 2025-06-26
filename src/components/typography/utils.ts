import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const textSizes = {
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
};

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
};

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
};

export type CommonTextVariants = {
  size?: keyof typeof textSizes;
  weight?: keyof typeof textWeights;
  tone?: keyof typeof textTones;
};

export const sizeOptions = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
] as const;

export const weightOptions = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
  "extrabold",
  "black",
] as const;

export const toneOptions = [
  "default",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
  "muted",
] as const;

export const commonTextArgTypes = {
  size: {
    control: { type: "select" },
    options: sizeOptions,
  },
  weight: {
    control: { type: "select" },
    options: weightOptions,
  },
  tone: {
    control: { type: "select" },
    options: toneOptions,
  },
  children: {
    control: "text",
  },
};

export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
