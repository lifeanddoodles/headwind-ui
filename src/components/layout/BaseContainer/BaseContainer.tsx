import { cva } from "class-variance-authority";
import { mergeClasses } from "../../../utils";
import { BaseContainerProps } from "../layoutUtils";

export const baseContainerClasses = cva("", {
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
      transparent: "bg-transparent color-text",
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
