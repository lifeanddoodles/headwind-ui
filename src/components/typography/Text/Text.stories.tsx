import type { Meta, StoryObj } from "@storybook/react";
import { sizeOptions, toneOptions, weightOptions } from "../utils";
import { Text, textTags } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    as: {
      control: { type: "select" },
      options: textTags,
      description: "HTML text-related element tag (p, span, strong, etc.)",
    },
    size: {
      control: { type: "select" },
      options: sizeOptions,
      description: "Text size",
    },
    weight: {
      control: { type: "select" },
      options: weightOptions,
      description: "Font weight",
    },
    tone: {
      control: { type: "select" },
      options: toneOptions,
      description: "Text color tone",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
  args: {
    children: "Default text tag (p)",
    size: "base",
    weight: "normal",
    tone: "default",
    as: "p",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Span: Story = {
  args: {
    as: "span",
    children: "This is a span element",
  },
};

export const Strong: Story = {
  args: {
    as: "strong",
    children: "This is a strong element",
  },
};
