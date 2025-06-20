import { JSX, ReactNode } from "react";

export const Heading = ({
  children,
  level,
}: {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}) => {
  const Tag = `h${level || 2}` as keyof JSX.IntrinsicElements;
  return <Tag>{children}</Tag>;
};
