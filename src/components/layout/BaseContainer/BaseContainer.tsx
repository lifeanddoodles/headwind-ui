import { cva } from "class-variance-authority";
import { JSX, ReactNode } from "react";
import { mergeClasses } from "../../../utils";

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
  | "muted";
export type marginOption = "none" | "small" | "medium" | "large";
export type paddingOption = "none" | "small" | "medium" | "large";
export type borderOption = "none" | "small" | "medium" | "large";
export type radiusOption = "none" | "small" | "medium" | "large";

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

const baseContainerClasses = cva("", {
  variants: {
    bgColor: {
      background: "bg-background color-text",
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      success: "bg-success",
      info: "bg-info",
      warning: "bg-warning",
      danger: "bg-danger",
      muted: "bg-muted",
    },
    margin: {
      none: "m-0",
      small: "m-2",
      medium: "m-4",
      large: "m-8",
    },
    padding: {
      none: "p-0",
      small: "p-2",
      medium: "p-4",
      large: "p-8",
    },
    border: {
      none: "border-0",
      small: "border-2",
      medium: "border-4",
      large: "border-8",
    },
    radius: {
      none: "rounded-none",
      small: "rounded-sm",
      medium: "rounded-md",
      large: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    bgColor: "background",
    margin: "none",
    padding: "none",
    border: "none",
    radius: "none",
  },
});

export const BaseContainer = ({
  children,
  as = "div",
  className,
  bgColor = "background",
  margin = "none",
  padding = "none",
  border = "none",
  radius = "none",
}: BaseContainerProps) => {
  const ComponentTag = as;
  return (
    <ComponentTag
      className={mergeClasses(
        baseContainerClasses({ bgColor, margin, padding, border, radius }),
        className
      )}
    >
      {children}
    </ComponentTag>
  );
};
