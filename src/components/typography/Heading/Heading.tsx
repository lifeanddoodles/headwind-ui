import { cva } from "class-variance-authority";
import { JSX, ReactNode } from "react";
import {
  CommonTextVariants,
  mergeClasses,
  textSizes,
  textTones,
  textWeights,
} from "../utils";

const headingLevels = [1, 2, 3, 4, 5, 6] as const;

type HeadingLevel = (typeof headingLevels)[number];

type HeadingProps = {
  children: ReactNode;
  level?: HeadingLevel;
  className?: string;
} & CommonTextVariants;

const headingClasses = cva("font-sans", {
  variants: {
    size: textSizes,
    weight: textWeights,
    tone: textTones,
  },
  defaultVariants: {
    size: "3xl",
    weight: "bold",
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
  return (
    <Tag
      className={mergeClasses(
        headingClasses({ size, weight, tone }),
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const H1 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={1} size="4xl" {...props}>
    {children}
  </Heading>
);

export const H2 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={2} size="3xl" {...props}>
    {children}
  </Heading>
);

export const H3 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={3} size="2xl" {...props}>
    {children}
  </Heading>
);

export const H4 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={4} size="xl" {...props}>
    {children}
  </Heading>
);

export const H5 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={5} size="lg" {...props}>
    {children}
  </Heading>
);

export const H6 = ({ children, ...props }: Omit<HeadingProps, "level">) => (
  <Heading level={6} size="base" {...props}>
    {children}
  </Heading>
);
