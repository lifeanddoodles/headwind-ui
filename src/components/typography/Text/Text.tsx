import { cva } from "class-variance-authority";
import {
  TextProps,
  mergeClasses,
  textSizes,
  textTones,
  textWeights,
} from "../../../utils";

const textClasses = cva("font-sans", {
  variants: {
    size: textSizes,
    weight: textWeights,
    tone: textTones,
  },
  defaultVariants: {
    size: "body",
    weight: "normal",
    tone: "default",
  },
});

export const Text = ({
  children,
  as = "p",
  className,
  size = "body",
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
