import { cva } from "class-variance-authority";
import { mergeClasses } from "../../../utils";
import {
  BaseContainer,
  BaseContainerProps,
} from "../BaseContainer/BaseContainer";

export type ResponsiveContainerProps = {
  justifyContent?: "start" | "center" | "end";
  alignItems?: "start" | "center" | "end";
  alignContent?: "start" | "center" | "end";
};

export type spacingOption = "none" | "small" | "medium" | "large";

type BoxProps = {
  spacing?: spacingOption;
  direction?: "horizontal" | "vertical";
  wrap?: "wrap" | "nowrap" | "reverse";
};

const baseContainerClasses = cva("flex", {
  variants: {
    spacing: {
      none: "gap-0",
      small: "gap-2",
      medium: "gap-4",
      large: "gap-8",
    },
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
      reverse: "flex-wrap-reverse",
    },
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      stretch: "justify-stretch",
      baseline: "justify-baseline",
    },
    alignItems: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    alignContent: {
      start: "content-start",
      center: "content-center",
      end: "content-end",
      between: "content-between",
      around: "content-around",
      evenly: "content-evenly",
      stretch: "content-stretch",
      baseline: "content-baseline",
    },
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

export const Box = ({
  children,
  spacing = "small",
  direction = "vertical",
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  as,
  className,
  bgColor = "background",
  margin = "none",
  padding = "none",
  border = "none",
  radius = "none",
}: BoxProps & BaseContainerProps & ResponsiveContainerProps) => {
  return (
    <BaseContainer
      as={as}
      className={mergeClasses(
        baseContainerClasses({
          spacing,
          direction,
          wrap,
          justifyContent,
          alignItems,
          alignContent,
          bgColor,
          margin,
          padding,
          border,
          radius,
        }),
        className
      )}
    >
      {children}
    </BaseContainer>
  );
};
