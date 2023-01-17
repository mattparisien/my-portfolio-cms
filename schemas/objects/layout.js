const gutterSizes = [
  {
    title: "Extra small",
    value: "xs",
  },
  {
    title: "Small",
    value: "sm",
  },
  {
    title: "Medium",
    value: "md",
  },
  {
    title: "Large",
    value: "lg",
  },
  {
    title: "Extra large",
    value: "xl",
  },
];

export default {
  name: "layout",
  title: "Layout",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Layout name",
      type: "string",
      description: "Layout name (only used internally)",
    },
    {
      title: "Gutter",
      name: "gutter",
      type: "string",
      options: {
        list: [...gutterSizes],
      },
      description: "This gutter is only applied to the bottom of the layout (as a margin)",
    },
    {
      title: "Layout Items",
      name: "items",
      type: "array",
      of: [{ type: "layoutItem" }],
    },
  ],
};
