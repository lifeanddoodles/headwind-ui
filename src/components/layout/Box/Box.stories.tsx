import type { Meta, StoryObj } from "@storybook/react";
import { basePropSizes, Box, boxBgColors } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    bgColor: {
      control: { type: "select" },
      options: boxBgColors,
      description: "Background color",
      defaultValue: "background",
    },
    margin: {
      control: { type: "select" },
      options: basePropSizes,
      description: "Margin",
      defaultValue: "none",
    },
    padding: {
      control: { type: "select" },
      options: basePropSizes,
      description: "Padding",
      defaultValue: "none",
    },
    border: {
      control: { type: "select" },
      options: basePropSizes,
      description: "Border",
      defaultValue: "none",
    },
    radius: {
      control: { type: "select" },
      options: basePropSizes,
      description: "Radius",
      defaultValue: "none",
    },
    children: {
      control: "text",
      description: "Box Content",
    },
  },
  args: {
    children: "Box Content",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {};
