import { cva } from "class-variance-authority";
import { mergeClasses } from "../../../utils";
import {
  BaseContainer,
  baseContainerClasses,
} from "../BaseContainer/BaseContainer";
import {
  BaseContainerProps,
  gapOption,
  ResponsiveContainerProps,
} from "../layoutUtils";

type BoxProps = {
  gap?: gapOption;
  direction?: "horizontal" | "vertical";
  wrap?: "wrap" | "nowrap" | "reverse";
};

const boxClasses = cva("flex", {
  variants: {
    gap: {
      0: "gap-0",
      1: "gap-1",
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      5: "gap-5",
      6: "gap-6",
      8: "gap-8",
      10: "gap-10",
      12: "gap-12",
      16: "gap-16",
      20: "gap-20",
      24: "gap-24",
      32: "gap-32",
      40: "gap-40",
      48: "gap-48",
      56: "gap-56",
      64: "gap-64",
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
    gap: 0,
    direction: "vertical",
    wrap: "wrap",
  },
});

export const Box = ({
  children,
  gap = 0,
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
          gap,
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
