import { cva } from "class-variance-authority";
import { JSX } from "react";
import {
  headingLevelDefaults,
  HeadingProps,
  headingSizes,
  mergeClasses,
  textTones,
  textWeights,
} from "../../../utils";

const headingClasses = cva("font-sans", {
  variants: {
    size: headingSizes,
    weight: textWeights,
    tone: textTones,
  },
  defaultVariants: {
    tone: "primary",
  },
});

export const Heading = ({
  children,
  level = 2,
  className,
  size,
  weight,
  tone,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const { weight: defaultWeight, size: defaultSize } =
    headingLevelDefaults[level || 2];

  return (
    <Tag
      className={mergeClasses(
        headingClasses({
          size: size ?? defaultSize,
          weight: weight ?? defaultWeight,
          tone,
        }),
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const H1 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={1} {...props}>
    {children}
  </Heading>
);

export const H2 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={2} {...props}>
    {children}
  </Heading>
);

export const H3 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={3} {...props}>
    {children}
  </Heading>
);

export const H4 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={4} {...props}>
    {children}
  </Heading>
);

export const H5 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={5} {...props}>
    {children}
  </Heading>
);

export const H6 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={6} {...props}>
    {children}
  </Heading>
);
