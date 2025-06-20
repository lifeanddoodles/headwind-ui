import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Heading } from "./Heading";

describe("Heading", () => {
  test("renders correctly", () => {
    render(<Heading>Heading</Heading>);

    const element = screen.getByRole("heading", {
      level: 2,
    }) as HTMLHeadingElement;
    expect(element).toBeInTheDocument();
  });

  test("has correct level", () => {
    render(<Heading level={1}>Heading</Heading>);

    const element = screen.getByRole("heading", {
      level: 1,
    }) as HTMLHeadingElement;
    // expect(element).toBeInTheDocument();
  });
});
