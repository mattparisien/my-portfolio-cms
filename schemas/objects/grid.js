export default {
  type: "object",
  name: "grid",
  title: "Grid",
  fields: [
    {
      type: "string",
      name: "style",
      type: "string",
      options: {
        list: ["regular", "masonry"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [{ type: "gridItem" }],
    },
  ],
};
