import { cva } from "class-variance-authority";
import { mergeClasses } from "../../../utils";
import {
  BaseContainer,
  baseContainerClasses,
} from "../BaseContainer/BaseContainer";
import {
  BaseContainerProps,
  gapOption,
  getDynamicClasses,
  getResponsiveClasses,
  ResponsiveContainerProps,
} from "../layoutUtils";

// gridTemplateColumns
// gridTemplateRows
// gridTemplateAreas
type GridProps = {
  autoRows?: "auto" | "min" | "max" | "fr";
  autoCols?: "auto" | "min" | "max" | "fr";
  autoFlow?: "row" | "column" | "row dense" | "column dense";
  columns?: number | number[];
  gap?: gapOption | gapOption[];
  rows?: number | number[];
};

const columnClassesMap: { [key: number]: string } = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
};

const rowsClassesMap: { [key: number]: string } = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  7: "grid-rows-7",
  8: "grid-rows-8",
  9: "grid-rows-9",
  10: "grid-rows-10",
  11: "grid-rows-11",
  12: "grid-rows-12",
};

const gridClasses = cva("grid", {
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
    autoFlow: {
      row: "grid-flow-row",
      column: "grid-flow-col",
      "row dense": "grid-flow-row-dense",
      "column dense": "grid-flow-col-dense",
    },
    autoCols: {
      auto: "auto-cols-auto",
      min: "auto-cols-min",
      max: "auto-cols-max",
      fr: "auto-cols-fr",
    },
    autoRows: {
      auto: "auto-rows-auto",
      min: "auto-rows-min",
      max: "auto-rows-max",
      fr: "auto-rows-fr",
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
  },
});

export const Grid = ({
  children,
  columns,
  gap,
  rows,
  autoFlow,
  autoCols,
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
}: GridProps & BaseContainerProps & ResponsiveContainerProps) => {
  let gapArrayClasses;
  if (Array.isArray(gap)) {
    gapArrayClasses = getResponsiveClasses(gap, "gap");
  }
  const columnsClasses = getDynamicClasses(columns || 1, columnClassesMap);
  const rowsClasses = getDynamicClasses(rows || 1, rowsClassesMap);
  return (
    <BaseContainer
      as={as}
      className={mergeClasses(
        baseContainerClasses({ bgColor, margin, padding, border, radius }),
        gridClasses({
          gap: Array.isArray(gap) ? undefined : gap,
          autoFlow,
          autoCols,
          justifyContent: justifyContent || "start",
          alignItems,
          alignContent,
        }),
        gapArrayClasses,
        columnsClasses,
        rowsClasses,
        className
      )}
    >
      {children}
    </BaseContainer>
  );
};
