export default {
  title: "Grid Item",
  name: "gridItem",
  type: "object",
  fields: [
    {
      name: "colSpan",
      title: "Column span",
      type: "string",
    },

    {
      name: "rowSpan",
      title: "Row span",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      type: "array",
      name: "module",
      title: "Module",
      of: [{ type: "figure" }],
      validation: (Rule) => Rule.max(1),
    },
  ],
  preview: {
    select: {
      title: "module[0].type",
      subtitle: "module[0].aspect",
      media: "module[0].image.asset",
    },
  },
};
