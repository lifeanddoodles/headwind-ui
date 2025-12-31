import type { Meta, StoryObj } from "@storybook/react";
import { sizeOptions, toneOptions, weightOptions } from "../../../utils";
import { H2 } from "./Heading";

const H2Meta: Meta<typeof H2> = {
  title: "Components/Heading/H2",
  component: H2,
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
    children: "This is an H2",
    tone: "primary",
  },
};

export default H2Meta;
type H2Story = StoryObj<typeof H2>;

export const Default: H2Story = {};
