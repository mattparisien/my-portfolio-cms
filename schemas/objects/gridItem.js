export default {
  title: "Grid Item",
  name: "gridItem",
  type: "object",
  fields: [
    {
      name: "colSpan",
      title: "Column span",
      type: "object",
      fields: [
        { type: "string", name: "sm", title: "Tablet" },
        { type: "string", name: "md", title: "Laptop" },
        {
          type: "string",
          name: "lg",
          title: "Desktop",
        },
        {
          type: "string",
          name: "xl",
          title: "Desktop Large",
        },
      ],
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
      initialValue: (ctx, som) => {
        console.log(som, "..........");
      },
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
