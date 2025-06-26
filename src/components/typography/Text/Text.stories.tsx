import type { Meta, StoryObj } from "@storybook/react";
import { Text, textTags } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    as: {
      control: { type: "select", options: textTags },
      description: "HTML text-related element tag (h1 - h6)",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Default text tag (p)",
  },
};

export const Span: Story = {
  args: {
    as: "span",
    children: "This is a span",
  },
};

export const Strong: Story = {
  args: {
    as: "strong",
    children: "This is strong text",
  },
};
