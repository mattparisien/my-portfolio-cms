export default {
  type: "object",
  name: "grid",
  title: "Grid",
  fields: [
    {
      title: "Amount of columns",
      name: "cols",
      type: "object",
      fields: [
        {
          type: "number",
          name: "sm",
          title: "Tablet",
        },
        {
          type: "number",
          name: "md",
          title: "Laptop",
        },
        {
          type: "number",
          name: "lg",
          title: "Desktop",
        },
      ],
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [{ type: "gridItem" }],
    },
  ],
};
