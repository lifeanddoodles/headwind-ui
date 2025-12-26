import type { Meta, StoryObj } from "@storybook/react";
import { sizeOptions, toneOptions, weightOptions } from "../utils";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
      description: "HTML heading level (h1 - h6)",
      defaultValue: 2,
    },
    size: {
      control: { type: "select" },
      options: sizeOptions,
      description: "Text size",
      defaultValue: "heading",
    },
    weight: {
      control: { type: "select" },
      options: weightOptions,
      description: "Font weight",
      defaultValue: "semibold",
    },
    tone: {
      control: { type: "select" },
      options: toneOptions,
      description: "Text color tone",
    },
    children: {
      control: "text",
      description: "Heading content",
    },
  },
  args: {
    children: "Heading Example",
    level: 2,
    size: "heading",
    weight: "semibold",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};
