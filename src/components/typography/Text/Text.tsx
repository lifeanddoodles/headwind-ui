import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import {
  CommonTextVariants,
  mergeClasses,
  textSizes,
  textTones,
  textWeights,
} from "../utils";

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

type TextTag = (typeof textTags)[number];

type TextProps = {
  children: ReactNode;
  as?: TextTag;
  className?: string;
} & CommonTextVariants;

const textClasses = cva("font-sans", {
  variants: {
    size: textSizes,
    weight: textWeights,
    tone: textTones,
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    tone: "default",
  },
});

export const Text = ({
  children,
  as = "p",
  className,
  size,
  weight,
  tone,
}: TextProps) => {
  const Tag = as;
  return (
    <Tag
      className={mergeClasses(textClasses({ size, weight, tone }), className)}
    >
      {children}
    </Tag>
  );
};
