import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  test("renders correctly", () => {
    render(<Text>This is a paragraph</Text>);

    const element = screen.getByText("This is a paragraph");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("P");
  });

  test("has correct tag", () => {
    render(<Text as="span">This is a span</Text>);

    const element = screen.getByText("This is a span");
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toBe("SPAN");
  });
});
