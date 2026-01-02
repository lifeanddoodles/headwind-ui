import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    columns: {
      control: { type: "number" },
      description: "Number of Columns",
      defaultValue: 1,
    },
    rows: {
      control: { type: "number" },
      description: "Number of Rows",
      defaultValue: 1,
    },
    autoFlow: {
      control: { type: "select" },
      options: ["row", "column", "row-dense", "column-dense"],
      description: "Auto Flow",
      defaultValue: "row",
    },
    autoCols: {
      control: { type: "select" },
      options: ["auto", "min", "max", "fr"],
      description: "Auto Columns",
      // defaultValue: "auto",
    },
    autoRows: {
      control: { type: "select" },
      options: ["auto", "min", "max", "fr"],
      description: "Auto Rows",
      // defaultValue: "auto",
    },
    gap: {
      control: { type: "number" },
      description: "Gap",
      defaultValue: 0,
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
    columns: 3,
    autoFlow: "row",
    // autoCols: "auto",
    // autoRows: "auto",
    children: (
      <>
        <p className="bg-gray-200">Short text</p>
        <p className="bg-gray-300">Text with a little greater length</p>
        <p className="bg-gray-400">
          Super long text prone to overflow inside containers and break layout
        </p>
        <p className="bg-gray-500">Another Short text</p>
        <p className="bg-gray-600">Fifth text</p>
      </>
    ),
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {};
