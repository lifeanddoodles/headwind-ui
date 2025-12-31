import { cva } from "class-variance-authority";
import { mergeClasses } from "../../../utils";
import {
  BaseContainer,
  BaseContainerProps,
  baseContainerClasses,
} from "../BaseContainer/BaseContainer";

export type ResponsiveContainerProps = {
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | "baseline"
    | "normal";
  alignItems?: "start" | "center" | "end" | "baseline" | "stretch";
  alignContent?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | "baseline"
    | "normal";
};

export type spacingOption = "none" | "small" | "medium" | "large";

type BoxProps = {
  spacing?: spacingOption;
  direction?: "horizontal" | "vertical";
  wrap?: "wrap" | "nowrap" | "reverse";
};

const boxClasses = cva("flex", {
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
      normal: "justify-normal",
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
      normal: "content-normal",
    },
  },
  defaultVariants: {
    spacing: "none",
    direction: "vertical",
    wrap: "wrap",
  },
});

export const Box = ({
  children,
  spacing = "small",
  direction = "vertical",
  wrap = "wrap",
  justifyContent,
  alignItems,
  alignContent,
  as,
  className,
  bgColor = "transparent",
  margin = "none",
  padding = "none",
  border = "none",
  radius = "none",
}: BoxProps & BaseContainerProps & ResponsiveContainerProps) => {
  return (
    <BaseContainer
      as={as}
      className={mergeClasses(
        baseContainerClasses({ bgColor, margin, padding, border, radius }),
        boxClasses({
          spacing,
          direction,
          wrap,
          justifyContent: justifyContent || "start",
          alignItems:
            alignItems || direction === "vertical" ? "start" : "stretch",
          alignContent:
            alignContent || direction === "vertical" ? "start" : "normal",
        }),
        className
      )}
    >
      {children}
    </BaseContainer>
  );
};
