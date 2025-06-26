import type { Meta, StoryObj } from "@storybook/react";
import { sizeOptions, toneOptions, weightOptions } from "../utils";
import { H1 } from "./Heading";

const H1Meta: Meta<typeof H1> = {
  title: "Components/Heading/H1",
  component: H1,
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
    children: "This is an H1",
    size: "4xl",
    weight: "bold",
    tone: "primary",
  },
};

export default H1Meta;
type H1Story = StoryObj<typeof H1>;

export const Default: H1Story = {};
