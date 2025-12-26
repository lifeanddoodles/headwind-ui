import type { Meta, StoryObj } from "@storybook/react";
import { sizeOptions, toneOptions, weightOptions } from "../utils";
import { H3 } from "./Heading";

const H3Meta: Meta<typeof H3> = {
  title: "Components/Heading/H3",
  component: H3,
  argTypes: {
    size: {
      control: { type: "select" },
      options: sizeOptions,
    },
    weight: {
      control: { type: "select" },
      options: weightOptions,
    },
    tone: {
      control: { type: "select" },
      options: toneOptions,
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "This is an H3",
    tone: "primary",
  },
};

export default H3Meta;
type H3Story = StoryObj<typeof H3>;

export const Default: H3Story = {};
