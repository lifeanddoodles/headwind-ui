import type { Meta, StoryObj } from "@storybook/react";
import { basePropSizes } from "../BaseContainer/BaseContainer";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    spacing: {
      control: { type: "select" },
      options: basePropSizes,
      description: "Spacing",
      defaultValue: "none",
    },
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Direction",
      defaultValue: "horizontal",
    },
    wrap: {
      control: { type: "select" },
      options: ["wrap", "nowrap", "reverse"],
      description: "Wrap",
      defaultValue: "wrap",
    },
    justifyContent: {
      control: { type: "select" },
      options: [
        "start",
        "center",
        "end",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      description: "Justify Content",
      defaultValue: "start",
    },
    alignItems: {
      control: { type: "select" },
      options: ["start", "center", "end", "baseline", "stretch"],
      description: "Align Items",
      defaultValue: "start",
    },
    alignContent: {
      control: { type: "select" },
      options: [
        "start",
        "center",
        "end",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
      ],
      description: "Align Content",
      defaultValue: "start",
    },
    children: { table: { disable: true } },
    as: { table: { disable: true } },
    bgColor: { table: { disable: true } },
    margin: { table: { disable: true } },
    padding: { table: { disable: true } },
    border: { table: { disable: true } },
    radius: { table: { disable: true } },
  },
  args: {
    children: (
      <>
        <p>Short text</p>
        <p>Text with a little greater length</p>
        <p>
          Super long text prone to overflow inside containers and break layout
        </p>
      </>
    ),
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {};
