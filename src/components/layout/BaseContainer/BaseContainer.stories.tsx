import type { Meta, StoryObj } from "@storybook/react";
import {
  BaseContainer,
  baseContainerBgColors,
  basePropSizes,
} from "./BaseContainer";

const meta: Meta<typeof BaseContainer> = {
  title: "Components/BaseContainer",
  component: BaseContainer,
  argTypes: {
    bgColor: {
      control: { type: "select" },
      options: baseContainerBgColors,
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
      description: "BaseContainer Content",
    },
  },
  args: {
    children: "BaseContainer Content",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BaseContainer>;

export const Default: Story = {};
