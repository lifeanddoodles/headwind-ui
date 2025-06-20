import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 6 },
      description: "HTML heading level (h1 - h6)",
    },
    children: {
      control: "text",
      description: "Heading content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Default Heading (h2)",
  },
};

export const H1: Story = {
  args: {
    level: 1,
    children: "Heading H1",
  },
};

export const H3: Story = {
  args: {
    level: 3,
    children: "Heading H3",
  },
};
